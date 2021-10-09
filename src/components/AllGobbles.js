import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import { Template } from "./Template";

export const AllGobbles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const posts = useSelector((state) => state.posts);

  return (
    <div>
      {posts.reverse().map((post) => {
        return (
          <Template
            body={post.review}
            head={post.restaurant}
            rating={post.rating}
          />
        );
      })}
    </div>
  );
};
