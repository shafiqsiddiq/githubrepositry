import { APP_SETTINGS } from "../../config";
import axios from "axios";

export function landlordStats(auth) {
    return axios.get(APP_SETTINGS.API_PATH.USER_STATS.landlordStats, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
export function tenantStats(auth) {
    return axios.get(APP_SETTINGS.API_PATH.USER_STATS.tenantStats, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function getTenantProfile(userId, auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.USER_PROFILE.getTenantProfile}/${userId}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function getLandlordProfile(userId, auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.USER_PROFILE.getLandlordProfile}/${userId}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}