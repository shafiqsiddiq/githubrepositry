import axios from "axios";
import {APP_SETTINGS} from "../../config";

export function getAllIndustry(){
    return axios.get(APP_SETTINGS.API_PATH.INDUSTRY.getAllIndustry);
}