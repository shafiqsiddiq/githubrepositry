import { BROWSE_LISTING } from "../actions/utilities";

const INITIAL_STATE = {
    getListLoading: false,
    getListFailure: false,
    getListSuccess: false,
    getListError: null,
    getList: [],

    getTenantsLoading: false,
    getTenantsFailure: false,
    getTenantsSuccess: false,
    getTenantsError: null,
    getTenants: [],

    sendRequestLoading: false,
    sendRequestSuccess: false,
    sendRequestFailure: false,
    sendRequestError: null,



}

export const ListingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BROWSE_LISTING.TENANT_CONNECTION_RESET:
            return {
                ...state,
                sendRequestLoading: false,
                sendRequestSuccess: false,
                sendRequestFailure: false,
                sendRequestError: null,
            } 
        case BROWSE_LISTING.TENANT_CONNECTION_REQUEST:
            return {
                ...state,
                sendRequestLoading: true,
                sendRequestSuccess: false,
                sendRequestFailure: false,
                sendRequestError: null,
            }
        case BROWSE_LISTING.TENANT_CONNECTION_SUCCESS:
            return {
                ...state,
                sendRequestLoading: false,
                sendRequestSuccess: true,
                sendRequestFailure: false,
                sendRequestError: null,
            }
        case BROWSE_LISTING.TENANT_CONNECTION_FAILURE:
            return {
                ...state,
                sendRequestLoading: false,
                sendRequestSuccess: false,
                sendRequestFailure: true,
                sendRequestError: action.payload,
            }
        case BROWSE_LISTING.GET_TENANTS_REQUEST:
            return {
                ...state,
                getTenantsLoading: true,
                getTenantsFailure: false,
                getTenantsSuccess: false,
                getTenantsError: null,
                getTenants: []
            }
        case BROWSE_LISTING.GET_TENANTS_SUCCESS:
            return {
                ...state,
                getTenantsLoading: false,
                getTenantsFailure: false,
                getTenantsSuccess: true,
                getTenantsError: null,
                getTenants: action.payload
            }
        case BROWSE_LISTING.GET_TENANTS_FAILURE:
            return {
                ...state,
                getTenantsLoading: false,
                getTenantsFailure: false,
                getTenantsSuccess: false,
                getTenantsError: action.payload
            }
        case BROWSE_LISTING.GET_LIST_REQUEST:
            return {
                ...state,
                getListLoading: true,
                getListFailure: false,
                getListSuccess: false,
                getListError: null
            }
        case BROWSE_LISTING.GET_LIST_SUCCESS:
            return {
                ...state,
                getListLoading: false,
                getListFailure: false,
                getListSuccess: true,
                getListError: null,
                getList: action.payload
            }
        case BROWSE_LISTING.GET_LIST_FAILURE:
            return {
                ...state,
                getListLoading: false,
                getListFailure: true,
                getListSuccess: false,
                getListError: action.payload
            }
        default:
            return state;
    }
}