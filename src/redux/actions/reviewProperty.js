import { request, success, failure, REVIEW_PROPERTY } from './utilities';
import { getTenantReviewProperty } from '../api';
export function tenantReviewProperty(auth) {
    return (dispatch) => {
        dispatch(request(REVIEW_PROPERTY.GET_TENANT_REVIEW_LOADING));
        getTenantReviewProperty(auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(REVIEW_PROPERTY.GET_TENANT_REVIEW_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(REVIEW_PROPERTY.GET_TENANT_REVIEW_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(REVIEW_PROPERTY.GET_TENANT_REVIEW_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    };
}

