import { combineReducers } from "redux";
import { ListingReducer } from "./browseLisiting";
import { BusinessProfileReducer } from "./bussinessProfileReducer";
import { LookUpReducer } from "./lookUpReducer";
import { postProertyReducer } from "./postProperty";
import { requirementReducer } from "./requirementReducer";
import { reviewPropertyReducer } from "./reviewPropertyReducer";
import { stateAndCityReducer } from "./stateAndCityReducer";
import { userReducer } from "./userReducer";
import { reportReducer } from "./reportReducer";
import { industryReducer } from "./industryReducer";
import { propertiesReducer } from "./propertyReducer";
import { landingPageReducer } from "./landingPage";
import { connectionReducer } from "./requestReducer";
import { chatReducer } from "./chatReducer";
export const rootReducer = combineReducers({
    user: userReducer,
    locations: stateAndCityReducer,
    lookUps: LookUpReducer,
    businessProfile: BusinessProfileReducer,
    requirement: requirementReducer,
    reviewProperty: reviewPropertyReducer,
    postProperty: postProertyReducer,
    listing: ListingReducer,
    reports: reportReducer,
    industry: industryReducer,
    properties: propertiesReducer,
    landingPage: landingPageReducer,
    connection: connectionReducer,
    chat: chatReducer
});
