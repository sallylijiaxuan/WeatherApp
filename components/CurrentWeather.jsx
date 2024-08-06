/* eslint-disable */
// Author:
import {View, Text, Image, StyleSheet} from 'react-native';

const CurrentWeather = ({city, weatherData, isCelsius}) => {
    const temperatureUnit = isCelsius ? 'C' : 'F';

    // Extracting current data information
    const currentTemp = isCelsius
        ? weatherData.main.temp
        : (weatherData.main.temp * 9) / 5 + 32;

    const minTemp = isCelsius
        ? weatherData.main.temp_min
        : (weatherData.main.temp_min * 9) / 5 + 32;

    const maxTemp = isCelsius
        ? weatherData.main.temp_max
        : (weatherData.main.temp_max * 9) / 5 + 32;

    const feelsLike = isCelsius
        ? weatherData.main.feels_like
        : (weatherData.main.feels_like * 9) / 5 + 32;

    const currentIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    const currentCondition = weatherData.weather[0].main;

    const currentDescription = weatherData.weather[0].description;

    return(
        <View style={styles.currentWeatherContainer}>
            <Text style={styles.city}>{city}</Text>

            <Image source={{uri: currentIcon}} style={styles.icon} />

            <Text style={styles.condition}>{currentCondition}</Text>

            <Text style={styles.description}>{currentDescription}</Text>

            <Text style={styles.temperature}>{currentTemp.toFixed(1)}°{temperatureUnit}</Text>

            <Text style={styles.minMaxTemp}>
                Min: {minTemp.toFixed(1)}°{temperatureUnit} |
                Max: {maxTemp.toFixed(1)}°{temperatureUnit}
            </Text>

            <Text style={styles.feelsLike}>Feels like: {feelsLike.toFixed(1)}°{temperatureUnit}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    currentWeatherContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    city: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    condition: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    temperature: {
        fontSize: 24,
        marginBottom: 5,
    },
    minMaxTemp: {
        fontSize: 18,
        marginBottom: 5,
    },
    feelsLike: {
        fontSize: 18,
        marginBottom: 10,
    },
});
export default CurrentWeather;