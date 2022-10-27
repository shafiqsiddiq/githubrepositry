import { request, success, failure, LOACTION_REQUEST } from './utilities';
import { getAllCities, getAllStates, getLocation, addLocation } from '../api';
export function getStates() {
    return (dispatch) => {
        dispatch(request(LOACTION_REQUEST.GET_STATES_REQUEST));
        getAllStates().then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(LOACTION_REQUEST.GET_STATES_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(LOACTION_REQUEST.GET_STATES_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(LOACTION_REQUEST.GET_STATES_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}
export function getCities(id) {
    return (dispatch) => {
        dispatch(request(LOACTION_REQUEST.GET_CITIES_REQUEST));
        getAllCities(id).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(LOACTION_REQUEST.GET_CITIES_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(LOACTION_REQUEST.GET_CITIES_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(LOACTION_REQUEST.GET_CITIES_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function addNewLocation(locationData, auth, moveToNext) {
    return (dispatch) => {
        dispatch(request(LOACTION_REQUEST.ADD_LOCATION_REQUEST));
        addLocation(locationData, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(LOACTION_REQUEST.ADD_LOCATION_SUCCESS, response.data.data))
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(failure(LOACTION_REQUEST.ADD_LOCATION_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(LOACTION_REQUEST.ADD_LOCATION_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}
export function getUserLocation(auth) {
    return (dispatch) => {
        dispatch(request(LOACTION_REQUEST.GET_LOCATION_REQUEST));
        getLocation(auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(LOACTION_REQUEST.GET_LOCATION_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(LOACTION_REQUEST.GET_LOCATION_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(LOACTION_REQUEST.GET_LOCATION_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}