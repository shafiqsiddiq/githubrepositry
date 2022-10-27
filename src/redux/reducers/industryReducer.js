import { INDUSTRY_REQUEST } from "../actions/utilities";

const INITIAL_STATE = {
    getIndustryLoading: false,
    getIndustrySuccess: false,
    getIndustryFailure: false,
    getIndustryError: null,
    industries: [],
    addIndustryLoading: false,
    addIndustrySuccess: false,
    addIndustryFailure: false,
    addIndustryError: null,
}

export const industryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INDUSTRY_REQUEST.GET_INDUSTRY_REQUEST:
            return {
                ...state,
                getIndustryLoading: true,
                getIndustrySuccess: false,
                getIndustryFailure: false,
                getIndustryError: null
            }
        case INDUSTRY_REQUEST.GET_INDUSTRY_SUCCESS:
            return {
                ...state,
                getIndustryLoading: false,
                getIndustryFailure: false,
                getIndustrySuccess: true,
                getIndustryError: null,
                industries: action.payload
            }
        case INDUSTRY_REQUEST.GET_INDUSTRY_FAILURE:
            return {
                ...state,
                getIndustryLoading: false,
                getIndustryFailure: true,
                getIndustrySuccess: false,
                getIndustryError: action.payload
            }
        case INDUSTRY_REQUEST.ADD_INDUSTRY_REQUEST:
            return {
                ...state,
                addIndustryLoading: true,
                addIndustrySuccess: false,
                addIndustryFailure: false,
                addIndustryError: null
            }
        case INDUSTRY_REQUEST.ADD_INDUSTRY_SUCCESS:
            let industry_list= state.industries;
            industry_list.push(action.payload);

            return {
                ...state,
                addIndustryLoading: false,
                addIndustryFailure: false,
                addIndustrySuccess: true,
                addIndustryError: null,
                industries: industry_list
            }
        case INDUSTRY_REQUEST.ADD_INDUSTRY_FAILURE:
            return {
                ...state,
                addIndustryLoading: false,
                addIndustryFailure: true,
                addIndustrySuccess: false,
                addIndustryError: action.payload
            }
        default:
            return state
    }
}