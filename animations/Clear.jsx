import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Function that creates a gradient of blue as the bg of the app
const Clear = () => {
    return(
        <LinearGradient
            style={styles.container}
            colors={['#E0FFFF', '#00BFFF']} // ['#87CEEB', '#00CCFF']
        />
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
})

export default Clear;