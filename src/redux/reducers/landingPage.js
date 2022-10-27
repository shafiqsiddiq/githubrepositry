import { LANDING_PAGE_REQUEST } from "../actions/utilities";

const INITIAL_STATE = {
    propertyLoading: false,
    propertySuccess: false,
    propertyFailure: false,
    propertyError: null,
    property: [],

    requirementLoading: false,
    requirementSuccess: false,
    requirementFailure: false,
    requirementError: null,
    requirement: [],
}

export const landingPageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LANDING_PAGE_REQUEST.ALL_PROPERTY_REQUEST:
            return {
                ...state,
                propertyLoading: true,
                propertySuccess: false,
                propertyFailure: false,
                propertyError: null,
                property: [],
            }
        case LANDING_PAGE_REQUEST.ALL_PROPERTY_SUCCESS:
            return {
                ...state,
                propertyLoading: false,
                propertySuccess: true,
                propertyFailure: false,
                propertyError: null,
                property: action.payload,
            }
        case LANDING_PAGE_REQUEST.ALL_PROPERTY_FAILURE:
            return {
                ...state,
                propertyLoading: false,
                propertySuccess: false,
                propertyFailure: true,
                propertyError: action.payload,
            }
        case LANDING_PAGE_REQUEST.ALL_REQUIREMENT_REQUEST:
            return {
                ...state,
                requirementLoading: true,
                requirementSuccess: false,
                requirementFailure: false,
                requirementError: null,
                requirement: [],
            }
        case LANDING_PAGE_REQUEST.ALL_REQUIREMENT_SUCCESS:
            return {
                ...state,
                requirementLoading: false,
                requirementSuccess: true,
                requirementFailure: false,
                requirementError: null,
                requirement: action.payload,
            }
        case LANDING_PAGE_REQUEST.ALL_REQUIREMENT_FAILURE:
            return {
                ...state,
                requirementLoading: false,
                requirementSuccess: false,
                requirementFailure: true,
                requirementError: action.payload,
            }
        default:
            return state
    }
}