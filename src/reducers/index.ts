import { combineReducers } from "redux";

import posts from "./posts";
import snackbarReducer from "./snackbar"


export const rootReducer =  combineReducers({ posts, snackbarReducer });
export type RootReducer = ReturnType<typeof rootReducer>;
