import { CONNECTION_REQUEST, failure, request, success } from "./utilities";
import { getAllTenantConnection, addRemoveToFavouriteTenantConnection, removeTenantConnection } from "../api";

export function allConnections(propertyId,sortBy,auth) {
    return dispatch => {
        dispatch(request(CONNECTION_REQUEST.GET_ALL_CONNECTION_REQUEST));
        getAllTenantConnection(propertyId,sortBy,auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(CONNECTION_REQUEST.GET_ALL_CONNECTION_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(CONNECTION_REQUEST.GET_ALL_CONNECTION_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(CONNECTION_REQUEST.GET_ALL_CONNECTION_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function addRemoveToFavConnection(id,auth){
    return dispatch =>{
        dispatch(request(CONNECTION_REQUEST.ADD_REMOVE_TO_FAVOURITE_CONNECTION_FAILURE))
        addRemoveToFavouriteTenantConnection(id,auth).then(
            response=>{
                if(response.data.succeeded===true){
                    dispatch(success(CONNECTION_REQUEST.ADD_REMOVE_TO_FAVOURITE_CONNECTION_SUCCESS,id))
                }
                else{
                    dispatch(failure(CONNECTION_REQUEST.ADD_REMOVE_TO_FAVOURITE_CONNECTION_FAILURE,response.data.message))
                }
            },
            error=>{
                dispatch(failure(CONNECTION_REQUEST.ADD_REMOVE_TO_FAVOURITE_CONNECTION_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

export function removeConnections(id,auth){
    return dispatch=>{
        dispatch(request(CONNECTION_REQUEST.REMOVE_CONNECTION_REQUEST));
        removeTenantConnection(id,auth).then(
            response=>{
                if(response.data.succeeded===true){
                    dispatch(success(CONNECTION_REQUEST.REMOVE_CONNECTION_SUCCESS,id))
                }
                else{
                    dispatch(failure(CONNECTION_REQUEST.REMOVE_CONNECTION_FAILURE,response.data.message))
                }
            },
            error=>{
                dispatch(failure(CONNECTION_REQUEST.REMOVE_CONNECTION_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}
