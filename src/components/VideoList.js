import React from 'react';
import VideoItem from './VideoItem';
// const VideoList = (props) =>{ 
    //using diff. syntax
const VideoList = ({videoarray,videorender}) =>{
    //dealing with arrays
//   const modifiedVideoArray = props.videoarray.map( (iterator) => {
//syntax change
const modifiedVideoArray = videoarray.map( (iterator,index) => {
return <VideoItem videorender={videorender} currentVideoInArray ={ iterator} key={index}/>
// index helps in uniquely identifying elements of array
    });
    // using/printing arrays 
    return <div> {modifiedVideoArray} </div>;
};
export default VideoList;