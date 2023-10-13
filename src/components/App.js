import React from 'react';
import video from "../data/video.js";
import Details from './Details';
import CommentList from './CommentList';

function App() {


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details videoData={video}/>
      <CommentList videoData={video}/>
    </div>
  );
}

export default App;
