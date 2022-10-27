import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function addDescription(descriptionData, auth) {
    return axios.post(APP_SETTINGS.API_PATH.POST_PROPERTY.DESCRIPTION.addDescription, descriptionData, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
export function getDescriptionById(id, auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.POST_PROPERTY.DESCRIPTION.getDescriptionById}${id}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
export function addAddress(addressData, auth) {
    return axios.post(APP_SETTINGS.API_PATH.POST_PROPERTY.ADDRESS.addAddress, addressData, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
export function getAddressById(id, auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.POST_PROPERTY.ADDRESS.getAddressById}${id}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function addPropertyDetail(propertyDetailData, auth) {
    return axios.post(`${APP_SETTINGS.API_PATH.POST_PROPERTY.PROPERTY_DETAIL.addPropertyDetail}`, propertyDetailData, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
export function getPropertyDetailById(id, auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.POST_PROPERTY.PROPERTY_DETAIL.getPropertyDetailById}${id}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
export function getPropertyById(id) {
    return axios.get(`${APP_SETTINGS.API_PATH.POST_PROPERTY.PROPERTY_REVIEW.getPropertyById}${id}`)
}
export function getPropertyByIdWithAuth(id, auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.POST_PROPERTY.PROPERTY_REVIEW.getPropertyById}${id}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function getAllPropertiesList(auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.POST_PROPERTY.ALL_PROPERTIES.getAllProperties}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function addPropertyFile(fileData, auth) {
    return axios.post(`${APP_SETTINGS.API_PATH.POST_PROPERTY.PROPERTY_FILES.addPropertyFile}`, fileData, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
export function recordDeal(propertyId, auth) {
    return axios.put(`${APP_SETTINGS.API_PATH.RECORD_DEAL.recordDeal}${propertyId}`, { propertyId: propertyId }, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function removePropertyFile(fileId, auth) {
    return axios.delete(`${APP_SETTINGS.API_PATH.POST_PROPERTY.PROPERTY_FILES.removePropertyFile}/${fileId}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function getPropertyFileById(fileId, auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.POST_PROPERTY.PROPERTY_FILES.getPropertyFileById}/${fileId}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function getAllPropertyFiles(propertyId, auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.POST_PROPERTY.PROPERTY_FILES.getAllPropertyFiles}/${propertyId}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function changePropertyMediaStatus(propertyId, auth) {
    return axios.put(`${APP_SETTINGS.API_PATH.SOCIAL_MEDIA_MARKETING.changePropertyMediaStatus}/${propertyId}`, { propertyId: propertyId }, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
export function getAnalytics(id, type, auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.ANALYTICS.getanalytics}/${id}/analytics/${type}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}