"use client";

import Image from "next/image";
import Cop from "@/public/Komser.png";
import PhoneCop from "@/public/KomserTelefonda.png";
import { useEffect, useState } from "react";
import ActionButton from "./ActionButton";
import { on } from "events";

export default function MessageBox({
  messages,
  actionNames,
  actionHrefs,
  onPhoneCall = false,
}: Readonly<{
  messages: string[];
  actionNames: string[];
  actionHrefs?: Function[];
  onPhoneCall?: boolean;
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
      className="absolute bottom-1/6 left-1/2 transform -translate-x-1/2  text-white p-6 rounded-lg min-w-2xl max-w-6xl cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative z-20">
        <Image
          src={onPhoneCall ? PhoneCop : Cop}
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
          className={`transition-all flex flex-row justify-between gap-x-5 max-w-full mt-5 duration-300 ${showActionButtons ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          {actionNames.map((name, index) => (
            <ActionButton
              key={index}
              label={name}
              onClick={() => (actionHrefs ? actionHrefs[index]() : null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
