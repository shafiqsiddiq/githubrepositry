import { REPORTS_REQUEST } from "../actions/utilities";

const INITIAL_STATE = {
    propertyReportLoading: false,
    propertyReportSuccess: false,
    propertyReportFailure: false,
    propertyReportError: null,
    propertyReport: [],
    subscriptionReportLoading: false,
    subscriptionReportSuccess: false,
    subscriptionReportFailure: false,
    subscriptionReportError: null,
    subscriptionReport: [],
    userReportLoading: false,
    userReportSuccess: false,
    userReportFailure: false,
    userReportError: null,
    userReport: [],

    mediaListLoading: false,
    mediaListSuccess: false,
    mediaListFailure: false,
    mediaListError: null,
    mediaList: [],

    subByMonthLoading: false,
    subByMonthSuccess: false,
    subByMonthFailure: false,
    subByMonthError: null,
    subByMonth: [],

    subByStateLoading: false,
    subByStateSuccess: false,
    subByStateFailure: false,
    subByStateError: null,
    subByState: [],

    subByCountLoading: false,
    subByCountSuccess: false,
    subByCountFailure: false,
    subByCountError: null,
    subByCount: [],

    userByCountLoading: false,
    userByCountSuccess: false,
    userByCountFailure: false,
    userByCountError: null,
    userByCount: [],

    userByMonthLoading: false,
    userByMonthSuccess: false,
    userByMonthFailure: false,
    userByMonthError: null,
    userByMonth: [],

    allUserLoading: false,
    allUserSuccess: false,
    allUserFailure: false,
    allUserError: null,
    allUser: []
}

