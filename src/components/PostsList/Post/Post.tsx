import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";

interface PostProps {
  post: {
    id: number;
    title: string;
    body:string;
  };
  setCurrentId: (id: number) => void;
  setOpen: React.Dispatch<React.SetStateAction< boolean >>
  open: boolean;
}

const Post = ({ post, setCurrentId, open, setOpen }: PostProps) => {
  const dispatch: any = useDispatch();

  return (
    <>
      <Card className="flex flex-col justify-between rounded-2xl h-full relative">
        <CardContent>
          <Typography variant="h5">{post.title}</Typography>

          <Typography variant="h6">{post.body}</Typography>
        </CardContent>

        <CardActions>
          <Button
            onClick={() => {
              setCurrentId(post.id);
              setOpen(!open)
            }}
          >
            Edit
          </Button>
          <Button onClick={() => dispatch(deletePost(post.id))}>Delete</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
