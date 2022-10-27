import { LOACTION_REQUEST } from "../actions/utilities";
const INITIAL_STATE = {
    stateLoading: false,
    stateSuccess: false,
    stateFailure: false,
    stateError: null,
    stateList: [],
    citiesLoading: false,
    citiesSuccess: false,
    citiesFailure: false,
    citiesError: null,
    citiesList: [],
    addLocationLoading: false,
    addLocationSuccess: false,
    addLocationFailure: false,
    addLocationError: null,
    getLocationLoading: false,
    getLocationSuccess: false,
    getLocationFailure: false,
    getLocationError: null,
    getLocation: []
};

export const stateAndCityReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOACTION_REQUEST.GET_STATES_REQUEST:
            return {
                ...state,
                stateLoading: true,
                stateSuccess: false,
                stateFailure: false,
                stateError: null,
            }
        case LOACTION_REQUEST.GET_STATES_FAILURE:
            return {
                ...state,
                stateLoading: false,
                stateSuccess: false,
                stateFailure: true,
                stateError: action.payload
            }
        case LOACTION_REQUEST.GET_STATES_SUCCESS:
            return {
                ...state,
                stateLoading: false,
                stateSuccess: true,
                stateFailure: false,
                stateError: null,
                stateList: action.payload
            }
        case LOACTION_REQUEST.GET_CITIES_REQUEST:
            return {
                ...state,
                citiesLoading: true,
                citiesSuccess: false,
                citiesFailure: false,
                citiesError: null,
            }
        case LOACTION_REQUEST.GET_CITIES_SUCCESS:
            return {
                ...state,
                citiesLoading: false,
                citiesSuccess: true,
                citiesFailure: false,
                citiesError: null,
                citiesList: action.payload
            }
        case LOACTION_REQUEST.GET_CITIES_FAILURE:
            return {
                ...state,
                citiesLoading: false,
                citiesSuccess: false,
                citiesFailure: true,
                citiesError: action.payload
            }
        case LOACTION_REQUEST.ADD_LOCATION_REQUEST:
            return {
                ...state,
                addLocationLoading: true,
                addLocationSuccess: false,
                addLocationFailure: false,
            }
        case LOACTION_REQUEST.ADD_LOCATION_SUCCESS:
            return {
                ...state,
                addLocationLoading: false,
                addLocationSuccess: true,
                addLocationFailure: false,

            }
        case LOACTION_REQUEST.ADD_LOCATION_FAILURE:
            return {
                ...state,
                addLocationLoading: false,
                addLocationSuccess: false,
                addLocationFailure: true,
                addLocationError: action.payload,
            }
        case LOACTION_REQUEST.GET_LOCATION_REQUEST:
            return {
                ...state,
                getLocationLoading: true,
                getLocationSuccess: false,
                getLocationFailure: false,
            }
        case LOACTION_REQUEST.GET_LOCATION_SUCCESS:
            return {
                ...state,
                getLocationLoading: false,
                getLocationSuccess: true,
                getLocationFailure: false,
                getLocation: action.payload

            }
        case LOACTION_REQUEST.GET_LOCATION_FAILURE:
            return {
                ...state,
                getLocationLoading: false,
                getLocationSuccess: false,
                getLocationFailure: true,
                getLocationError: action.payload,
            }
        default:
            return state;
    }
};
