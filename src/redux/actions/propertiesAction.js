import { request, success, failure, PROPERTIES_REQUEST } from "./utilities";
import { getAllPropertiesList, getAnalytics, recordDeal } from "../api";

export function getAllProperties(auth) {
    return dispatch => {
        dispatch(request(PROPERTIES_REQUEST.GET_ALL_PROPERTIES_REQUEST));
        getAllPropertiesList(auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(PROPERTIES_REQUEST.GET_ALL_PROPERTIES_SUCCESS, response.data.data))
                } else {
                    dispatch(failure(PROPERTIES_REQUEST.GET_ALL_PROPERTIES_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(PROPERTIES_REQUEST.GET_ALL_PROPERTIES_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function recordPropertyDeal(propertyId, auth, closeModal) {
    return dispatch => {
        dispatch(request(PROPERTIES_REQUEST.RECORD_DEAL_REQUEST));
        recordDeal(propertyId, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(PROPERTIES_REQUEST.RECORD_DEAL_SUCCESS, propertyId))
                    if (closeModal) {
                        closeModal();
                    }
                } else {
                    dispatch(failure(PROPERTIES_REQUEST.RECORD_DEAL_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(PROPERTIES_REQUEST.RECORD_DEAL_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}

export function analyticsList(id, type, auth) {
    return dispatch => {
        dispatch(request(PROPERTIES_REQUEST.GET_ANALYTICS_REQUEST));
        getAnalytics(id, type, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(PROPERTIES_REQUEST.GET_ANALYTICS_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(PROPERTIES_REQUEST.GET_ANALYTICS_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(PROPERTIES_REQUEST.GET_ANALYTICS_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
