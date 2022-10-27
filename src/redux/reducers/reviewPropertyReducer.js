import { REVIEW_PROPERTY } from "../actions/utilities";

const INITIAL_STATE = {
    getTenantReviewLoading: false,
    getTenantReviewSucess: false,
    getTenantReviewFailure: false,
    getTenantReviewError: null,
    getTenantReview: [],

    getLandlordReviewLoading: false,
    getLandlordReviewSucess: false,
    getLandlordReviewFailure: false,
    getLandlordReviewError: null,
    getLandlordReview: []
}

export const reviewPropertyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REVIEW_PROPERTY.GET_TENANT_REVIEW_LOADING:
            return {
                ...state,
                getTenantReviewLoading: true,
                getTenantReviewSucess: false,
                getTenantReviewFailure: false,
                getTenantReviewError: null
            }
        case REVIEW_PROPERTY.GET_TENANT_REVIEW_SUCCESS:
            return {
                ...state,
                getTenantReviewLoading: false,
                getTenantReviewSucess: true,
                getTenantReviewFailure: false,
                getTenantReviewError: null,
                getTenantReview: action.payload
            }
        case REVIEW_PROPERTY.GET_TENANT_REVIEW_FAILURE:
            return {
                ...state,
                getTenantReviewLoading: false,
                getTenantReviewSucess: false,
                getTenantReviewFailure: true,
                getTenantReviewError: action.payload
            }
        case REVIEW_PROPERTY.GET_LANDLORD_REVIEW_LOADING:
            return {
                ...state,
                getLandlordReviewLoading: true,
                getLandlordReviewSucess: false,
                getLandlordReviewFailure: false,
                getLandlordReviewError: null,
               
            }
        case REVIEW_PROPERTY.GET_LANDLORD_REVIEW_SUCCESS:
            return {
                ...state,
                getLandlordReviewLoading: false,
                getLandlordReviewSucess: true,
                getLandlordReviewFailure: false,
                getLandlordReviewError: null,
                getLandlordReview: action.payload
            }
        case REVIEW_PROPERTY.GET_LANDLORD_REVIEW_FAILURE:
            return {
                ...state,
                getLandlordReviewLoading: false,
                getLandlordReviewSucess: false,
                getLandlordReviewFailure: true,
                getLandlordReviewError: action.payload
            }
        default:
            return state;
    }
}