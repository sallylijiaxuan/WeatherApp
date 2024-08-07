import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

// Snowflake component that rotates and floats from top of the screen to the bottom
const Snowflake = ({ xStart, delay, duration, onEnd }) => {
    const translateY = useRef(new Animated.Value(-50)).current;
    const rotate = useRef(new Animated.Value(0)).current;

    // There are two parallel animations: translateY and rotate
    useEffect(() => {
        const startAnimation = () => {
            translateY.setValue(-50);
            rotate.setValue(0);
            Animated.parallel([
                Animated.timing(translateY, {
                    toValue: 1000,
                    duration,
                    delay,
                    useNativeDriver: true,
                }),
                Animated.timing(rotate, {
                    toValue: 1,
                    duration,
                    delay,
                    useNativeDriver: true,
                }),
            ]).start(() => onEnd());
        };
        startAnimation();
    }, [translateY, rotate, delay, duration, onEnd]);

    const spin = rotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <Animated.View
            style={[
                styles.snowflake,
                { left: xStart, transform: [{ translateY }, { rotate: spin }] },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    snowflake: {
        position: 'absolute',
        width: 10,
        height: 10,
        backgroundColor: 'white',
        borderRadius: 3,
        // borderColor: 'black',
    },
});

export default Snowflake;
