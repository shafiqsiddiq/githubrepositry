import { APP_SETTINGS } from "../../config";
import axios from "axios";

export function getPlans(roleId) {
    return axios.get(`${APP_SETTINGS.API_PATH.PLAN.getPlans}${roleId}`)
}
export function changeSubscription(data, auth) {
    return axios.post(`${APP_SETTINGS.API_PATH.SUBSCRIPTION.changeSubscription}`, data, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}