import { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Snowflake from './Snowflake';

const { width: screenWidth } = Dimensions.get('window');
const NUM_SNOWFLAKES = 50;
const DURATION = 5000;

const Snow = () => {
    // Empty array to store reusable Snowflake components
    const pool = useRef([]);
    const [snowflakes, setSnowflakes] = useState(Array(NUM_SNOWFLAKES).fill(null));

    // Function that resets and reuses snowflakes
    // snowflake is positioned randomly across screen width (xStart)
    const resetSnowflake = (index) => {
        pool.current[index] = null;
        setTimeout(() => {
            pool.current[index] = (
                <Snowflake
                    key={index}
                    xStart={Math.random() * screenWidth}
                    delay={Math.random() * 1000}
                    duration={DURATION}
                    onEnd={() => resetSnowflake(index)}
                />
            );
            setSnowflakes([...pool.current]);
        }, Math.random() * 1000);
    };

    // Initialize pool with snowflakes
    useEffect(() => {
        snowflakes.forEach((_, index) => {
            resetSnowflake(index);
        });
    }, []);

    // View is rendered to store all the snowflakes from the snowflakes state
    return <View style={styles.container}>{snowflakes}</View>;
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        overflow: 'hidden',
        backgroundColor: '#00BFFF',
        opacity: 0.2,
    },
});

export default Snow;
