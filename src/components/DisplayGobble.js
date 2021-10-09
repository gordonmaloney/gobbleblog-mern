import React from 'react'
import { useSelector } from "react-redux";
import { Template } from './Template';
export const DisplayGobble = (props) => {

    const gobbles = useSelector((state) => state.posts);

    const gobble = gobbles.filter((gobbles) => gobbles._id === props.match.params.id)[0];

    return (
        <div>
            <Template
              body={gobble.review}
              head={gobble.restaurant}
              rating={gobble.rating}
            />
        </div>
    )
}
