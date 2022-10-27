import { REQUIREMENT_PROPERTY_REQUEST } from "../actions/utilities";
const INITIAL_STATE = {
    getRequirementLoading: false,
    getRequirementSuccess: false,
    getRequirementFailure: false,
    getRequirementError: null,
    getRequirement: [],

    addRequirementLoading: false,
    addRequirementSuccess: false,
    addRequirementFailure: false,
    addRequirementError: null,
    addRequirement: []

}

export const requirementReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUIREMENT_PROPERTY_REQUEST.GET_REQUIREMENT_REQUEST:
            return {
                ...state,
                getRequirementLoading: true,
                getRequirementSuccess: false,
                getRequirementFailure: false,
                getRequirementError: null
            }
        case REQUIREMENT_PROPERTY_REQUEST.GET_REQUIREMENT_SUCCESS:
            let nameArr = []
            let finalData = []
            if (action && action.payload && action.payload.utilities) {
                nameArr = action.payload.utilities.split(',');
                finalData = {
                    maxSqFtBudget: action.payload.maxSqFtBudget,
                    maxSqFtRange: action.payload.maxSqFtRange,
                    minSqFtBudget: action.payload.minSqFtBudget,
                    minSqFtRange: action.payload.minSqFtRange,
                    utilities: nameArr
                }
            } else {
                finalData = {
                    maxSqFtBudget: null,
                    maxSqFtRange: null,
                    minSqFtBudget: null,
                    minSqFtRange: null,
                    utilities: []
                }
            }
            return {
                ...state,
                getRequirementLoading: false,
                getRequirementSuccess: true,
                getRequirementFailure: false,
                getRequirementError: null,
                getRequirement: finalData
            }
        case REQUIREMENT_PROPERTY_REQUEST.GET_REQUIREMENT_FAILURE:
            return {
                ...state,
                getRequirementLoading: false,
                getRequirementSuccess: false,
                getRequirementFailure: true,
                getRequirementError: action.payload
            }
        case REQUIREMENT_PROPERTY_REQUEST.ADD_REQUIREMENT_REQUEST:
            return {
                ...state,
                addRequirementLoading: true,
                addRequirementSuccess: false,
                addRequirementFailure: false,
                addRequirementError: null
            }
        case REQUIREMENT_PROPERTY_REQUEST.ADD_REQUIREMENT_SUCCESS:
            return {
                ...state,
                addRequirementLoading: false,
                addRequirementSuccess: true,
                addRequirementFailure: false,
                addRequirementError: null
            }
        case REQUIREMENT_PROPERTY_REQUEST.ADD_REQUIREMENT_FAILURE:
            return {
                ...state,
                addRequirementLoading: false,
                addRequirementSuccess: false,
                addRequirementFailure: true,
                addRequirementError: action.payload
            }
        case REQUIREMENT_PROPERTY_REQUEST.REMOVE_REQUIREMENT_SUCCESS:
            var utli_ = state.getRequirement.utilities;
            for (let i = 0; i < utli_.length; i++) {
                if (utli_[i] === action.payload) {
                    utli_.splice(i, 1)
                }
            }
            return {
                ...state,
                getRequirement: {
                    ...state.getRequirement,
                    utilities: utli_
                }
            }
        case REQUIREMENT_PROPERTY_REQUEST.ADD_REQUIREMENTDETAIL_SUCCESS:
            var utli = state.getRequirement.utilities
            utli.push(action.payload);
            return {
                ...state,
                getRequirement: {
                    ...state.getRequirement,
                    utilities: utli
                }
            }
        default:
            return state;
    }
}