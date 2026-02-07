"use client";

import { useRef } from "react";
// import ClickSound from "@/public/Music/ClickMlcik.mp3";
export default function ActionButton({
  label,
  onClick,
}: Readonly<{
  label: string;
  onClick: () => void;
}>) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (audioRef.current) {
      console.log("Playing click sound");
      audioRef.current.currentTime = 0.4; // Start from 0.5 seconds to skip any silence at the beginning
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((err) => {
        console.log("Audio play failed:", err);
      });
    }
    onClick();
  };

  return (
    <button
      className="cursor-pointer mb-5 px-8 py-3 w-64 text-white uppercase tracking-widest text-sm border border-white/40 rounded-md bg-black/40 backdrop-blur-md shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 hover:border-white hover:shadow-[0_0_18px_rgba(255,255,255,0.7)] hover:text-white"
      onClick={handleClick}
    >
      {label}
      <audio ref={audioRef} src="/Music/ClickMlcik.mp3" />
    </button>
  );
}
