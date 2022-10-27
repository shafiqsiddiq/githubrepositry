import { request, success, failure, POST_PROPERTY, PROPERTIES_REQUEST } from './utilities';
import {
    addPropertyFile, removePropertyFile, getPropertyById, getPropertyFileById,
    changePropertyMediaStatus, getAllPropertyFiles, getPropertyDetailById
} from '../api';

export function addFile(fileData, auth) {
    return dispatch => {
        dispatch(request(POST_PROPERTY.ADD_PROPERTY_FILE_REQUEST));
        addPropertyFile(fileData, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(POST_PROPERTY.ADD_PROPERTY_FILE_SUCCESS, response.data.data))
                } else {
                    dispatch(failure(POST_PROPERTY.ADD_PROPERTY_FILE_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(POST_PROPERTY.ADD_PROPERTY_FILE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function removeFile(fileId, auth) {
    return dispatch => {
        dispatch(request(POST_PROPERTY.REMOVE_PROPERTY_FILE_REQUEST));
        removePropertyFile(fileId, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(POST_PROPERTY.REMOVE_PROPERTY_FILE_SUCCESS, fileId))
                } else {
                    dispatch(failure(POST_PROPERTY.REMOVE_PROPERTY_FILE_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(POST_PROPERTY.REMOVE_PROPERTY_FILE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function getfileById(fileId, auth) {
    return dispatch => {
        dispatch(request(POST_PROPERTY.GET_PROPERTY_FILE_BY_ID_REQUEST));
        getPropertyFileById(fileId, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(POST_PROPERTY.GET_PROPERTY_FILE_BY_ID_SUCCESS, response.data.data))
                } else {
                    dispatch(failure(POST_PROPERTY.GET_PROPERTY_FILE_BY_ID_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(POST_PROPERTY.GET_PROPERTY_FILE_BY_ID_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function getAllfiles(propertyId, auth) {
    return dispatch => {
        dispatch(request(POST_PROPERTY.GET_ALL_PROPERTY_FILES_REQUEST));
        getAllPropertyFiles(propertyId, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(POST_PROPERTY.GET_ALL_PROPERTY_FILES_SUCCESS, response.data.data))
                } else {
                    dispatch(failure(POST_PROPERTY.GET_ALL_PROPERTY_FILES_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(POST_PROPERTY.GET_ALL_PROPERTY_FILES_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}

export function getPropertyDetail(propertyId, auth) {
    return dispatch => {
        dispatch(request(POST_PROPERTY.GET_PROPERTY_DETAIL_REQUEST));
        getPropertyDetailById(propertyId, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(POST_PROPERTY.GET_PROPERTY_DETAIL_SUCCESS, response.data.data))
                } else {
                    dispatch(failure(POST_PROPERTY.GET_PROPERTY_DETAIL_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(POST_PROPERTY.GET_PROPERTY_DETAIL_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}

export function getPropetyById(propertyId, auth) {
    return dispatch => {
        dispatch(request(PROPERTIES_REQUEST.GET_PROPERTY_BY_ID_REQUEST));
        getPropertyById(propertyId, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(PROPERTIES_REQUEST.GET_PROPERTY_BY_ID_SUCCESS, response.data.data))
                } else {
                    dispatch(failure(PROPERTIES_REQUEST.GET_PROPERTY_BY_ID_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(PROPERTIES_REQUEST.GET_PROPERTY_BY_ID_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function changeMediaStatus(propertyId, auth) {
    return dispatch => {
        dispatch(request(PROPERTIES_REQUEST.CHANGE_MEDIA_REQUEST));
        changePropertyMediaStatus(propertyId, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(PROPERTIES_REQUEST.CHANGE_MEDIA_SUCCESS, response.data.data))
                } else {
                    dispatch(failure(PROPERTIES_REQUEST.CHANGE_MEDIA_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(PROPERTIES_REQUEST.CHANGE_MEDIA_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}