import { request, success, failure, REQUIREMENT_PROPERTY_REQUEST } from './utilities';
import { addRequirement, getRequirement } from '../api';

export function addNewRequirement(requirementData, auth, moveToNext) {
    return (dispatch) => {
        dispatch(request(REQUIREMENT_PROPERTY_REQUEST.ADD_REQUIREMENT_REQUEST));
        addRequirement(requirementData, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(REQUIREMENT_PROPERTY_REQUEST.ADD_REQUIREMENT_SUCCESS, response.data.data))
                    if (moveToNext) {
                       moveToNext();
                    }
                }
                else {
                    dispatch(failure(REQUIREMENT_PROPERTY_REQUEST.ADD_REQUIREMENT_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(REQUIREMENT_PROPERTY_REQUEST.ADD_REQUIREMENT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function getUserRequirement(auth) {
    return (dispatch) => {
        dispatch(request(REQUIREMENT_PROPERTY_REQUEST.GET_REQUIREMENT_REQUEST));
        getRequirement(auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(REQUIREMENT_PROPERTY_REQUEST.GET_REQUIREMENT_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(REQUIREMENT_PROPERTY_REQUEST.GET_REQUIREMENT_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(REQUIREMENT_PROPERTY_REQUEST.GET_REQUIREMENT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function editRequirement(requirementData, auth, moveToNext) {
    return (dispatch) => {
        dispatch(request(REQUIREMENT_PROPERTY_REQUEST.ADD_REQUIREMENT_REQUEST));
        addRequirement(requirementData, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(REQUIREMENT_PROPERTY_REQUEST.ADD_REQUIREMENT_SUCCESS, response.data.data))
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(failure(REQUIREMENT_PROPERTY_REQUEST.ADD_REQUIREMENT_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(REQUIREMENT_PROPERTY_REQUEST.ADD_REQUIREMENT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}