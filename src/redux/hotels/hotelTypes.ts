export enum ActionType {
    FETCH_HOTELS_REQUEST = 'FETCH_HOTELS_REQUEST',
    FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS',
    FETCH_HOTELS_FAILURE = 'FETCH_HOTELS_FAILURE',
    SEARCH_HOTEL_DATA = 'SEARCH_HOTEL_DATA',
    SHOW_MAP = 'SHOW_MAP',
}

export interface hotelsState {
    loading: boolean;
    hotels: object[];
    info: number;
    currentPage: number;
    error: string | null;
    searchData: string;
    show: boolean;
}