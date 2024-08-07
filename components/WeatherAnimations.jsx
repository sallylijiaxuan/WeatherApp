import Clouds from '../animations/Clouds';
import Rain from '../animations/Rain';
import Drizzle from '../animations/Drizzle';
import Thunderstorm from "../animations/Thunderstorm";
import Clear from "../animations/Clear";
import Snow from "../animations/Snow";

// Possible conditions: Thunderstorm, Drizzle, Rain, Snow, Clear, Atmosphere(?)
const WeatherAnimations = ({ condition }) => {
    switch (condition) {
        case 'Clouds':
            return <Clouds />;

        case 'Rain':
            return <Rain />;

        case 'Drizzle':
            return <Drizzle />;

        case 'Thunderstorm':
            return <Thunderstorm />;

        case 'Clear':
            return <Clear />;

        case 'Snow':
            return <Snow />;

        default:
            return <Clouds />;
    }
};

export default WeatherAnimations;