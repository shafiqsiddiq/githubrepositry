import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function azureBlob(data, auth) {
    return axios.post(`${APP_SETTINGS.API_PATH.AZURE_BLOB.AZURE_BLOB}`, data, {
        headers: {
            Authorization: 'Bearer ' + auth.real_estate_user.token
        }
    })
}
