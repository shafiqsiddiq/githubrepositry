import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function getAllTenantConnection(propertyId,sortBy,auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.CONNECTIONS.getAllTenantConnection}?propertyId=${propertyId}&sortBy=${sortBy}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function addRemoveToFavouriteTenantConnection(id,auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.CONNECTIONS.addRemoveToFavouriteTenantConnection}/${id}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function removeTenantConnection(id,auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.CONNECTIONS.removeTenantConnection}/${id}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
