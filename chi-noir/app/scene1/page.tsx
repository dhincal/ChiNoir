"use client";

import MessageBox from "@/components/MessageBox";
import LaSelleStationImg from "@/public/Scene1/LaSelleStation.png";
import { useEffect, useState } from "react";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Scene1() {
  const [checkedBody, setCheckedBody] = useState(false);
  const [checkedLogs, setCheckedLogs] = useState(false);
  const [checkedRailway, setCheckedRailway] = useState(false);

  let actionEvents: Function[] = [
    () => {
      setCheckedBody(true);
      delay(500).then(() =>
        document
          .getElementById("BodyCheck")
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    },
    () => {
      setCheckedLogs(true);
    },
    () => {
      setCheckedRailway(true);
    },
  ];

  let sceneMessages: string[] = [
    "Welcome to Laselle Stop, Detective. This is the scene of the crime.",
    "We have found out that the victim was a local bouncer named Jackob who works at Rex Lounge.",
    "He was found dead here under the staircase, with a gunshot wound to the chest.",
    "We only have time before the media arrives, so we need to gather as much evidence as possible.",
    "Let's start by examining the crime scene and collecting any clues we can find, let me know where would you like to investigate first.",
  ];

  useEffect(() => {
    if (checkedBody && checkedLogs && checkedRailway) {
      // All actions completed, proceed to next scene or show a message
      alert(
        "Great work, Detective! You've gathered all the evidence. Let's move on to the next scene.",
      );
      // Here you can navigate to the next scene or reset the state for another investigation
    }
  }, [checkedBody, checkedLogs, checkedRailway]);

  return (
    <div>
      <div
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette`}
        style={{
          backgroundImage: `url(${LaSelleStationImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MessageBox messages={sceneMessages} actionHrefs={actionEvents} />
      </div>
      <div
        id="BodyCheck"
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative ${checkedBody ? "" : "hidden"}`}
        style={{
          backgroundImage: `url(${LaSelleStationImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MessageBox messages={sceneMessages} actionHrefs={actionEvents} />
      </div>
    </div>
  );
}
