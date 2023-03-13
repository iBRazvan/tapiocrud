import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { setSnackbar } from "../../actions/snackbar";
import { useDispatch, useSelector } from "react-redux";


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

  
  const SnackbarComponent = () => {

    const dispatch = useDispatch();
    const snackbarOpen = useSelector((state:any) => state.snackbarReducer.snackbarOpen);
    const snackbarType = useSelector((state:any) => state.snackbarReducer.snackbarType);
    const snackbarMessage = useSelector((state:any) => state.snackbarReducer.snackbarMessage);
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === "clickaway") {
        return;
      }
      dispatch(setSnackbar(false, snackbarType, snackbarMessage));
    };
  
    return (
      <div>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            color={snackbarType}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    );
  };
  
  export default SnackbarComponent;
  