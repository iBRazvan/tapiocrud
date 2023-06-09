import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export interface Post {
  id: number;
  title: string;
  description: string;
}


const posts = (posts :any[] = [], action: any) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [action.payload, ...posts,];
    case UPDATE:
      return posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post.id !== action.payload);
    default:
      return posts;
  }
};

export default posts