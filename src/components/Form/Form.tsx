import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

interface FormProps {
    currentId?: number | null;
    setCurrentId: React.Dispatch<React.SetStateAction< number | null >>,
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction< boolean >>;
}

const Form = ({ currentId, setCurrentId, open, setOpen }: FormProps) => {
  const randomId = Math.random().toString(36).slice(2, 10);

  const post = useSelector((state: any) =>
  currentId
  ? state.posts.find((p: any) => p.id === currentId) 
  : {
    id: randomId,
    title: "",
    body: "",
  },
  );
  
  const [postData, setPostData] = useState(post);
  
  const dispatch: any = useDispatch();

  const clearForm = () => {
    setPostData({
      title: "",
      body: ""
    })
  };

  console.log(postData.title)

  const clear = () => {
    setCurrentId(0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
      clear();
    } else {
      dispatch(createPost(postData));
      clear();
    }

    setOpen(!open)
  };
 
  console.log(typeof postData, postData)
  return (
    <Paper>
 
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography>{currentId ? "Editing" : "Creating"} a Post</Typography>

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value})}
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={postData.body}
          onChange={(e) => setPostData({ ...postData, body: e.target.value })}
        />

        <Button variant="contained" color="primary" size="large" type="submit">
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clearForm}
        >
          Clear
        </Button>
      </form>
  
    </Paper>
  );
};

export default Form;
