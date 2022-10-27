import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function addRemoveToFavourite(inboxId, auth) {
    return axios.put(`${APP_SETTINGS.API_PATH.Chat.addRemoveToFavourite}/${inboxId}/favorite`, { inboxId: inboxId }, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function getAllChat(auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.Chat.getAllChat}`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function sendNewMessage(messageData, auth) {
    return axios.post(`${APP_SETTINGS.API_PATH.Chat.sendMessage}`, messageData, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function joinChat(chatData, auth) {
    return axios.post(`${APP_SETTINGS.API_PATH.Chat.joinChat}`, chatData, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function getUserChat(inboxId, auth) {
    return axios.get(`${APP_SETTINGS.API_PATH.Chat.getUserChat}/${inboxId}/messages`, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}