import { APP_SETTINGS } from "../../config";
import axios from "axios";

export function getTenantReviewProperty(auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.REVIEW_PROPERTY.getTenantReviewProperty}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}