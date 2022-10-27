import { request, success, failure, LANDING_PAGE_REQUEST } from "./utilities";
import { getAllPropertyList, getAllRequirementList } from "../api";

export function allPropertisLis() {
    return dispatch => {
        dispatch(request(LANDING_PAGE_REQUEST.ALL_PROPERTY_REQUEST));
        getAllPropertyList().then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(LANDING_PAGE_REQUEST.ALL_PROPERTY_SUCCESS, response.data.data))
                } else {
                    dispatch(failure(LANDING_PAGE_REQUEST.ALL_PROPERTY_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(LANDING_PAGE_REQUEST.ALL_PROPERTY_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function allRequirementLis() {
    return dispatch => {
        dispatch(request(LANDING_PAGE_REQUEST.ALL_REQUIREMENT_REQUEST));
        getAllRequirementList().then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(LANDING_PAGE_REQUEST.ALL_REQUIREMENT_SUCCESS, response.data.data))
                } else {
                    dispatch(failure(LANDING_PAGE_REQUEST.ALL_REQUIREMENT_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(LANDING_PAGE_REQUEST.ALL_REQUIREMENT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}