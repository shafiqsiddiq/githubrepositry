import axios from "axios"
import { LINKEDIN_CLIENT_ID, LINKED_IN_EMBEDED_URL, LINKED_IN_SECRET_ID } from "../../config"
export function getAccessToken(code) {
    return axios.post(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=${LINKEDIN_CLIENT_ID}&client_secret=${LINKED_IN_SECRET_ID}&code=${code}&redirect_uri=${LINKED_IN_EMBEDED_URL}`)
}

export function getLinkedInEmail(access_token) {
    return axios.get(`https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))`, {
        headers: {
            'Authorization': `Bearer ${access_token}`,
        },

    })
}

export function getLinkedInProfile(access_token) {
    return axios.get(`https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))`, {
        headers: {
            'Authorization': `Bearer ${access_token}`,
        }
    })
}