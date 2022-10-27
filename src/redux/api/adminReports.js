import { APP_SETTINGS } from "../../config";
import axios from "axios";

export function getPropertyReport(propertyId) {
    return axios.post(`${APP_SETTINGS.API_PATH.REPORTS.getPropertyReport}`, propertyId)
}
export function getSubscriptionReport(subscriptionId, pageNumber) {
    return axios.post(`${APP_SETTINGS.API_PATH.REPORTS.getSubscriptionReport}`, {
        "filterBy": subscriptionId,
        "pageSize": 20,
        "pageNumber": pageNumber ? pageNumber : 1
    })
}
export function getUserReport(roleId) {
    return axios.post(`${APP_SETTINGS.API_PATH.REPORTS.getUserReport}`, roleId)
}

export function getMediaList(auth) {
    return axios.get(APP_SETTINGS.API_PATH.SOCIAL_MEDIA_MARKETING.getList, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function getUserList(userData) {
    return axios.post(APP_SETTINGS.API_PATH.REPORTS.getUsers, userData)
}

export function subscriptionByMonth() {
    return axios.get(APP_SETTINGS.API_PATH.ADMIN_SIDE.subscriptionByMonth)
}

export function subscriptionByState() {
    return axios.get(APP_SETTINGS.API_PATH.ADMIN_SIDE.subscriptionByState)
}

export function subscriptionByCount() {
    return axios.get(APP_SETTINGS.API_PATH.ADMIN_SIDE.subscriptionByCount)
}

export function userByCount() {
    return axios.get(APP_SETTINGS.API_PATH.ADMIN_SIDE.userByCount)
}

export function userByMonth() {
    return axios.get(APP_SETTINGS.API_PATH.ADMIN_SIDE.userByMonth)
}