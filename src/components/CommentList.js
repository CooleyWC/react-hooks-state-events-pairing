import React, {useState} from 'react';
import Comment from './Comment';
import Filter from './Filter';

function CommentList({videoData}){
    const {comments} = videoData;

    const [hideComments, setHideComments] = useState(false)



    const commentItems = comments.map((comment)=>{
        if(hideComments === false){
            return <Comment key={comment.id} name={comment.user} commentTxt={comment.comment}/>
        } else {
            return null
        }
    })


    // console.log(commentItems)



    return(
        <div>
        <Filter videoData={videoData} setHideComments={setHideComments} hideComments={hideComments}/>
            <div>
                <h2>{comments.length} Comments</h2>
            </div>
            <div>
               {commentItems}
            </div>
        </div>
    )
}

export default CommentList;


//Need to add number before comment header