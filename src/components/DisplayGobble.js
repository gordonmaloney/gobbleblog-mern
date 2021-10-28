import React, {useEffect, useState} from 'react'
import { AddOrder } from './AddOrder';
import { Template } from './Template';
import { getPosts } from "../actions/posts";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "../actions/posts";

export const DisplayGobble = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
      }, []);

    const gobbles = useSelector((state) => state.posts);

    const gobble = gobbles.filter((gobbles) => gobbles._id === props.match.params.id)[0];

    console.log("gobbles, ", gobbles)

    if (gobbles.length>0) {
    let totalRating = 0;
    gobble.orders.map(order => totalRating = totalRating + order.rating )
    const avgRating = totalRating / gobble.orders.length

    console.log(avgRating)

    gobble.orders.map(order => console.log(order) )
    

const NoSummary = () => {
    const [changeSummary, setChangeSummary] = useState(false);
    const [summary, setSummary] = useState()

    const handleSaveSummary = () => {
        const id = gobble._id
        gobble.summary = summary;
        dispatch(updatePost(id, gobble));
    }

    return (
        <>
    <span onClick={()=>setChangeSummary(true)}>Give this place a top-line summary</span>

    {changeSummary && <>
    <input onChange={e => setSummary(e.target.value)}/>
    <button onClick={()=>handleSaveSummary()}>save summary</button>
    </>}
    </>
    )
}


const ChangeSummary = () => {
    const [changeSummary, setChangeSummary] = useState(false);
    const [summary, setSummary] = useState()

    const handleSaveSummary = () => {
        const id = gobble._id
        gobble.summary = summary;
        dispatch(updatePost(id, gobble));
    }

    return (
        <>
    <span onClick={()=>setChangeSummary(true)}>{gobble.summary}</span>

    {changeSummary && <>
    <input onChange={e => setSummary(e.target.value)}/>
    <button onClick={()=>handleSaveSummary()}>save summary</button>
    </>}
    </>
    )
}

    return (
        <div>
            {gobble &&
            <Template
              body={gobble.summary ? <ChangeSummary /> : <NoSummary />}
              head={gobble.restaurant}
              rating={avgRating}
            />
            }


            {gobble.orders.map(order => 
                <Template
                    body={order.review}
                    rating={order.rating}
                    order={order.order}
                />
                
                )}

            <AddOrder gobble={gobble}/>


        </div>
    )
        }
        else {
            return <>Loading...</>
        }
}
