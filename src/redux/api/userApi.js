import axios from "axios";
import { getCountryTimeZone } from "../../assets";
import { APP_SETTINGS } from "../../config";

export function userLogin(userData) {
    userData = { ...userData, "timezone": getCountryTimeZone() }
    return axios.post(APP_SETTINGS.API_PATH.LOGIN.login, userData)
}
export function userLoginViaSocial(userData) {
    userData = { ...userData, "timezone": getCountryTimeZone() }
    return axios.post(APP_SETTINGS.API_PATH.LOGIN.loginBySocial, userData)
}
export function updateTenantProfile(data, auth) {
    return axios.put(APP_SETTINGS.API_PATH.UPDATE_TENANT.updateTenantProfile, data, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
export function updateLandlordProfile(data, auth) {
    return axios.put(APP_SETTINGS.API_PATH.UPDATE_LANDLORD.updateLandlordProfile, data, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
export function registerTenant(tenantData) {
    tenantData = { ...tenantData, "timezone": getCountryTimeZone() }
    return axios.post(APP_SETTINGS.API_PATH.REGISTER.registerTenant, tenantData)
}
export function registerLandlord(landlordData) {
    landlordData = { ...landlordData, "timezone": getCountryTimeZone() }
    return axios.post(APP_SETTINGS.API_PATH.REGISTER.registerLandlord, landlordData)
}
export function addSubscription(subscriptionData) {
    return axios.post(APP_SETTINGS.API_PATH.SUBSCRIPTION.addSubscription, subscriptionData)
}
export function resetPassword(resetData) {
    return axios.put(APP_SETTINGS.API_PATH.RESETPASSWORD.resetPassword, resetData);
}
export function enterEmail(resetData) {
    return axios.get(APP_SETTINGS.API_PATH.RESETPASSWORD.getEmail.replace(":email", resetData));
}
export function enterCode(code, email) {
    return axios.get(APP_SETTINGS.API_PATH.RESETPASSWORD.enterCode.replace(":code", code).replace(":email", email));
}
export function registerLandlordSocial(landlordData) {
    landlordData = { ...landlordData, "timezone": getCountryTimeZone() }
    return axios.post(APP_SETTINGS.API_PATH.REGISTER.registerLandlordSocial, landlordData)
}
export function registerTenantSocial(tenantData) {
    tenantData = { ...tenantData, "timezone": getCountryTimeZone() }
    return axios.post(APP_SETTINGS.API_PATH.REGISTER.registerTenantSocial, tenantData)
}
export function updatePhoto(photo, auth) {
    return axios.put(`${APP_SETTINGS.API_PATH.UPDATE_PHOTO.updatePhoto}`, photo, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
export function registerLandlordByLinkedIn(landlordData) {
    landlordData = { ...landlordData, "timezone": getCountryTimeZone() }
    return axios.post(APP_SETTINGS.API_PATH.REGISTER.registerLandlordByLinkedIn, landlordData)
}
export function registerTenantByLinkedIn(tenantData) {
    tenantData = { ...tenantData, "timezone": getCountryTimeZone() }
    return axios.post(APP_SETTINGS.API_PATH.REGISTER.registerTenantByLinkedIn, tenantData)
}
export function verifyLogin(verifyData) {
    return axios.post(APP_SETTINGS.API_PATH.LOGIN.verifyEmail, verifyData)
}