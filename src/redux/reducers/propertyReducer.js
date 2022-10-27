import { PROPERTIES_REQUEST } from "../actions/utilities";

const INITIAL_STATE = {
    getPropertiesLoading: false,
    getPropertiesSuccess: false,
    getPropertiesFailure: false,
    getPropertiesError: null,
    propertiesList: [],
    count: 0,
    recordDealLoading: false,
    recordDealSuccess: false,
    recordDealFailure: false,
    recordDealError: null,

    propertyByIdLoading: false,
    propertyByIdFailure: false,
    propertyByIdSuccess: false,
    propertyByIdError: null,
    propertyById: [],

    changeStatusLoading: false,
    changeStatusSuccess: false,
    changeStatusFailure: false,
    changeStatusError: null,

    getAnalyticsLoading: false,
    getAnalyticsSuccess: false,
    getAnalyticsFailure: false,
    getAnalyticsError: null,
    analytics: []
}

export const propertiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROPERTIES_REQUEST.GET_ANALYTICS_REQUEST:
            return {
                ...state,
                getAnalyticsLoading: true,
                getAnalyticsSuccess: false,
                getAnalyticsFailure: false,
                getAnalyticsError: null,
                analytics: []
            }
        case PROPERTIES_REQUEST.GET_ANALYTICS_SUCCESS:
            return {
                ...state,
                getAnalyticsLoading: false,
                getAnalyticsSuccess: true,
                getAnalyticsFailure: false,
                getAnalyticsError: null,
                analytics: action.payload
            }
        case PROPERTIES_REQUEST.GET_ANALYTICS_FAILURE:
            return {
                ...state,
                getAnalyticsLoading: false,
                getAnalyticsSuccess: false,
                getAnalyticsFailure: true,
                getAnalyticsError: action.payload
            }
        case PROPERTIES_REQUEST.CHANGE_MEDIA_REQUEST:
            return {
                ...state,
                changeStatusLoading: true,
                changeStatusSuccess: false,
                changeStatusFailure: false,
                changeStatusError: null,
            }
        case PROPERTIES_REQUEST.CHANGE_MEDIA_SUCCESS:
            let my_property_by_id = state.propertyById;
            my_property_by_id.isSocialMediaMarketing = !my_property_by_id.isSocialMediaMarketing
            return {
                ...state,
                changeStatusLoading: false,
                changeStatusSuccess: true,
                changeStatusFailure: false,
                changeStatusError: null,
                propertyById: my_property_by_id
            }
        case PROPERTIES_REQUEST.CHANGE_MEDIA_FAILURE:
            return {
                ...state,
                changeStatusLoading: false,
                changeStatusSuccess: false,
                changeStatusFailure: true,
                changeStatusError: action.payload,
            }
        case PROPERTIES_REQUEST.GET_PROPERTY_BY_ID_REQUEST:
            return {
                ...state,
                propertyByIdLoading: true,
                propertyByIdFailure: false,
                propertyByIdSuccess: false,
                propertyByIdError: null,
                propertyById: []
            }
        case PROPERTIES_REQUEST.GET_PROPERTY_BY_ID_SUCCESS:
            return {
                ...state,
                propertyByIdLoading: false,
                propertyByIdFailure: false,
                propertyByIdSuccess: true,
                propertyByIdError: null,
                propertyById: action.payload
            }
        case PROPERTIES_REQUEST.GET_PROPERTY_BY_ID_FAILURE:
            return {
                ...state,
                propertyByIdLoading: false,
                propertyByIdFailure: true,
                propertyByIdSuccess: false,
                propertyByIdError: action.payload
            }
        case PROPERTIES_REQUEST.GET_ALL_PROPERTIES_REQUEST:
            return {
                ...state,
                getPropertiesLoading: true,
                getPropertiesSuccess: false,
                getPropertiesFailure: false,
                getPropertiesError: null
            }
        case PROPERTIES_REQUEST.GET_ALL_PROPERTIES_SUCCESS:
            let totalCount = 0
            if (action.payload) {
                for (let i = 0; i < action.payload.length; i++) {
                    totalCount += action.payload[i].unread
                }
            }
            return {
                ...state,
                getPropertiesLoading: false,
                getPropertiesSuccess: true,
                getPropertiesFailure: false,
                propertiesList: action.payload,
                count: totalCount,
                getPropertiesError: null
            }
        case PROPERTIES_REQUEST.GET_ALL_PROPERTIES_FAILURE:
            return {
                ...state,
                getPropertiesLoading: false,
                getPropertiesSuccess: false,
                getPropertiesFailure: true,
                getPropertiesError: action.payload
            }
        case PROPERTIES_REQUEST.RECORD_DEAL_RESET:
            return {
                ...state,
                recordDealLoading: false,
                recordDealSuccess: false,
                recordDealFailure: false,
                recordDealError: null
            }
        case PROPERTIES_REQUEST.RECORD_DEAL_REQUEST:
            return {
                ...state,
                recordDealLoading: true,
                recordDealSuccess: false,
                recordDealFailure: false,
                recordDealError: null
            }
        case PROPERTIES_REQUEST.RECORD_DEAL_SUCCESS:
            let my_property = state.propertiesList;
            for (let i = 0; i < my_property.length; i++) {
                if (my_property[i].propertyId === action.payload) {
                    my_property[i].isRecordDeal = true
                }
            }
            return {
                ...state,
                recordDealLoading: false,
                recordDealSuccess: true,
                recordDealFailure: false,
                propertiesList: my_property,
                recordDealError: null
            }
        case PROPERTIES_REQUEST.RECORD_DEAL_FAILURE:
            return {
                ...state,
                recordDealLoading: false,
                recordDealSuccess: false,
                recordDealFailure: true,
                recordDealError: action.payload
            }
        default:
            return state;
    }
}