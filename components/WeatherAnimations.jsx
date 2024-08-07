import Clouds from '../animations/Clouds';
import Rain from '../animations/Rain';
import Drizzle from '../animations/Drizzle';

// Possible conditions: Thunderstorm, Drizzle, Rain, Snow, Clear, Atmosphere(?)
const WeatherAnimations = ({ condition }) => {
    switch (condition) {
        case 'Clouds':
            return <Clouds />;

        case 'Rain':
            return <Rain />;

        case 'Drizzle':
            return <Drizzle />;

        default:
            return null;
    }
};

export default WeatherAnimations;