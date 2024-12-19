import React from 'react';
import { Link } from 'react-router-dom';
import myVideo from '../videos/video_1.mp4';
import '../css/VideoPlayer.css';

function VideoPlayer() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Sample Video</h1>
      <p>Here is a cool video for you to watch!</p>
      <video className="w-100" controls>
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="mt-3">
        <Link to="/form">
          <button className="btn btn-primary">Go to Form Page</button>
        </Link>
      </div>
    </div>
  );
}

export default VideoPlayer;