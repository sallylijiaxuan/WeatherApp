import {useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';

// Function that will be called in Thunderstorm
const Lightning = () => {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const flash = () => {
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true,
                }),
                // Random delays b/w flashes
                Animated.delay(Math.random() * 5000 + 2000),
            ]).start(() => flash());
        };
        flash();
    }, [opacity]);

    return (
        <Animated.View style={[styles.flash, {opacity}]}/>
    );
};

const styles = StyleSheet.create({
    flash: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
    }
})

export default Lightning;