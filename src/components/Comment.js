import React from 'react';

function Comment({id, name, commentTxt}){

    return(
        <div>
            <h3>{name}</h3>
            <p>{commentTxt}</p>
        </div>
    )
}

export default Comment;