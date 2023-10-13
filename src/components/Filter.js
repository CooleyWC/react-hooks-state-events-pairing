import React, {useState} from 'react';

function Filter({videoData, hideComments, setHideComments}){
    const {upvotes, downvotes} = videoData;
    const [upVoteCount, setUpVoteCount] = useState(upvotes)
    const [downVoteCount, setDownVoteCount] = useState(downvotes)



    function handleUpVoteClick(){
        setUpVoteCount((previousCount)=>previousCount+1)
    }

    function handleDownVoteClick(){
        setDownVoteCount((previousCount)=>previousCount-1)
    }

    function handleHide(){
        setHideComments(!hideComments)
    }

    return(
    <div>
        <div>
            <button onClick={handleUpVoteClick}>{upVoteCount} 👍</button>
            <button onClick={handleDownVoteClick}>{downVoteCount} 👎</button>
        </div>
        <div>
            <button onClick={handleHide}>{hideComments ? "Show Comments": "Hide Comments"}</button>
        </div>
        <hr></hr>
    </div>    
    )
}


export default Filter