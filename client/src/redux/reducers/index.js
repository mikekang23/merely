import { combineReducers } from "redux";
//this is where I add other reducers to combine them.
import addDashboard from "./addDashboardReducer";

export default combineReducers({addDashboard});
