"use client";

import Image from "next/image";
import Cop from "@/public/Komser.png";
import { useEffect, useState } from "react";
import ActionButton from "./ActionButton";

export default function MessageBox({
  messages,
  actionHrefs,
}: Readonly<{
  messages: string[];
  actionHrefs?: Function[];
}>) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showActionButtons, setShowActionButtons] = useState(false);

  const handleClick = () => {
    if (currentMessageIndex < messages.length - 1) {
      setCurrentMessageIndex(currentMessageIndex + 1);
    }
  };

  useEffect(() => {
    if (currentMessageIndex === messages.length - 1) {
      setShowActionButtons(true);
    }
  }, [currentMessageIndex, messages.length]);

  return (
    <div
      style={{ zIndex: 5 }}
      className="absolute bottom-1/6 left-1/2 transform -translate-x-1/2  text-white p-6 rounded-lg min-w-2xl max-w-5xl cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative z-20">
        <Image
          src={Cop}
          alt="Cop"
          className="absolute left-0 top-1/2 -translate-y-4/4 w-40"
          style={{ zIndex: -5 }}
        />
        <div className="flex flex-col z-10 p-5 bg-gray-800 bg-opacity-70 rounded-lg">
          <p id="messageBox" className="text-lg">
            {messages[currentMessageIndex]}
          </p>
          <p className="text-sm text-gray-400 mt-2">Click to continue...</p>
        </div>
        <div
          className={`transition-all flex flex-row justify-between gap-x-5 mt-5 duration-300 ${showActionButtons ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <ActionButton
            label="Check Body"
            onClick={() => (actionHrefs ? actionHrefs[0]() : null)}
          />
          <ActionButton
            label="Check Logs"
            onClick={() => (actionHrefs ? actionHrefs[1]() : null)}
          />
          <ActionButton
            label="Check Railway"
            onClick={() => (actionHrefs ? actionHrefs[2]() : null)}
          />
        </div>
      </div>
    </div>
  );
}
