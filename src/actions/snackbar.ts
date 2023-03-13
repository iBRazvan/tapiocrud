import { SET_SNACKBAR } from "../constants/actionTypes"

export interface Snackbar {
    snackbarOpen: boolean;
    snackbarType: string;
    snackbarMessage: string;
    type: any;
  };

export const setSnackbar = (
    snackbarOpen: boolean,
    snackbarType = "success",
    snackbarMessage = ""
):Snackbar => ({
    type: SET_SNACKBAR,
    snackbarOpen,
    snackbarType,
    snackbarMessage,
})
