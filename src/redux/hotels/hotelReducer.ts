import { Action } from './hotelActions';
import { ActionType, hotelsState } from './hotelTypes';


const initialState = {
    loading: false,
    hotels: [],
    info: 0,
    currentPage: 1,
    error: null,
    searchData: "",
    show: true,
}

const hotelReducer = (state: hotelsState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.FETCH_HOTELS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case ActionType.FETCH_HOTELS_SUCCESS:
            return {
                ...state,
                loading: false,
                hotels: [...state.hotels, ...action.payload.data],
                info: action.payload.totalEntries,
                currentPage: action.payload.currentPage,
                error: null,
            };

        case ActionType.FETCH_HOTELS_FAILURE:
            return {
                ...state,
                loading: false,
                hotels: [],
                number: 0,
                errors: action.payload,
            };

        case ActionType.SEARCH_HOTEL_DATA:
            return {
                ...state,
                searchData: action.payload,
            }

        case ActionType.SHOW_MAP:
            return {
                ...state,
                show: action.payload,
            }

        default:
            return state;
    }
}

export default hotelReducer;