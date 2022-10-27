import { APP_SETTINGS } from "../../config";
import axios from "axios";

export function getAllPropertyList() {
    return axios.get(`${APP_SETTINGS.API_PATH.LANDING_PAGE.getProperties}`)
}

export function getAllRequirementList() {
    return axios.get(`${APP_SETTINGS.API_PATH.LANDING_PAGE.getRequirements}`)
}