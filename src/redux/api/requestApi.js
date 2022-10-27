import { APP_SETTINGS } from "../../config";
import axios from "axios";

export function sendRequest(requestData, auth) {
    return axios.post(`${APP_SETTINGS.API_PATH.REQUEST.sendRequest}`, requestData, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function getAllRequest(propertyId, sortBy, auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.REQUEST.getAllRequest}?propertyId=${propertyId}&sortBy=${sortBy}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function requestAcceptance(propertyId, auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.REQUEST.acceptRequest}/${propertyId}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
export function requestRejection(propertyId, auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.REQUEST.rejectRequest}/${propertyId}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}