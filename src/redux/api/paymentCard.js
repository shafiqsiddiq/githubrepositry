import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function addCard(cardData, auth) {
    return axios.post(`${APP_SETTINGS.API_PATH.USER_CARD.addCard}`, cardData, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
export function getCard(auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.USER_CARD.getCard}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}