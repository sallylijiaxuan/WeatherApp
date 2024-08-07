import { View, StyleSheet } from 'react-native';
import Rain from './Rain';
import Lightning from './Lightning';

const Thunderstorm = () => {
    return(
        <View style={styles.container}>
            <Rain/>
            <Lightning/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        overflow: 'hidden',
        backgroundColor: 'gray',
        opacity: 0.6,
    },
});

export default Thunderstorm;

