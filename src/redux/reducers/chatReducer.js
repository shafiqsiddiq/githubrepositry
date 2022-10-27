import { CHAT_REQUEST } from "../actions/utilities";

const INITIAL_STATE = {
    joinChatLoading: false,
    joinChatSuccess: false,
    joinChatFailure: false,
    joinChatError: null,
    joinChat: [],

    allChatLoading: false,
    allChatSuccess: false,
    allChatFailure: false,
    allChatError: null,
    allChat: [],
    selectedLocation: null,

    userChatLoading: false,
    userChatSuccess: false,
    userChatFailure: false,
    userChatError: null,
    userChat: [],

    sendChatLoading: false,
    sendChatSuccess: false,
    sendChatFailure: false,
    sendChatError: null,

    allPropertyList: [],

    favUnFavLoading: false,
    favUnFavSuccess: false,
    favUnFavFailure: false,
    favUnFavError: null

}

export const chatReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHAT_REQUEST.SEND_OR_RECIEVE_MESSAGE:
            let newMessage = state.userChat;
            newMessage.push(action.payload)
            return {
                ...state,
                userChat: newMessage
            }
        case CHAT_REQUEST.SELECT_CHAT_LOCATION:
            return {
                ...state,
                userChatLoading: false,
                userChatSuccess: false,
                userChatFailure: false,
                selectedLocation: action.payload,
            }
        case CHAT_REQUEST.SEND_CHAT_REQUEST:
            return {
                ...state,
                sendChatLoading: true,
                sendChatSuccess: false,
                sendChatFailure: false,
                sendChatError: null,
            }
        case CHAT_REQUEST.SEND_CHAT_SUCCESS:
            return {
                ...state,
                sendChatLoading: false,
                sendChatSuccess: true,
                sendChatFailure: false,
                sendChatError: null,
                // joinChat: action.payload,
            }
        case CHAT_REQUEST.SEND_CHAT_FAILURE:
            return {
                ...state,
                sendChatLoading: false,
                sendChatSuccess: false,
                sendChatFailure: true,
                sendChatError: action.payload,
            }
        case CHAT_REQUEST.JOIN_CHAT_REQUEST:
            return {
                ...state,
                joinChatLoading: true,
                joinChatSuccess: false,
                joinChatFailure: false,
                joinChatError: null,
                joinChat: [],
            }
        case CHAT_REQUEST.JOIN_CHAT_SUCCESS:
            return {
                ...state,
                joinChatLoading: false,
                joinChatSuccess: true,
                joinChatFailure: false,
                joinChatError: null,
                joinChat: action.payload,
            }
        case CHAT_REQUEST.JOIN_CHAT_FAILURE:
            return {
                ...state,
                joinChatLoading: false,
                joinChatSuccess: false,
                joinChatFailure: true,
                joinChatError: action.payload,
            }
        case CHAT_REQUEST.ALL_CHAT_REQUEST:
            return {
                ...state,
                userChatLoading: false,
                userChatSuccess: false,
                userChatFailure: false,
                userChatError: null,
                userChat: [],
                allChatLoading: true,
                allChatSuccess: false,
                allChatFailure: false,
                allChatError: null,
                allChat: [],
            }
        case CHAT_REQUEST.ALL_CHAT_SUCCESS:
            let propertyName = [];
            let list = action.payload
            for (let i = 0; i <= list.length; i++) {
                if (list && list[i] && list[i].propertyName) {
                    if (propertyName.includes(list[i].propertyName) === false) {
                        propertyName.push(list[i].propertyName)
                    }
                }
            }
            let selected = propertyName && propertyName[0] ? propertyName[0] : null
            return {
                ...state,
                allChatLoading: false,
                allChatSuccess: true,
                allChatFailure: false,
                allChatError: null,
                allChat: action.payload,
                allPropertyList: propertyName,
                selectedLocation: selected
            }
        case CHAT_REQUEST.ALL_CHAT_FAILURE:
            return {
                ...state,
                allChatLoading: false,
                allChatSuccess: false,
                allChatFailure: true,
                allChatError: action.payload,
            }
        case CHAT_REQUEST.USER_CHAT_REQUEST:
            return {
                ...state,
                userChatLoading: true,
                userChatSuccess: false,
                userChatFailure: false,
                userChatError: null,
                userChat: [],
            }
        case CHAT_REQUEST.USER_CHAT_SUCCESS:

            return {
                ...state,
                userChatLoading: false,
                userChatSuccess: true,
                userChatFailure: false,
                userChatError: null,
                userChat: action.payload,
            }
        case CHAT_REQUEST.USER_CHAT_FAILURE:
            return {
                ...state,
                userChatLoading: false,
                userChatSuccess: false,
                userChatFailure: true,
                userChatError: action.payload,
            }
        case CHAT_REQUEST.FAV_UNFAV_REQUEST:
            return {
                ...state,
                favUnFavLoading: true,
                favUnFavFailure: false,
                favUnFavSuccess: false,
                favUnFavError: null,
            }
        case CHAT_REQUEST.FAV_UNFAV_SUCCESS:
            let myChatList = state.allChat;
            for (let i = 0; i < myChatList.length; i++) {
                if (myChatList[i].inboxId === action.payload)
                    myChatList[i].isFavorite = !myChatList[i].isFavorite
            }
            return {
                ...state,
                favUnFavLoading: false,
                favUnFavFailure: false,
                favUnFavSuccess: true,
                favUnFavError: null,
                allChat: myChatList

            }
        case CHAT_REQUEST.FAV_UNFAV_FAILURE:
            return {
                ...state,
                favUnFavLoading: false,
                favUnFavFailure: true,
                favUnFavSuccess: false,
                favUnFavError: action.payload,
            }
        default:
            return state
    }

}