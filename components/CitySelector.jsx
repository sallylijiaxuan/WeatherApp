import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { cities } from '../assets/cities';

// A function that implements drop down feature according to a preset database in cities.js
const CitySelector = ({ selectedCity, onCityChange }) => {
    const [value, setValue] = useState(null);

    const cityItems = cities.map(city => ({
        label: city.name,
        value: city.name,
    }));

    return (
        <View style={styles.container}>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={cityItems}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select city"
                searchPlaceholder="Type to search..."
                value={value}
                onChange={item => {
                    setValue(item.value);
                    onCityChange(item.value);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // To have container take up the available space
    },
    dropdown: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'gray',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default CitySelector;
