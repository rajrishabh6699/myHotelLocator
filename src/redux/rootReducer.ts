import hotelReducer from './hotels/hotelReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    hotels: hotelReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
