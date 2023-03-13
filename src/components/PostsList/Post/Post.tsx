import React from "react";
import { styled } from '@mui/material/styles';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";
import { setSnackbar } from "../../../actions/snackbar";

const CustomizedButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'black',
  borderColor: 'black',
  opacity: 1,
  color: 'white',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'orange',
    borderColor: 'orange',
    opacity: 0.8,
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: 'black',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem orange',
  },
});

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
          <Typography variant="h5">{post?.title}</Typography>

          <Typography variant="h6">{post?.body}</Typography>
        </CardContent>

        <CardActions>
          <CustomizedButton

            onClick={() => {
              setCurrentId(post?.id);
              setOpen(!open)
            }}
          >
            Edit
          </CustomizedButton>
          <CustomizedButton onClick={() => 
              dispatch(deletePost(post?.id),
              dispatch(setSnackbar(true, "success", "Deleted Successfully"))
              )}
          >
            Delete
          </CustomizedButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
