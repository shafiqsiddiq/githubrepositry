import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function getAllLists(listData, auth) {
    let finalData = {
        "placeName": listData.placeName,
        "minSqFoot": listData.minSqFoot,
        "maxSqFoot": listData.maxSqFoot,
        "minPrice": listData.minPrice,
        "maxPrice": listData.maxPrice,
        "industryId": listData.industryId ? listData.industryId : null,
        "utilities": listData.utilities
    }
    return axios.post(`${APP_SETTINGS.API_PATH.BROWSE_LISTING.getAllLists}`, finalData, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}

export function getAllTenants(tenantData, auth) {
    let finalData = {
        "propertyId": tenantData.propertyId ? tenantData.propertyId : 0,
        "placeName": tenantData.placeName ? tenantData.placeName : null,
        "minSqFoot": tenantData.minSqFoot ? tenantData.minSqFoot : null,
        "maxSqFoot": tenantData.maxSqFoot ? tenantData.maxSqFoot : null,
        "minPrice": tenantData.minPrice ? tenantData.minPrice : null,
        "maxPrice": tenantData.maxPrice ? tenantData.maxPrice : null,
        "industryId": tenantData.industryId ? tenantData.industryId : null,
        "utilities": tenantData.utilities ? tenantData.utilities : [],
    }
    return axios.post(`${APP_SETTINGS.API_PATH.BROWSE_TENANTS.getAllTenants}`, finalData, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
