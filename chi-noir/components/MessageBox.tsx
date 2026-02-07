"use client";

import Image from "next/image";
import Cop from "@/public/Komser.png";
import { useEffect, useState } from "react";

export default function MessageBox({
  messages,
}: Readonly<{
  messages: string[];
}>) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const handleClick = () => {
    if (currentMessageIndex < messages.length - 1) {
      setCurrentMessageIndex(currentMessageIndex + 1);
    }
  };
  return (
    <div
      style={{ zIndex: 5 }}
      className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2  text-white p-6 rounded-lg min-w-2xl max-w-5xl cursor-pointer"
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
      </div>
    </div>
  );
}
