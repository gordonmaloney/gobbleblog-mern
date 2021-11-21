import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import { Template } from "./Template";
import { Link } from "react-router-dom";
import { DisplayGobble } from "./DisplayGobble";
import { useLocation } from 'react-router-dom'
import { Login } from "./Login";

export const AllGobbles = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0)
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
      {user?.result ? filteredPosts.map((gobble) => {
            let totalRating = 0;
            gobble.orders.map(order => totalRating = totalRating + order.rating )
            const avgRating = totalRating / gobble.orders.length
        
            console.log(gobble.restaurant, gobble.summary)
            console.log(gobble.restaurant, gobble.orders[0].review)

        return (
          <Link to={`/gobble/${gobble._id}`}>
            
            <Template
              body={!gobble.summary ? gobble.orders[0].review : gobble.summary}
              head={gobble.restaurant}
              rating={avgRating}
            />
          </Link>
        );
      })
      :
      <center>
      <h1 style={{color: "white"}}>Log in to start gobblin'</h1>
      <Login />
      </center>
    }
    </div>
  );
};
