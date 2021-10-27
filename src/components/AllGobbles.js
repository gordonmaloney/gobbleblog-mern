import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import { Template } from "./Template";
import { Link } from "react-router-dom";
import { DisplayGobble } from "./DisplayGobble";
export const AllGobbles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const posts = useSelector((state) => state.posts);

  const reversedPosts = posts.reverse()

  return (
    <div>
      {reversedPosts && posts.map((post) => {
        return (
          <Link to={`/gobble/${post._id}`}>
            <Template
              body={post.review}
              head={post.restaurant}
              rating={post.rating}
            />
          </Link>
        );
      })}
    </div>
  );
};
