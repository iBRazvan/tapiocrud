import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts/";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost: object) => axios.post(url, newPost);
export const updatePost = (id: number, updatedPost: object) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id: number) => axios.delete(`${url}/${id}`);
