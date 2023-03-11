import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";

import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import reducers from "../reducers"


const persistConfig = {
	key: "root",
	storage,
	reducers,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch : ()=> typeof store.dispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

