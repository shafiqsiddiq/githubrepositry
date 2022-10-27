import { request, success, failure, INDUSTRY_REQUEST } from "./utilities";
import { getAllIndustry } from "../api";

export function getAllIndustries() {
    return dispatch => {
        dispatch(request(INDUSTRY_REQUEST.GET_INDUSTRY_REQUEST))
        getAllIndustry().then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(INDUSTRY_REQUEST.GET_INDUSTRY_SUCCESS, response.data.data))
                } else {
                    dispatch(failure(INDUSTRY_REQUEST.GET_INDUSTRY_FAILURE, response.data.message))
                }
            }, error => {
                dispatch(failure(INDUSTRY_REQUEST.GET_INDUSTRY_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function addlIndustry() {
    return dispatch => {
        dispatch(request(INDUSTRY_REQUEST.ADD_INDUSTRY_REQUEST))
        getAllIndustry().then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(INDUSTRY_REQUEST.ADD_INDUSTRY_SUCCESS, response.data.data))
                } else {
                    dispatch(failure(INDUSTRY_REQUEST.ADD_INDUSTRY_FAILURE, response.data.message))
                }
            }, error => {
                dispatch(failure(INDUSTRY_REQUEST.ADD_INDUSTRY_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}