import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./public/reducer/userReducer";

export let store = createStore(rootReducer, composeWithDevTools());