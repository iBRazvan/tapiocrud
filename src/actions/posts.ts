import * as api from "../api";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

// Actions

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export const getPosts = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchPosts();
      // @ts-ignore  
      const postsLocalStorage = JSON.parse(localStorage.getItem('postsLocalStorage'))
      
    dispatch({
      type: FETCH_ALL,
      payload: postsLocalStorage ? [  ...postsLocalStorage, ...data, ] : data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post: Post) => async (dispatch:any) => {
  try {
    await api.createPost(post);

    let postsLocalStorage = []
    // @ts-ignore  
    postsLocalStorage = JSON.parse(localStorage.getItem("postsLocalStorage")) || []
    postsLocalStorage.unshift(post)
    localStorage.setItem("postsLocalStorage", JSON.stringify(postsLocalStorage))

    dispatch({ type: CREATE, payload: post });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const updatePost = (id: number , post: Post) => async (dispatch: any) => {
  try {
    await api.updatePost(id, post);
    // @ts-ignore  
    let postsLocalStorage = JSON.parse(localStorage.getItem("postsLocalStorage")) || []
    const findById = (post: any) => post.id === id; 
    const index = (postsLocalStorage.findIndex(findById))
    
     const check = () => !post.userId ??  (
      postsLocalStorage.splice(index, 1, post),
      localStorage.setItem("postsLocalStorage",JSON.stringify(postsLocalStorage))
    ) 
  
    check()
    dispatch({ type: UPDATE, payload: post });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id: number) => async (dispatch: any) => {
  try {
    await api.deletePost(id);
// @ts-ignore  
    let postsLocalStorage = JSON.parse(localStorage.getItem("postsLocalStorage")) || []

    const findById = (post: any) => post.id === id; 
    const index = (postsLocalStorage.findIndex(findById))
    postsLocalStorage.splice(index, 1)
    localStorage.setItem("postsLocalStorage", JSON.stringify(postsLocalStorage))

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};


