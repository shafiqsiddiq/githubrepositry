import { success, failure, request, CONNECTION_REQUEST, } from "./utilities";
import { sendRequest, getAllRequest, requestRejection, requestAcceptance } from "../api";

export function sendRequestToUser(requestData, auth, moveToNext) {
    return dispatch => {
        dispatch(request(CONNECTION_REQUEST.SEND_CONNECTION_REQUEST));
        sendRequest(requestData, auth).then(
            response => {
                if (response.data.succeeded === true) {

                    dispatch(success(CONNECTION_REQUEST.SEND_CONNECTION_SUCCESS, response.data.data))
                    if (moveToNext) {
                        moveToNext();
                    }
                } else {
                    dispatch(failure(CONNECTION_REQUEST.SEND_CONNECTION_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(CONNECTION_REQUEST.SEND_CONNECTION_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function getAllUserRequest(propertyId, sortBy, auth) {
    return dispatch => {
        dispatch(request(CONNECTION_REQUEST.GET_ALL_CONNECTION_REQUEST));
        getAllRequest(propertyId, sortBy, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(CONNECTION_REQUEST.GET_ALL_CONNECTION_SUCCESS, response.data.data))
                } else {
                    dispatch(failure(CONNECTION_REQUEST.GET_ALL_CONNECTION_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(CONNECTION_REQUEST.GET_ALL_CONNECTION_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function acceptRequest(propertyId, auth, moveToNext) {
    return dispatch => {
        dispatch(request(CONNECTION_REQUEST.ACCEPT_CONNECTION_REQUEST));
        requestAcceptance(propertyId, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(CONNECTION_REQUEST.ACCEPT_CONNECTION_SUCCESS, propertyId))
                    if (moveToNext) {
                        moveToNext()
                    }
                } else {
                    dispatch(failure(CONNECTION_REQUEST.ACCEPT_CONNECTION_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(CONNECTION_REQUEST.ACCEPT_CONNECTION_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function rejectRequest(propertyId, auth, moveToNext) {
    return dispatch => {
        dispatch(request(CONNECTION_REQUEST.REJECT_CONNECTION_REQUEST));
        requestRejection(propertyId, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(CONNECTION_REQUEST.REJECT_CONNECTION_SUCCESS, propertyId))
                    if (moveToNext) {
                        moveToNext()
                    }
                } else {
                    dispatch(failure(CONNECTION_REQUEST.REJECT_CONNECTION_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(CONNECTION_REQUEST.REJECT_CONNECTION_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}