import { POST_PROPERTY } from "../actions/utilities";

const INITIAL_STATE = {
    addFileLoading: false,
    addFileSuccess: false,
    addFileFailure: false,
    addFileError: null,
    getAllFilesLoading: false,
    getAllFilesSuccess: false,
    getAllFilesFailure: false,
    getAllFilesError: null,
    files: [],

    getPropertyDetailLoading: false,
    getPropertyDetailSuccess: false,
    getPropertyDetailFailure: false,
    getPropertyDetailError: null,
    propertyDetail: []
}

export const postProertyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_PROPERTY.ADD_PROPERTY_FILE_REQUEST:
            return {
                ...state,
                addFileLoading: true,
                addFileFailure: false,
                addFileSuccess: false,
                addFileError: null
            }
        case POST_PROPERTY.ADD_PROPERTY_FILE_SUCCESS:
            let addImage = state.files;
            addImage.push(action.payload)
            return {
                ...state,
                addFileLoading: false,
                addFileFailure: false,
                addFileSuccess: true,
                addFileError: null,
                files: addImage
            }
        case POST_PROPERTY.ADD_PROPERTY_FILE_FAILURE:
            return {
                ...state,
                addFileLoading: false,
                addFileFailure: true,
                addFileSuccess: false,
                addFileError: action.payload
            }
        case POST_PROPERTY.REMOVE_PROPERTY_FILE_REQUEST:
            return {
                ...state,
                addFileLoading: true,
                addFileSuccess: false,
                addFileFailure: false,
                addFileError: null
            }
        case POST_PROPERTY.REMOVE_PROPERTY_FILE_SUCCESS:
            let imgList = state.files;
            for (let i = 0; i < imgList.length; i++) {
                if (imgList[i].propertyFileId === action.payload) {
                    imgList.splice(i, 1);
                }
            }
            return {
                ...state,
                addFileLoading: false,
                addFileSuccess: true,
                addFileFailure: false,
                addFileError: null,
                files: imgList
            }
        case POST_PROPERTY.REMOVE_PROPERTY_FILE_FAILURE:
            return {
                ...state,
                addFileLoading: false,
                addFileSuccess: false,
                addFileFailure: true,
                addFileError: action.payload
            }
        case POST_PROPERTY.GET_ALL_PROPERTY_FILES_REQUEST:
            return {
                ...state,
                getAllFilesLoading: true,
                getAllFilesSuccess: false,
                getAllFilesFailure: false,
                getAllFilesError: null
            }
        case POST_PROPERTY.GET_ALL_PROPERTY_FILES_SUCCESS:
            return {
                ...state,
                getAllFilesLoading: false,
                getAllFilesSuccess: true,
                getAllFilesFailure: false,
                getAllFilesError: null,
                files: action.payload
            }
        case POST_PROPERTY.GET_ALL_PROPERTY_FILES_FAILURE:
            return {
                ...state,
                getAllFilesLoading: false,
                getAllFilesSuccess: false,
                getAllFilesFailure: true,
                getAllFilesError: action.payload
            }
        case POST_PROPERTY.GET_PROPERTY_DETAIL_REQUEST:
            return {
                ...state,
                getPropertyDetailLoading: true,
                getPropertyDetailSuccess: false,
                getPropertyDetailFailure: false,
                getPropertyDetailError: null
            }
        case POST_PROPERTY.GET_PROPERTY_DETAIL_SUCCESS:
            let nameArr = []
            let finalData = []
            if (action && action.payload && action.payload.utilities) {
                nameArr = action.payload.utilities.split(',');
                finalData = {
                    askingType: action.payload.askingType,
                    askingTypeId: action.payload.askingTypeId,
                    leaseTerm: action.payload.leaseTerm,
                    maxPSF: action.payload.maxPSF,
                    minPSF: action.payload.minPSF,
                    propertyId: action.payload.propertyId,
                    sqFootage: action.payload.sqFootage,
                    utilities: nameArr
                }
            } else {
                finalData = {
                    askingType: null,
                    askingTypeId: null,
                    leaseTerm: null,
                    maxPSF: null,
                    minPSF: null,
                    propertyId: null,
                    sqFootage: null,
                    utilities: []
                }
            }

            return {
                ...state,
                getPropertyDetailLoading: false,
                getPropertyDetailSuccess: true,
                getPropertyDetailFailure: false,
                getPropertyDetailError: null,
                propertyDetail: finalData
            }
        case POST_PROPERTY.GET_PROPERTY_DETAIL_FAILURE:
            return {
                ...state,
                getPropertyDetailLoading: false,
                getPropertyDetailSuccess: false,
                getPropertyDetailFailure: true,
                getPropertyDetailError: action.payload,
            }
        case POST_PROPERTY.ADD_PROPERTYDETAIL_SUCCESS:
            var utli = state.propertyDetail.utilities
            utli.push(action.payload);
            return {
                ...state,
                propertyDetail: {
                    ...state.propertyDetail,
                    utilities: utli
                }
            }
        case POST_PROPERTY.REMOVE_PROPERTYDETAIL_SUCCESS:
            var utli_ = state.propertyDetail.utilities;
            for (let i = 0; i < utli_.length; i++) {
                if (utli_[i] === action.payload) {
                    utli_.splice(i, 1)
                }
            }
            return {
                ...state,
                propertyDetail: {
                    ...state.propertyDetail,
                    utilities: utli_
                }
            }
        default:
            return state;

    }
}