import {useEffect, useRef} from 'react';
import {Animated, Easing, Image, ImageBackground, StyleSheet, View} from 'react-native';
import cloudsImage from '../assets/many-mini-clouds-small.jpg';

const INPUT_RANGE_START = 0;
const INPUT_RANGE_END = 1;
const OUTPUT_RANGE_START = -281;
const OUTPUT_RANGE_END = 0;
const ANIMATION_TO_VALUE = 1;
const ANIMATION_DURATION = 15000;
const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 1200;

export default function Clouds() {
    const initialValue = 0;
    const translatedValue = useRef(new Animated.Value(initialValue)).current;

    useEffect(() => {
        const translate = () => {
            translatedValue.setValue(initialValue);

            Animated.timing(translatedValue, {
                toValue: ANIMATION_TO_VALUE,
                duration: ANIMATION_DURATION,
                easing: Easing.linear,
                useNativeDriver: true,
            }).start(() => translate());
        };

        translate();
    }, [translatedValue]);

    const translatedAnimation = translatedValue.interpolate({
        inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
        outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END], // 0, -IMAGE_WIDTH
    });

    const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

    return(
        <View style={styles.container}>
            <AnimatedImage
                resizeMode="cover"
                source={cloudsImage}
                style={[
                    styles.image,
                    {
                        transform: [
                            {translateX: translatedAnimation},
                            {translateY: translatedAnimation},
                        ],
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        // overflow: 'hidden',
    },
    image: {
        position: 'absolute',
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        opacity: 0.2,
        transform:[
                {
                    translateX: 0,
                },
                {
                    translateY: 0,
                }
            ]
    },
})