import {combineReducers} from "redux";
import gamesReducer from "./gamesReducer";
import gamesSelectedReducer from "./gamesSelectedReducer";

const rootReducer = combineReducers({
   games: gamesReducer,
   gamesSelected:gamesSelectedReducer
});

export default rootReducer;