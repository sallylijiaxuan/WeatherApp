/* eslint-disable */
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import React from "react";

{/*Forecast weather (5-Days*/}
const ForecastWeather = ({forecastList, isCelsius}) => {
    const temperatureUnit = isCelsius ? 'C' : 'F';

    return(
        <View style={styles.forecastContainer}>
            <Text style={styles.forecastTitle}>5-Day Forecast: </Text>
            <FlatList
                data={forecastList}
                keyExtractor={(item) => item.date}
                renderItem={({item}) => (
                    <View style={styles.forecastItemContainer}>
                        <Text style={styles.forecastDate}>{item.date}</Text>

                        <Image source={{ uri: item.weatherIcon}} style={styles.forecastIcon} />

                        <Text style={styles.forecastDescription}>{item.weatherDescription}</Text>

                        <Text style={styles.forecastTemp}>
                            {item.minTemp.toFixed(1)}°{temperatureUnit} - {item.maxTemp.toFixed(1)}°{temperatureUnit}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    forecastContainer: {
        flex: 1,
    },
    forecastTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
        textAlign: 'left',
    },
    forecastItemContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100%',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    forecastDate: {
        fontSize: 14,
        flex: 1,
    },
    forecastIcon: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    forecastCondition: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },
    forecastDescription: {
        fontSize: 14,
        flex: 2,
    },
    forecastTemp: {
        fontSize: 14,
        flex: 2,
    },
})

export default ForecastWeather;