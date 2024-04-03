import React from 'react';

const Video = ({ src }) => {
  return (
    <div className="video-player">
      <video src={src} controls width="100%">
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
