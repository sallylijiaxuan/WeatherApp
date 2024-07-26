import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet, ActivityIndicator} from 'react-native';
import useSWR from 'swr';
import axios from 'axios';
import SwitchTempUnits from "./SwitchTempUnits";

/*
Steps on terminal to run app:
npx react-native start
npx react-native run-ios
*/

// Helper function for API fetch
const fetcher = url => axios.get(url).then(res => res.data);

const Weather = () => {
  // Storing temperature unit and fetched data
  const [isCelsius, setIsCelsius] = useState(true);

  const apiKey = '7ea842b63dec133617b1e39bad1c99ad';
  const city = 'Boston';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // API call with useSWR
  const {data, error, isLoading} = useSWR(url, fetcher);
  if (error) {
    return <Text>Failed to load weather data</Text>;
  }
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  // ActivityIndicator to indicate bg task is in progress w/o any known duration
  if (!data) {
    return <ActivityIndicator color="white" size="large" />;
  }

  // Conversion between Celsius and Fahrenheit
  const temperature = isCelsius
    ? data.main.temp // - 273.15
    : (data.main.temp * 9) / 5 + 32;

  const temperatureUnit = isCelsius ? 'C' : 'F';

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.temperature}>
        {temperature.toFixed(1)}°{temperatureUnit}
      </Text>

      <SwitchTempUnits
        isCelsius={isCelsius}
        onValueChange={() => setIsCelsius(!isCelsius)}
      />
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1, // makes component fill the whole space
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  city: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 16,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default Weather;
