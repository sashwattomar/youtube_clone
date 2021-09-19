import './VideoItem.css';//IMP
import React from 'react';
 const  VideoItem = ({currentVideoInArray,videorender}) =>{
     return( 
     <div onClick= {() => videorender(currentVideoInArray)} className="video-item item">
         <img className="ui image"  src= {currentVideoInArray.snippet.thumbnails.medium.url} alt='thumbnails' />
        <div className="content" >
            <div className="header">
         {currentVideoInArray.snippet.title}
            </div>
        </div>
         </div>
         );
 };
 export default VideoItem;