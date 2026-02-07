"use client";

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
      {children}
    </MusicProviderContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicProviderContext);
}
