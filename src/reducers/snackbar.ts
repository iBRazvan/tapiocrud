import { SET_SNACKBAR } from "../constants/actionTypes"

export interface Snackbar {
    snackbarOpen: boolean;
    snackbarType: string;
    snackbarMessage: string;
  }

const initialState = {
    snackbarOpen: false,
    snackbarType: "success",
    snackbarMessage: ""
}

const snackbarReducer = (state = initialState, action: any):Snackbar => {
    switch(action.type) {
        case SET_SNACKBAR:
            const {snackbarOpen, snackbarMessage, snackbarType} = action;
            return {
                ...state,
                snackbarOpen,
                snackbarType,
                snackbarMessage,
            };
            default: 
                return state;
    }
};

export default snackbarReducer