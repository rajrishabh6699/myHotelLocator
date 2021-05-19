import axios from 'axios';
import { hotelDataApi } from '../../keys';
import { Dispatch } from 'redux';
import { ActionType } from './hotelTypes';

export type Action =
    | fetchHotelsRequestAction
    | fetchHotelsSuccessAction
    | fetchHotelsFailureAction
    | searchHotelDataAction
    | showMapAction;
interface fetchHotelsRequestAction {
    type: ActionType.FETCH_HOTELS_REQUEST;
}
interface fetchHotelsSuccessAction {
    type: ActionType.FETCH_HOTELS_SUCCESS;
    payload: { data: object[], totalEntries: number, currentPage: number };
}
interface fetchHotelsFailureAction {
    type: ActionType.FETCH_HOTELS_FAILURE;
    payload: string;
}
interface searchHotelDataAction {
    type: ActionType.SEARCH_HOTEL_DATA;
    payload: string;
}

interface showMapAction {
    type: ActionType.SHOW_MAP;
    payload: boolean;
}

export const fetchHotels = (num: number) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FETCH_HOTELS_REQUEST
        });

        try {
            const response = await axios.get(hotelDataApi, { params: { page: num } });
            const hotelData = response.data.data;
            const information = response.data.total;
            const currentPage = response.data.page;

            dispatch({
                type: ActionType.FETCH_HOTELS_SUCCESS,
                payload: { data: hotelData, totalEntries: information, currentPage: currentPage },
            });
        }
        catch (error) {
            dispatch({
                type: ActionType.FETCH_HOTELS_FAILURE,
                payload: error.message
            });
        }
    }
}

