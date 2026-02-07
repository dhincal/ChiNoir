"use client";

import { VolumeX } from "lucide-react";
import { Volume2 } from "lucide-react";

import { createContext, useContext, useState } from "react";

const MusicProviderContext = createContext<{
  isMusicOn: boolean;
  toggleMusic: () => void;
}>({
  isMusicOn: true,
  toggleMusic: () => {},
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isMusicOn, setIsMusicOn] = useState(true);

  const toggleMusic = () => {
    setIsMusicOn((prev) => !prev);
  };

  return (
    <MusicProviderContext.Provider value={{ isMusicOn, toggleMusic }}>
      <div
        onClick={toggleMusic}
        className="absolute left-0 top-0 p-4 cursor-pointer z-50 w-4 h-4"
      >
        {isMusicOn ? <Volume2></Volume2> : <VolumeX></VolumeX>}
      </div>
      {children}
    </MusicProviderContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicProviderContext);
}
