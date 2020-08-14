import { combineReducers } from "redux";
import firstNameReducer from "../reducers/reducerfirstname"; //import reducer from desired location to here
import lastNameReducer from "../reducers/reducerlastname";
import scoreReducer from "../reducers/reducerscore";
const allReducers = combineReducers(
  {
    //this wl combine all reducers and pass to store to update data

    firstName: firstNameReducer,
    lastName: lastNameReducer,
    score: scoreReducer,
  },
  () => console.log("combine")
);

export default allReducers;
