import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import portfolio from "./portfolio";
import experience from "./experience";
export default combineReducers({
  //actions
  auth,
  profile,
  portfolio,
  experience,
});
