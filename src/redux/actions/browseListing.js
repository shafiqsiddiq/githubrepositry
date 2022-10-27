import { getAllLists, getAllTenants, sendRequest } from "../api"
import { BROWSE_LISTING, request, success, failure } from "./utilities"

export function getAllPropertyList(listData, auth) {
    return dispatch => {
        dispatch(request(BROWSE_LISTING.GET_LIST_REQUEST));
        getAllLists(listData, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(BROWSE_LISTING.GET_LIST_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(BROWSE_LISTING.GET_LIST_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(BROWSE_LISTING.GET_LIST_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}

export function getAllTenantList(listData, auth) {
    return dispatch => {
        dispatch(request(BROWSE_LISTING.GET_TENANTS_REQUEST));
        getAllTenants(listData, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(BROWSE_LISTING.GET_TENANTS_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(BROWSE_LISTING.GET_TENANTS_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(BROWSE_LISTING.GET_TENANTS_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}

export function sendRequestToTenant(requestData, auth, moveToNext) {
    return dispatch => {
        dispatch(request(BROWSE_LISTING.TENANT_CONNECTION_REQUEST));
        sendRequest(requestData, auth).then(
            response => {
                if (response.data.succeeded === true) {

                    dispatch(success(BROWSE_LISTING.TENANT_CONNECTION_SUCCESS, response.data.data))
                    if (moveToNext) {
                        moveToNext();
                    }
                } else {
                    dispatch(failure(BROWSE_LISTING.TENANT_CONNECTION_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(BROWSE_LISTING.TENANT_CONNECTION_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}