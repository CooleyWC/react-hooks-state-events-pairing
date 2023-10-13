import React from 'react';

function Details({videoData}){

    const {title, views, createdAt} = videoData;

    return(
        <div>
            <div>
                <h2>{title}</h2>
                <p>{views} | {createdAt}</p>
            </div>
        </div>
    )
}

export default Details