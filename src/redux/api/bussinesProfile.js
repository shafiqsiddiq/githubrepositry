import axios from "axios";
import { APP_SETTINGS } from "../../config"

export function addBussinessProfile(data, auth) {
    return axios.post(APP_SETTINGS.API_PATH.REQUEST_PROPERTY.bussinessProfile, data, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
export function getBussinessProfile(auth) {
    return axios.get(APP_SETTINGS.API_PATH.REQUEST_PROPERTY.getBussinessProfile, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}