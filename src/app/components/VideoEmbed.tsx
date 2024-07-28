'use client';
import { LegacyRef, useRef } from 'react';
export default function VideoEmbed() {
  type videoReftype = HTMLVideoElement | undefined;
  const videoRef = useRef<videoReftype>();
  return (
    <>
      <video
        src="/videos/demo1.mp4"
        autoPlay={true}
        ref={videoRef as any}
        onLoad={() => {
          console.log('Video Loaded');
        }}
      >
        Hello
      </video>
    </>
  );
}
