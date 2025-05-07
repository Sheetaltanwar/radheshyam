
import React, { useRef, useEffect } from 'react';

const VideoClip = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.currentTime = 5; // Start at 5 seconds

      const handleTimeUpdate = () => {
        if (video.currentTime >= 35) { // Stop at 10 seconds
          video.pause();
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        style={{
          width: '100vw',
          height: '600px',
          objectFit: 'cover',
        }}
      >
        <source src="https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/India-360-v2.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default VideoClip;
