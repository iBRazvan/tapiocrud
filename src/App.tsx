import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Grow, AppBar } from "@mui/material";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";

import PostsList from "./components/PostsList/PostsList";
import Modal from "./components/Modal/Modal";
import Fab from "@mui/material/Fab";
import SnackbarComponent from "./components/Snackbar/Snackbar";
import AddIcon from "@mui/icons-material/Add";

// interface IState {
//   currentId: number | null;
//   setCurrentId: React.Dispatch<React.SetStateAction<number | null>>;
// }

const App: React.FC = () => {

  const [currentId, setCurrentId] = useState<number | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar
        className="flex flex-col justify-center items-center my-8 rounded-2xl !bg-slate-800"
        position="static"
      >
        <Typography variant="h2" align="center">
          Tapio CRUD
        </Typography>
      </AppBar>

      <Fab
        className="!sticky z-10 !bg-slate-800"
        style={{ top: "90vh", }}
        color="primary"
        aria-label="add"
      >
        <AddIcon onClick={() => setOpen(()=> !open)}/>
      </Fab>
      <SnackbarComponent/>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
            className="flex flex-row "
          >
            <Modal open={open} setOpen={setOpen} currentId={currentId} setCurrentId={setCurrentId} />
            <Grid item xs={12} sm={12}>
              <PostsList open={open} setOpen={setOpen} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
