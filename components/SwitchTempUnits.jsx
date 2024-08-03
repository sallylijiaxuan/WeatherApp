import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

const SwitchTempUnits = ({isCelsius, onValueChange}) => {
  return (
    <View style={styles.switchContainer}>
      <Text style={styles.switchLabel}>C°</Text>
      <Switch value={isCelsius} onValueChange={onValueChange} />
      <Text style={styles.switchLabel}>F°</Text>
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 14,
    marginHorizontal: 10,
  },
});

export default SwitchTempUnits;
