import hotelReducer from './hotels/hotelReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    hotels: hotelReducer
});

export default rootReducer;
