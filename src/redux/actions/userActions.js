import { request, success, failure, USER_REQUEST } from './utilities';
import { userLogin, updateTenantProfile, updateLandlordProfile, landlordStats, tenantStats, getTenantProfile, getLandlordProfile, resetPassword, enterCode, enterEmail, verifyLogin } from '../api';
export function login(loginData, setCookiesforUser) {
    return (dispatch) => {
        dispatch(request(USER_REQUEST.USER_SIGNIN_REQUEST));
        userLogin(loginData).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(USER_REQUEST.USER_SIGNIN_SUCCESS, response.data.data))
                    setCookiesforUser(response.data.data)
                }
                else {
                    dispatch(failure(USER_REQUEST.USER_SIGNIN_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(USER_REQUEST.USER_SIGNIN_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}
export function tenantUpdateProfile(profileData, auth, setCookiesforUser) {
    return (dispatch) => {
        dispatch(request(USER_REQUEST.UPDATE_TENANT_PROFILE_REQUEST));
        updateTenantProfile(profileData, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(USER_REQUEST.UPDATE_TENANT_PROFILE_SUCCESS, response.data.data))
                    if (setCookiesforUser) {
                        setCookiesforUser(response.data.data)
                    }
                }
                else {
                    dispatch(failure(USER_REQUEST.UPDATE_TENANT_PROFILE_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(USER_REQUEST.UPDATE_TENANT_PROFILE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}
export function landlordUpdateProfile(profileData, auth, setCookiesforUser) {
    return (dispatch) => {
        dispatch(request(USER_REQUEST.UPDATE_TENANT_PROFILE_REQUEST));
        updateLandlordProfile(profileData, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(USER_REQUEST.UPDATE_TENANT_PROFILE_SUCCESS, response.data.data))
                    if (setCookiesforUser) {
                        setCookiesforUser(response.data.data)
                    }
                }
                else {
                    dispatch(failure(USER_REQUEST.UPDATE_TENANT_PROFILE_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(USER_REQUEST.UPDATE_TENANT_PROFILE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function landlordStatsList(auth) {
    return dispatch => {
        dispatch(request(USER_REQUEST.GET_STAT_REQUEST))
        landlordStats(auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(USER_REQUEST.GET_STAT_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(USER_REQUEST.GET_STAT_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(USER_REQUEST.GET_STAT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function tenantStatsList(auth) {
    return dispatch => {
        dispatch(request(USER_REQUEST.GET_STAT_REQUEST))
        tenantStats(auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(USER_REQUEST.GET_STAT_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(USER_REQUEST.GET_STAT_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(USER_REQUEST.GET_STAT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function tenantProfileList(id, auth) {
    return dispatch => {
        dispatch(request(USER_REQUEST.GET_USER_PROFILE_REQUEST));
        getTenantProfile(id, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(USER_REQUEST.GET_USER_PROFILE_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(USER_REQUEST.GET_USER_PROFILE_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(USER_REQUEST.GET_USER_PROFILE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function landlordProfileList(id, auth) {
    return dispatch => {
        dispatch(request(USER_REQUEST.GET_USER_PROFILE_REQUEST));
        getLandlordProfile(id, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(USER_REQUEST.GET_USER_PROFILE_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(USER_REQUEST.GET_USER_PROFILE_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(USER_REQUEST.GET_USER_PROFILE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function getEmail(email, moveNext) {
    return dispatch => {
        dispatch(request(USER_REQUEST.GET_USER_EMAIL_REQUEST));
        enterEmail(email).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(USER_REQUEST.GET_USER_EMAIL_SUCCESS, response.data.data));
                    if (moveNext) {
                        moveNext(1);
                    }
                }
                else {
                    dispatch(failure(USER_REQUEST.GET_USER_EMAIL_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(USER_REQUEST.GET_USER_EMAIL_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function getCode(code, email, moveNext) {
    return dispatch => {
        dispatch(request(USER_REQUEST.GET_USER_CODE_REQUEST));
        enterCode(code, email).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(USER_REQUEST.GET_USER_CODE_SUCCESS, response.data.data));
                    if (moveNext) {
                        moveNext(2);
                    }
                }
                else {
                    dispatch(failure(USER_REQUEST.GET_USER_CODE_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(USER_REQUEST.GET_USER_CODE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function forgetPassword(info, moveNext) {
    return dispatch => {
        dispatch(request(USER_REQUEST.RESET_PASSWORD_REQUEST));
        resetPassword(info).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(USER_REQUEST.RESET_PASSWORD_SUCCESS, response.data.data));
                    if (moveNext) {
                        moveNext();
                    }
                }
                else {
                    dispatch(failure(USER_REQUEST.RESET_PASSWORD_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(USER_REQUEST.RESET_PASSWORD_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function verifyEmail(verifyData) {
    return dispatch => {
        dispatch(request(USER_REQUEST.VERIFY_EMAIL_RESET))
        dispatch(request(USER_REQUEST.VERIFY_EMAIL_REQUEST))
        verifyLogin(verifyData).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(USER_REQUEST.VERIFY_EMAIL_SUCCESS, response.data.data))
                } else {
                    dispatch(failure(USER_REQUEST.VERIFY_EMAIL_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(USER_REQUEST.VERIFY_EMAIL_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}