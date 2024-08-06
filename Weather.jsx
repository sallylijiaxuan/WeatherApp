/* eslint-disable */
import React, {useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image, FlatList} from 'react-native';
import useSWR from 'swr';
import axios from 'axios';
import SwitchTempUnits from './components/SwitchTempUnits';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from "./components/ForecastWeather";
import Clouds from './animations/Clouds';
import WeatherAnimations from "./components/WeatherAnimations";

/*
Steps on terminal to run app:
npx react-native start
npx react-native run-ios

OR

npm run ios
*/

// Helper function for API fetch
const fetcher = url => axios.get(url).then(res => res.data);

const Weather = () => {
  // Storing temperature unit and fetched data
  const [isCelsius, setIsCelsius] = useState(true);

  const apiKey = '7ea842b63dec133617b1e39bad1c99ad';
  const city = 'Boston';

  // Fetching URLs for current weather and forecast weather data
  const currentWeatherUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const forecastUrl =
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  // API call with useSWR
  const {data: weatherData, error: weatherError, isLoading: weatherIsLoading} = useSWR(currentWeatherUrl, fetcher);
  const {data: forecastData, error: forecastError, isLoading: forecastIsLoading} = useSWR(forecastUrl, fetcher);

  if (weatherError || forecastError) {
    return <Text>Failed to load weather data</Text>;
  }
  if (weatherIsLoading || forecastIsLoading) {
    return <Text>Loading...</Text>;
  }
  // ActivityIndicator to indicate bg task is in progress w/o any known duration
  if (!weatherData || !forecastData) {
    return <ActivityIndicator color="white" size="large" />;
  }

  // Getting today's date
  const currentDate = new Date().toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'});
  const currentCondition = weatherData.weather[0].main;

  // Extracting forecast data information based on the most prevalent conditions for each day
  const forecastList = Object.values(
      // reduce is used to iterate over the list array and acc is the accumulated object based on the item
      forecastData.list.reduce((acc, item) => {
        const date = new Date(item.dt_txt).toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
        });

        if(!acc[date]){ // Checking if accumulator has that date entry, if not, initialize with the below:
            acc[date] = {
              date,
              maxTemp: item.main.temp_max,
              minTemp: item.main.temp_min,
              conditionCounts: {},
              weatherDescription: item.weather[0].description,
              weatherIcon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
            };
        } else { // if the date exists, update max and min temp if applicable
          acc[date].maxTemp = Math.max(acc[date].maxTemp, item.main.temp_max);
          acc[date].minTemp = Math.max(acc[date].minTemp, item.main.temp_min);
        }

        const condition = item.weather[0].main;
        // Checking if a condition exists.
      // If the condition doesn't exist, count is set to 0
      // If condition exist for first time, it is set to 0 before incrementing. If not first time, it is incremented by 1
        acc[date].conditionCounts[condition] = (acc[date].conditionCounts[condition] || 0) + 1;

        return acc;
      }, {})
  ).map(day => {
      // Determining the majority condition
    const dominantCondition = Object.keys(day.conditionCounts).reduce((conditionA, conditionB) =>
        day.conditionCounts[conditionA] > day.conditionCounts[conditionB] ? conditionA : conditionB
    );
    return {
      ...day, // Copy of all properties of day
      dominantCondition,
      maxTemp: isCelsius ? day.maxTemp : (day.maxTemp * 9) / 5 + 32,
      minTemp: isCelsius ? day.minTemp : (day.minTemp * 9) / 5 + 32,
    };
  });

  return (
      <View style={styles.container}>
          <Clouds />
          {/*// <WeatherAnimations condition={currentCondition} />/*/}
        <View style={styles.dateAndSwitchContainer}>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>{currentDate}</Text>
            </View>

            <View style={styles.switchContainer}>
                <SwitchTempUnits
                    isCelsius={isCelsius}
                    onValueChange={() => setIsCelsius(!isCelsius)}
                />
            </View>
        </View>

        <CurrentWeather city={city} weatherData={weatherData} isCelsius={isCelsius} />

        <ForecastWeather forecastList={forecastList} isCelsius={isCelsius} />

      </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1, // makes component fill the whole space
    backgroundColor: 'white',
    marginTop: 20,
    padding: 5,
  },
  dateAndSwitchContainer: {
    marginBottom: 50,
  },
  switchContainer:{
    position: 'absolute',
    top: 5,
    right: 5, // dist. from top and right edges
  },
  dateContainer: {
    position: 'absolute',
    fontSize: 18,
    top:5,
    left: 5,
  },
});

export default Weather;