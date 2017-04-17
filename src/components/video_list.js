import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const videositems = props.videos.map((video) => {
    return (
      <VideoListItem video={video} onVideoSelect={props.onVideoSelect} />
    );
  });
  return(
    <ul className="col-md-4 list-group">
      {videositems}
    </ul>
  );
}

export default VideoList;
