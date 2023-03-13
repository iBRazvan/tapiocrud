import React, { useState, useEffect } from "react";
import { alpha, styled } from '@mui/material/styles';
import { TextField, Button, Typography, Paper, Box } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { setSnackbar } from "../../actions/snackbar";

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'orange',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'grey',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'grey',
    },
    '&:hover fieldset': {
      borderColor: 'orange',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'orange',
    },
  },
});

interface FormProps {
  currentId?: number | null;
  setCurrentId: React.Dispatch<React.SetStateAction<number | null>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form = ({ currentId, setCurrentId, open, setOpen }: FormProps) => {
  const randomId = Math.floor(Math.random() * 1000) + 100;

  const post = useSelector((state: any) =>
    currentId
      ? state.posts.find((p: any) => p.id === currentId)
      : {
          id: randomId,
          title: "",
          body: "",
        }
  );

  const [postData, setPostData] = useState(post);

  const dispatch: any = useDispatch();

  const clearForm = () => {
    dispatch(setSnackbar(true, "info", "Cleared Successfully"));
    setPostData({
      title: "",
      body: "",
    });
  };

  const clear = () => {
    setCurrentId(0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
      dispatch(setSnackbar(true, "success", "Edited Successfully"));
      clear();
    } else {
      dispatch(createPost(postData));
      dispatch(setSnackbar(true, "success", "Created Successfully"));
      clear();
    }

    setOpen(!open);
  };

  return (
    <Paper className="outline-none !shadow-none">
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography className="pb-2">
          {currentId ? "Editing" : "Creating"} a Post
        </Typography>

        <CssTextField
          style={{marginBottom: 5, marginTop: 5, }}
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
         
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <CssTextField
        style={{marginBottom: 5, marginTop: 5}}
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={postData.body}
          onChange={(e) => setPostData({ ...postData, body: e.target.value })}
        />
        <Box className="flex flex-row justify-between outline-none !shadow-none  pt-5">
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            style={{ backgroundColor: "orange" }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "black" }}
            size="large"
            onClick={clearForm}
          >
            Clear
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Form;
