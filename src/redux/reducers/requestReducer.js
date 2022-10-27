import { CONNECTION_REQUEST } from "../actions/utilities";

const INITIAL_STATE = {
    sendConnectionLoading: false,
    sendConnectionSuccess: false,
    sendConnectionFailure: false,
    sendConnectionError: null,

    allConnectionLoading: false,
    allConnectionSuccess: false,
    allConnectionFailure: false,
    allConnectionError: null,
    allConnections: [],

    acceptOrDeclineLoading: false,
    acceptOrDeclineSuccess: false,
    acceptOrDeclineFailure: false,
    acceptOrDeclineError: null,

    favConnectionLoading: false,
    favConnectionFailure: false,
    favConnectionSuccess: false,
    favConnectionError: null,

    removeConnectionLoading: false,
    removeConnectionSuccess: false,
    removeConnectionFailure: false,
    removeConnectionError: null
}

export const connectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONNECTION_REQUEST.REQUEST_RESET:
            return {
                ...state,
                acceptOrDeclineLoading: false,
                acceptOrDeclineSuccess: false,
                acceptOrDeclineFailure: false,
                acceptOrDeclineError: null,
            }
        case CONNECTION_REQUEST.REMOVE_CONNECTION_REQUEST:
            return {
                ...state,
                removeConnectionLoading: true,
                removeConnectionSuccess: false,
                removeConnectionFailure: false,
                removeConnectionError: null
            }
        case CONNECTION_REQUEST.REMOVE_CONNECTION_SUCCESS:
            let _conect_list = state.allConnections;
            for (let i = 0; i < _conect_list.length; i++) {
                if (_conect_list[i].connectionId === action.payload) {
                    _conect_list.splice(i, 1);
                }
            }
            return {
                ...state,
                removeConnectionLoading: false,
                removeConnectionSuccess: true,
                removeConnectionFailure: false,
                removeConnectionError: null,
                allConnections: _conect_list
            }
        case CONNECTION_REQUEST.REMOVE_CONNECTION_FAILURE:
            return {
                ...state,
                removeConnectionLoading: false,
                removeConnectionSuccess: false,
                removeConnectionFailure: true,
                removeConnectionError: action.payload
            }
        case CONNECTION_REQUEST.ADD_REMOVE_TO_FAVOURITE_CONNECTION_REQUEST:
            return {
                ...state,
                favConnectionLoading: true,
                favConnectionSuccess: false,
                favConnectionFailure: false,
                favConnectionError: null
            }
        case CONNECTION_REQUEST.ADD_REMOVE_TO_FAVOURITE_CONNECTION_SUCCESS:
            let con_ = state.allConnections;
            for (let i = 0; i < con_.length; i++) {
                if (con_[i].connectionId === action.payload) {
                    con_[i].isFavorite = !con_[i].isFavorite
                }
            }
            return {
                ...state,
                favConnectionLoading: false,
                favConnectionSuccess: true,
                favConnectionFailure: false,
                favConnectionError: null,
                allConnections: con_
            }
        case CONNECTION_REQUEST.ADD_REMOVE_TO_FAVOURITE_CONNECTION_FAILURE:
            return {
                ...state,
                favConnectionLoading: false,
                favConnectionSuccess: false,
                favConnectionFailure: true,
                favConnectionError: action.payload
            }
        case CONNECTION_REQUEST.SEND_CONNECTION_REQUEST:
            return {
                ...state,
                sendConnectionLoading: true,
                sendConnectionSuccess: false,
                sendConnectionFailure: false,
                sendConnectionError: null
            }
        case CONNECTION_REQUEST.SEND_CONNECTION_SUCCESS:
            return {
                ...state,
                sendConnectionLoading: false,
                sendConnectionSuccess: true,
                sendConnectionFailure: false,
                sendConnectionError: null
            }
        case CONNECTION_REQUEST.SEND_CONNECTION_FAILURE:
            return {
                ...state,
                sendConnectionLoading: false,
                sendConnectionSuccess: false,
                sendConnectionFailure: true,
                sendConnectionError: action.payload
            }
        case CONNECTION_REQUEST.GET_ALL_CONNECTION_REQUEST:
            return {
                ...state,
                allConnectionLoading: true,
                allConnectionSuccess: false,
                allConnectionFailure: false,
                allConnectionError: null,
                allConnections: []
            }
        case CONNECTION_REQUEST.GET_ALL_CONNECTION_SUCCESS:
            return {
                ...state,
                allConnectionLoading: false,
                allConnectionSuccess: true,
                allConnectionFailure: false,
                allConnectionError: null,
                allConnections: action.payload
            }
        case CONNECTION_REQUEST.GET_ALL_CONNECTION_FAILURE:
            return {
                ...state,
                allConnectionLoading: false,
                allConnectionSuccess: false,
                allConnectionFailure: true,
                allConnectionError: action.payload
            }
        case CONNECTION_REQUEST.ACCEPT_CONNECTION_REQUEST:
            return {
                ...state,
                acceptOrDeclineLoading: true,
                acceptOrDeclineSuccess: false,
                acceptOrDeclineFailure: false,
                acceptOrDeclineError: null,
            }
        case CONNECTION_REQUEST.ACCEPT_CONNECTION_SUCCESS:
            let conn = state.allConnections;
            for (let i = 0; i < conn.length; i++) {
                if (conn[i].connectionId === action.payload) {
                    conn.splice(i, 1)
                }
            }
            return {
                ...state,
                acceptOrDeclineLoading: false,
                acceptOrDeclineSuccess: true,
                acceptOrDeclineFailure: false,
                acceptOrDeclineError: null,
                allConnections: conn
            }
        case CONNECTION_REQUEST.ACCEPT_CONNECTION_FAILURE:
            return {
                ...state,
                acceptOrDeclineLoading: false,
                acceptOrDeclineSuccess: false,
                acceptOrDeclineFailure: true,
                acceptOrDeclineError: action.payload,
            }
        case CONNECTION_REQUEST.REJECT_CONNECTION_REQUEST:
            return {
                ...state,
                acceptOrDeclineLoading: true,
                acceptOrDeclineSuccess: false,
                acceptOrDeclineFailure: false,
                acceptOrDeclineError: null,
            }
        case CONNECTION_REQUEST.REJECT_CONNECTION_SUCCESS:
            let conn_list = state.allConnections;
            for (let i = 0; i < conn_list.length; i++) {
                if (conn_list[i].connectionId === action.payload) {
                    conn_list.splice(i, 1)
                }
            }
            return {
                ...state,
                acceptOrDeclineLoading: false,
                acceptOrDeclineSuccess: true,
                acceptOrDeclineFailure: false,
                acceptOrDeclineError: null,
                allConnections: conn_list
            }
        case CONNECTION_REQUEST.REJECT_CONNECTION_FAILURE:
            return {
                ...state,
                acceptOrDeclineLoading: false,
                acceptOrDeclineSuccess: false,
                acceptOrDeclineFailure: true,
                acceptOrDeclineError: action.payload,
            }
        default:
            return state

    }
}