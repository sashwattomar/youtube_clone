import React from 'react';
const VideoDetail = ({CurrentVideo}) =>{
    if(CurrentVideo === null){
        return <div> Loading... </div>;
    }
    const videoSrc=`https://www.youtube.com/embed/${CurrentVideo.id.videoId}`;
        return (
            <div> 
                <div className="ui embed">
<iframe title='videoPlayer' src ={videoSrc} />
                </div>
                <div className="ui segment"> 
               <h4 className ="ui header">{CurrentVideo.snippet.title}</h4>
               <p>{CurrentVideo.snippet.description}</p>
                </div>
                
            </div>
          );
};
export default VideoDetail;