export const reportReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REPORTS_REQUEST.GET_ALL_USER_REQUEST:
            return {
                ...state,
                allUserLoading: true,
                allUserSuccess: false,
                allUserFailure: false,
                allUserError: null,
                allUser: []
            }
        case REPORTS_REQUEST.GET_ALL_USER_SUCCESS:
            return {
                ...state,
                allUserLoading: false,
                allUserSuccess: true,
                allUserFailure: false,
                allUserError: null,
                allUser: action.payload
            }
        case REPORTS_REQUEST.GET_ALL_USER_FAILURE:
            return {
                ...state,
                allUserLoading: false,
                allUserSuccess: false,
                allUserFailure: true,
                allUserError: action.payload
            }
        case REPORTS_REQUEST.GET_SUBSCRIPTION_BY_MONTH_REQUEST:
            return {
                ...state,
                subByMonthLoading: true,
                subByMonthSuccess: false,
                subByMonthFailure: false,
                subByMonthError: null,
                subByMonth: []
            }
        case REPORTS_REQUEST.GET_SUBSCRIPTION_BY_MONTH_SUCCESS:
            return {
                ...state,
                subByMonthLoading: false,
                subByMonthSuccess: true,
                subByMonthFailure: false,
                subByMonthError: null,
                subByMonth: action.payload
            }
        case REPORTS_REQUEST.GET_SUBSCRIPTION_BY_MONTH_FAILURE:
            return {
                ...state,
                subByMonthLoading: false,
                subByMonthSuccess: false,
                subByMonthFailure: true,
                subByMonthError: action.payload
            }
        case REPORTS_REQUEST.GET_SUBSCRIPTION_BY_STATE_REQUEST:
            return {
                ...state,
                subByStateLoading: true,
                subByStateSuccess: false,
                subByStateFailure: false,
                subByStateError: null,
                subByState: []
            }
        case REPORTS_REQUEST.GET_SUBSCRIPTION_BY_STATE_SUCCESS:
            return {
                ...state,
                subByStateLoading: false,
                subByStateSuccess: true,
                subByStateFailure: false,
                subByStateError: null,
                subByState: action.payload
            }
        case REPORTS_REQUEST.GET_SUBSCRIPTION_BY_STATE_FAILURE:
            return {
                ...state,
                subByStateLoading: false,
                subByStateSuccess: false,
                subByStateFailure: true,
                subByStateError: action.payload
            }
        case REPORTS_REQUEST.GET_SUBSCRIPTION_BY_COUNT_REQUEST:
            return {
                ...state,
                subByCountLoading: true,
                subByCountSuccess: false,
                subByCountFailure: false,
                subByCountError: null,
                subByCount: []
            }
        case REPORTS_REQUEST.GET_SUBSCRIPTION_BY_COUNT_SUCCESS:
            return {
                ...state,
                subByCountLoading: false,
                subByCountSuccess: true,
                subByCountFailure: false,
                subByCountError: null,
                subByCount: action.payload
            }
        case REPORTS_REQUEST.GET_SUBSCRIPTION_BY_COUNT_FAILURE:
            return {
                ...state,
                subByCountLoading: false,
                subByCountSuccess: false,
                subByCountFailure: true,
                subByCountError: action.payload
            }
        case REPORTS_REQUEST.GET_USER_BY_COUNT_REQUEST:
            return {
                ...state,
                userByCountLoading: true,
                userByCountSuccess: false,
                userByCountFailure: false,
                userByCountError: null,
                userByCount: []
            }
        case REPORTS_REQUEST.GET_USER_BY_COUNT_SUCCESS:
            return {
                ...state,
                userByCountLoading: false,
                userByCountSuccess: true,
                userByCountFailure: false,
                userByCountError: null,
                userByCount: action.payload
            }
        case REPORTS_REQUEST.GET_USER_BY_COUNT_FAILURE:
            return {
                ...state,
                userByCountLoading: false,
                userByCountSuccess: false,
                userByCountFailure: true,
                userByCountError: action.payload
            }
        case REPORTS_REQUEST.GET_USER_BY_MONTH_REQUEST:
            return {
                ...state,
                userByMonthLoading: true,
                userByMonthSuccess: false,
                userByMonthFailure: false,
                userByMonthError: null,
                userByMonth: []
            }
        case REPORTS_REQUEST.GET_USER_BY_MONTH_SUCCESS:
            return {
                ...state,
                userByMonthLoading: false,
                userByMonthSuccess: true,
                userByMonthFailure: false,
                userByMonthError: null,
                userByMonth: action.payload
            }
        case REPORTS_REQUEST.GET_USER_BY_MONTH_FAILURE:
            return {
                ...state,
                userByMonthLoading: false,
                userByMonthSuccess: false,
                userByMonthFailure: true,
                userByMonthError: action.payload
            }
        case REPORTS_REQUEST.GET_PROPERTY_REPORT_REQUEST:
            return {
                ...state,
                propertyReportLoading: true,
                propertyReportSuccess: false,
                propertyReportFailure: false,
                propertyReportError: null
            }
        case REPORTS_REQUEST.GET_PROPERTY_REPORT_SUCCESS:
            return {
                ...state,
                propertyReportLoading: false,
                propertyReportSuccess: true,
                propertyReportFailure: false,
                propertyReportError: null,
                propertyReport: action.payload
            }
        case REPORTS_REQUEST.GET_PROPERTY_REPORT_FAILURE:
            return {
                ...state,
                propertyReportLoading: false,
                propertyReportSuccess: false,
                propertyReportFailure: true,
                propertyReportError: action.payload
            }
        case REPORTS_REQUEST.GET_SUBSCRIPTION_REPORT_REQUEST:
            return {
                ...state,
                subscriptionReportLoading: true,
                subscriptionReportSuccess: false,
                subscriptionReportFailure: false,
                subscriptionReportError: null
            }
        case REPORTS_REQUEST.GET_SUBSCRIPTION_REPORT_SUCCESS:
            return {
                ...state,
                subscriptionReportLoading: false,
                subscriptionReportSuccess: true,
                subscriptionReportFailure: false,
                subscriptionReportError: null,
                subscriptionReport: action.payload
            }
        case REPORTS_REQUEST.GET_SUBSCRIPTION_REPORT_FAILURE:
            return {
                ...state,
                subscriptionReportLoading: false,
                subscriptionReportSuccess: false,
                subscriptionReportFailure: true,
                subscriptionReportError: action.payload
            }
        case REPORTS_REQUEST.GET_USER_REPORT_REQUEST:
            return {
                ...state,
                userReportLoading: true,
                userReportReportSuccess: false,
                userReportReportFailure: false,
                userReportError: null
            }
        case REPORTS_REQUEST.GET_USER_REPORT_SUCCESS:
            return {
                ...state,
                userReportLoading: false,
                userReportSuccess: true,
                userReportFailure: false,
                userReportError: null,
                userReport: action.payload
            }
        case REPORTS_REQUEST.GET_USER_REPORT_FAILURE:
            return {
                ...state,
                userReportLoading: false,
                userReportSuccess: false,
                userReportFailure: true,
                userReportError: action.payload
            }
        case REPORTS_REQUEST.GET_MEDIA_LIST_REQUEST:
            return {
                ...state,
                mediaListLoading: true,
                mediaListSuccess: false,
                mediaListFailure: false,
                mediaListError: null
            }
        case REPORTS_REQUEST.GET_MEDIA_LIST_SUCCESS:
            return {
                ...state,
                mediaListLoading: false,
                mediaListSuccess: true,
                mediaListFailure: false,
                mediaListError: null,
                mediaList: action.payload
            }
        case REPORTS_REQUEST.GET_MEDIA_LIST_FAILURE:
            return {
                ...state,
                mediaListLoading: false,
                mediaListSuccess: false,
                mediaListFailure: true,
                mediaListError: action.payload
            }
        default:
            return state;
    }
}