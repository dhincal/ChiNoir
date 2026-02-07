"use client";

import { useRef, useEffect } from "react";
import { useMusic } from "./AppWrapper";

export default function MusicPlayer() {
  const { isMusicOn } = useMusic();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const startMusic = () => {
      if (isMusicOn) {
        audio.play().catch(console.error);
      }
      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
    };
  }, [isMusicOn]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMusicOn) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [isMusicOn]);

  return (
    <div>
      <audio ref={audioRef} src="/Music/SpyMusic.mp3" loop preload="auto" />
    </div>
  );
}
