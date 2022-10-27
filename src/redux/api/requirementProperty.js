import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function getRequirement(auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.REQUIREMENT_PROPERTY.getRequirement}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function addRequirement(requirementData, auth) {
    return axios.post(`${APP_SETTINGS.API_PATH.REQUIREMENT_PROPERTY.addRequirement}`, requirementData, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function updateRequirement(requirementData, auth) {
    return axios.put(`${APP_SETTINGS.API_PATH.REQUIREMENT_PROPERTY.updateRequirement}`, requirementData, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}