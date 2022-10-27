import { getAllChat, getUserChat, joinChat, sendNewMessage, addRemoveToFavourite } from "../api";
import { request, success, failure, CHAT_REQUEST } from "./utilities";

export function joinNewChat(propertyId, auth, moveToNext) {
    return dispatch => {
        dispatch(request(CHAT_REQUEST.JOIN_CHAT_REQUEST));
        joinChat(propertyId, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(CHAT_REQUEST.JOIN_CHAT_SUCCESS, response.data.data))
                    if (moveToNext) {
                        moveToNext();
                    }
                }
                else {
                    dispatch(failure(CHAT_REQUEST.JOIN_CHAT_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(CHAT_REQUEST.JOIN_CHAT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function getAllChatList(auth) {
    return dispatch => {
        dispatch(request(CHAT_REQUEST.ALL_CHAT_REQUEST));
        getAllChat(auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(CHAT_REQUEST.ALL_CHAT_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(CHAT_REQUEST.ALL_CHAT_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(CHAT_REQUEST.ALL_CHAT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function userChatList(inboxId, auth) {
    return dispatch => {
        dispatch(request(CHAT_REQUEST.USER_CHAT_REQUEST));
        getUserChat(inboxId, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(CHAT_REQUEST.USER_CHAT_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(CHAT_REQUEST.USER_CHAT_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(CHAT_REQUEST.USER_CHAT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function sendMessage(messageData, auth, setMsgToNull) {
    return dispatch => {
        dispatch(request(CHAT_REQUEST.SEND_CHAT_REQUEST));
        sendNewMessage(messageData, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(CHAT_REQUEST.SEND_CHAT_SUCCESS, response.data.data))
                    if (setMsgToNull) {
                        setMsgToNull(response.data.data);
                    }
                    dispatch(success(CHAT_REQUEST.SEND_OR_RECIEVE_MESSAGE, response.data.data))
                }
                else {
                    dispatch(failure(CHAT_REQUEST.SEND_CHAT_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(CHAT_REQUEST.SEND_CHAT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function favUnfavChat(inboxId, auth) {
    return dispatch => {
        dispatch(request(CHAT_REQUEST.FAV_UNFAV_REQUEST));
        addRemoveToFavourite(inboxId, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(CHAT_REQUEST.FAV_UNFAV_SUCCESS, inboxId))
                    // dispatch(getAllChatList(auth))
                }
                else {
                    dispatch(failure(CHAT_REQUEST.FAV_UNFAV_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(CHAT_REQUEST.FAV_UNFAV_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}