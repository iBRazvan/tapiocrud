import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from "@mui/material";

import Post from './Post/Post'

  interface PostsListProps {
    setCurrentId: React.Dispatch<React.SetStateAction< number | null >>,
    setOpen: React.Dispatch<React.SetStateAction< boolean >>
    open: boolean;
  }

  type post = {
    id: number;
    title: string; 
    body: string;
  };

const PostsList = ({ setCurrentId, open, setOpen}: PostsListProps) => {
  const posts = useSelector((state: any) => state.posts)

  return !posts.length ? (
      <CircularProgress />
    ) : (
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        className="flex items-center"
      >
        {posts.map((post: post, index: number) => (
          <Grid key={index} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} open={open} setOpen={setOpen}/>
          </Grid>
        ))}
      </Grid>
    );
  };


export default PostsList