import { request, success, failure, BUSSINESS_PROFILE } from './utilities';
import { addBussinessProfile, getBussinessProfile } from '../api';
export function addBussinessProgileData(data, auth, moveToNext) {
    return (dispatch) => {
        dispatch(request(BUSSINESS_PROFILE.ADD_BUSSINESS_PROFILE_REQUEST));
        addBussinessProfile(data, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(BUSSINESS_PROFILE.ADD_BUSSINESS_PROFILE_SUCCESS, response.data.data))
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(failure(BUSSINESS_PROFILE.ADD_BUSSINESS_PROFILE_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(BUSSINESS_PROFILE.ADD_BUSSINESS_PROFILE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function getBussinessProfileData(auth) {
    return (dispatch) => {
        dispatch(request(BUSSINESS_PROFILE.GET_BUSSINESS_PROFILE_REQUEST));
        getBussinessProfile(auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(BUSSINESS_PROFILE.GET_BUSSINESS_PROFILE_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(BUSSINESS_PROFILE.GET_BUSSINESS_PROFILE_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(BUSSINESS_PROFILE.GET_BUSSINESS_PROFILE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}
