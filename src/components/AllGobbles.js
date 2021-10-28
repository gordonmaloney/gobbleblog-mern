import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import { Template } from "./Template";
import { Link } from "react-router-dom";
import { DisplayGobble } from "./DisplayGobble";
import { useLocation } from 'react-router-dom'

export const AllGobbles = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")))
  }, [location])

  const posts = useSelector((state) => state.posts);
  const reversedPosts = posts.reverse()
  let filteredPosts
  
  if (user) filteredPosts = reversedPosts.filter(gobble => gobble.userId == user.result._id)

  return (
    <div>
      {user?.result ? filteredPosts.map((post) => {
        return (
          <Link to={`/gobble/${post._id}`}>
            <Template
              body={post.review}
              head={post.restaurant}
              rating={post.rating}
            />
          </Link>
        );
      })
      :
      <center>
      <h1 style={{color: "white"}}>Log in to start gobblin'</h1>
      </center>
    }
    </div>
  );
};
