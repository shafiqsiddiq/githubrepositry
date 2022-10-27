import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function getAllStates() {
    return axios.get(`${APP_SETTINGS.API_PATH.LOCATION.getAllStates}231`)
}
export function getAllCities(stateId) {
    return axios.get(`${APP_SETTINGS.API_PATH.LOCATION.getAllCities}${stateId}`)
}

export function getLocation(auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.LOCATION.getLocation}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
export function addLocation(locationData, auth) {
    let location = {
        "countryId": 231,
        "stateId": parseInt(locationData.state),
        "cityId": parseInt(locationData.city)
      }
    return axios.post(`${APP_SETTINGS.API_PATH.LOCATION.addLocation}`, location, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}