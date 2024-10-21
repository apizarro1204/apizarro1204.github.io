import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const videoUrl = 'https://www.youtube.com/embed/1TMIPem22-g?si=HRhvzFzEIl8iy82i';
  return (
    <div className="video-player">
        <iframe
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        ></iframe>
    </div>
  );
};

export default VideoPlayer;
