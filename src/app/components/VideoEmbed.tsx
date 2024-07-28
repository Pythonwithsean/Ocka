'use client';
import { useLayoutEffect, useRef } from 'react';
export default function VideoEmbed() {
  type videoReftype = HTMLVideoElement | undefined;
  const videoRef = useRef<videoReftype>();
  useLayoutEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.play().then(() => {
        console.log('Video Playing');
      });
    }
  }, []);
  return (
    <>
      <video
        className="Frame"
        src="/videos/demo1.mp4"
        controls={false}
        autoPlay={true}
        loop={true}
        ref={videoRef as any}
        muted={true}
      ></video>
    </>
  );
}
