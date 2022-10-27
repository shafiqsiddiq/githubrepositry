import { BUSSINESS_PROFILE } from "../actions/utilities";
const INITIAL_STATE = {
    getBussinessProfileLoading: false,
    getBussinessProfileSuccess: false,
    getBussinessProfileFailure: false,
    getBussinessProfileError: null,
    getBussinessProfile: [],

    addBussinessProfileLoading: false,
    addBussinessProfileSuccess: false,
    addBussinessProfileFailure: false,
    addBussinessProfileError: null,
    addBussinessProfile: []
}

export const BusinessProfileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BUSSINESS_PROFILE.GET_BUSSINESS_PROFILE_REQUEST:
            return {
                ...state,
                getBussinessProfileLoading: true,
                getBussinessProfileSuccess: false,
                getBussinessProfileFailure: false,
                getBussinessProfileError: null,
                getBussinessProfile: [],
            }
        case BUSSINESS_PROFILE.GET_BUSSINESS_PROFILE_SUCCESS:
            return {
                ...state,
                getBussinessProfileLoading: false,
                getBussinessProfileSuccess: true,
                getBussinessProfileFailure: false,
                getBussinessProfileError: null,
                getBussinessProfile: action.payload
            }
        case BUSSINESS_PROFILE.GET_BUSSINESS_PROFILE_FAILURE:
            return {
                ...state,
                getBussinessProfileLoading: false,
                getBussinessProfileSuccess: false,
                getBussinessProfileFailure: true,
                getBussinessProfileError: action.payload
            }
        case BUSSINESS_PROFILE.ADD_BUSSINESS_PROFILE_REQUEST:
            return {
                ...state,
                addBussinessProfileLoading: true,
                addBussinessProfileSuccess: false,
                addBussinessProfileFailure: false,
                addBussinessProfileError: null,
                addBussinessProfile: []
            }
        case BUSSINESS_PROFILE.ADD_BUSSINESS_PROFILE_SUCCESS:
            return {
                ...state,
                addBussinessProfileLoading: false,
                addBussinessProfileSuccess: true,
                addBussinessProfileFailure: false,
                addBussinessProfileError: null,
                addBussinessProfile: action.payload
            }
        case BUSSINESS_PROFILE.ADD_BUSSINESS_PROFILE_FAILURE:
            return {
                ...state,
                addBussinessProfileLoading: false,
                addBussinessProfileSuccess: false,
                addBussinessProfileFailure: true,
                addBussinessProfileError: action.payload
            }

        default:
            return state;
    }
}