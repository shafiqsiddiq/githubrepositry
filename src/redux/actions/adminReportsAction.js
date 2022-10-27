import {
    getPropertyReport, getSubscriptionReport, getUserReport, subscriptionByMonth, subscriptionByState, subscriptionByCount,
    userByCount, userByMonth, getMediaList, getUserList
} from "../api";
import { request, success, failure, REPORTS_REQUEST } from "./utilities";

export function propertyReport(id) {
    return dispatch => {
        dispatch(request(REPORTS_REQUEST.GET_PROPERTY_REPORT_REQUEST));
        getPropertyReport(id).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(REPORTS_REQUEST.GET_PROPERTY_REPORT_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(REPORTS_REQUEST.GET_PROPERTY_REPORT_FAILURE, response.data.message))
                }
            }
            ,
            error => {
                dispatch(failure(REPORTS_REQUEST.GET_PROPERTY_REPORT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}

export function subscriptionReport(id, pageNumber) {
    return dispatch => {
        dispatch(request(REPORTS_REQUEST.GET_SUBSCRIPTION_REPORT_REQUEST));
        getSubscriptionReport(id, pageNumber).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(REPORTS_REQUEST.GET_SUBSCRIPTION_REPORT_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(REPORTS_REQUEST.GET_SUBSCRIPTION_REPORT_FAILURE, response.data.message))
                }
            }
            ,
            error => {
                dispatch(failure(REPORTS_REQUEST.GET_SUBSCRIPTION_REPORT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function userReport(id) {
    return dispatch => {
        dispatch(request(REPORTS_REQUEST.GET_USER_REPORT_REQUEST));
        getUserReport(id).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(REPORTS_REQUEST.GET_USER_REPORT_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(REPORTS_REQUEST.GET_USER_REPORT_FAILURE, response.data.message))
                }
            }
            ,
            error => {
                dispatch(failure(REPORTS_REQUEST.GET_USER_REPORT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function mediaList(auth) {
    return dispatch => {
        dispatch(request(REPORTS_REQUEST.GET_MEDIA_LIST_REQUEST));
        getMediaList(auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(REPORTS_REQUEST.GET_MEDIA_LIST_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(REPORTS_REQUEST.GET_MEDIA_LIST_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(REPORTS_REQUEST.GET_MEDIA_LIST_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function getListOfUser(data) {
    return dispatch => {
        dispatch(request(REPORTS_REQUEST.GET_ALL_USER_REQUEST));
        getUserList(data).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(REPORTS_REQUEST.GET_ALL_USER_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(REPORTS_REQUEST.GET_ALL_USER_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(REPORTS_REQUEST.GET_ALL_USER_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function byMonthSubscription() {
    return dispatch => {
        dispatch(request(REPORTS_REQUEST.GET_SUBSCRIPTION_BY_MONTH_REQUEST))
        subscriptionByMonth().then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(REPORTS_REQUEST.GET_SUBSCRIPTION_BY_MONTH_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(REPORTS_REQUEST.GET_SUBSCRIPTION_REPORT_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(REPORTS_REQUEST.GET_SUBSCRIPTION_REPORT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}

export function byStateSubscription() {
    return dispatch => {
        dispatch(request(REPORTS_REQUEST.GET_SUBSCRIPTION_BY_STATE_REQUEST))
        subscriptionByState().then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(REPORTS_REQUEST.GET_SUBSCRIPTION_BY_STATE_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(REPORTS_REQUEST.GET_SUBSCRIPTION_BY_STATE_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(REPORTS_REQUEST.GET_SUBSCRIPTION_BY_STATE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}

export function byCountSubscription() {
    return dispatch => {
        dispatch(request(REPORTS_REQUEST.GET_SUBSCRIPTION_BY_COUNT_REQUEST))
        subscriptionByCount().then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(REPORTS_REQUEST.GET_SUBSCRIPTION_BY_COUNT_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(REPORTS_REQUEST.GET_SUBSCRIPTION_BY_COUNT_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(REPORTS_REQUEST.GET_SUBSCRIPTION_BY_COUNT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}

export function byCountUser() {
    return dispatch => {
        dispatch(request(REPORTS_REQUEST.GET_USER_BY_COUNT_REQUEST))
        userByCount().then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(REPORTS_REQUEST.GET_USER_BY_COUNT_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(REPORTS_REQUEST.GET_USER_BY_COUNT_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(REPORTS_REQUEST.GET_USER_BY_COUNT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}

export function byMonthUser() {
    return dispatch => {
        dispatch(request(REPORTS_REQUEST.GET_USER_BY_MONTH_REQUEST))
        userByMonth().then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(REPORTS_REQUEST.GET_USER_BY_MONTH_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(REPORTS_REQUEST.GET_USER_BY_MONTH_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(REPORTS_REQUEST.GET_USER_BY_MONTH_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}