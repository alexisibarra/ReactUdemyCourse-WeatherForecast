import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather.js';
import '../styles/style.css';

const rootReducer = combineReducers({
  weather: WeatherReducer
})

export default rootReducer;