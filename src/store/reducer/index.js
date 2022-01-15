import { combineReducers } from "redux";
import appointmentReducer from "./appointmentReducer";

const reducers = combineReducers({
    appointment: appointmentReducer
})

export default reducers;