import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";

import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { rootReducer, RootReducer } from "../reducers"
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


const persistConfig = {
	key: "root",
	storage,
	rootReducer,
	stateReconciler: autoMergeLevel2,
};


const persistedReducer = persistReducer<RootReducer>(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
    middleware: [thunk],
	
})


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch : ()=> typeof store.dispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

