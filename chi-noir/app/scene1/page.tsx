"use client";

import MessageBox from "@/components/MessageBox";
import LaSelleStationImg from "@/public/Scene1/LaSelleStation.png";
import CheckLogsBg from "@/public/Scene1/CheckLogsBg.png";
import CheckRailwayBg from "@/public/Scene1/CheckRailwayBg.png";
import { useEffect, useState } from "react";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Scene1() {
  const [checkedBody, setCheckedBody] = useState(false);
  const [checkedLogs, setCheckedLogs] = useState(false);
  const [checkedRailway, setCheckedRailway] = useState(false);
  const [endScene, setEndScene] = useState(false);

  const [numberOfActionsCompleted, setNumberOfActionsCompleted] = useState(0);

  let actionEvents: Function[] = [
    () => {
      setCheckedBody(true);
      setNumberOfActionsCompleted(numberOfActionsCompleted + 1);
      delay(500).then(() =>
        document
          .getElementById("BodyCheck")
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    },
    () => {
      setCheckedLogs(true);
      setNumberOfActionsCompleted(numberOfActionsCompleted + 1);
      delay(500).then(() =>
        document
          .getElementById("LogsCheck")
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    },
    () => {
      setCheckedRailway(true);
      setNumberOfActionsCompleted(numberOfActionsCompleted + 1);
      delay(500).then(() =>
        document
          .getElementById("RailwayCheck")
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    },
  ];

  let sceneMessages: string[] = [
    "Welcome to Laselle Stop, Detective. This is the scene of the crime.",
    "We have found out that the victim was a local bouncer named Jackob who works at Rex Lounge.",
    "He was found dead here under the staircase, with a gunshot wound to the chest.",
    "We only have time before the media arrives, so we need to gather as much evidence as possible.",
    "Let's start by examining the crime scene and collecting any clues we can find, let me know where would you like to investigate first.",
  ];

  let sceneActions: string[] = ["Check Body", "Check Logs", "Check Railway"];

  let logsMessages: string[] = [
    "This is how the logs are looking like, we can see that there was a gunshot sound detected at 2:15 AM, and there were some unusual activities around that time.",
    "We can also see that there were some people who were around the area at that time, but we need to investigate further to find out who they are.",
  ];
  let logsActions: string[] = ["Back to Scene"];
  let logsActionEvents: Function[] = [
    () => {
      if (numberOfActionsCompleted >= 2) {
        setEndScene(true);
        delay(500).then(() =>
          document
            .getElementById("EndingScene")
            ?.scrollIntoView({ behavior: "smooth" }),
        );
        return;
      }
      delay(500).then(() =>
        document
          .getElementById("TrainScene")
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    },
  ];

  let railwayMessages: string[] = [
    "The railway surveillance footage shows a suspicious individual wearing a hoodie and sunglasses, who was seen near the crime scene around the time of the murder.",
    "We need to analyze this footage carefully to identify the suspect and gather more evidence.",
  ];
  let railwayActions: string[] = ["Back to Scene"];
  let railwayActionEvents: Function[] = [
    () => {
      if (numberOfActionsCompleted >= 2) {
        setEndScene(true);
        delay(500).then(() =>
          document
            .getElementById("EndingScene")
            ?.scrollIntoView({ behavior: "smooth" }),
        );
        return;
      }
      delay(500).then(() =>
        document
          .getElementById("TrainScene")
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    },
  ];

  let endSceneMessages: string[] = [
    "Great work, Detective! We have gathered enough intel for now.",
    "Let's leave before media gets all up in our business.",
  ];
  let endSceneActions: string[] = ["Go Home"];
  let endSceneActionEvents: Function[] = [() => alert("Go home")];

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
        id="TrainScene"
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative ${endScene ? "hidden" : ""}`}
        style={{
          backgroundImage: `url(${LaSelleStationImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MessageBox
          messages={sceneMessages}
          actionNames={sceneActions}
          actionHrefs={actionEvents}
        />
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
        <MessageBox
          messages={sceneMessages}
          actionNames={sceneActions}
          actionHrefs={actionEvents}
        />
      </div>
      <div
        id="LogsCheck"
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative ${checkedLogs ? "" : "hidden"}`}
        style={{
          backgroundImage: `url(${CheckLogsBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MessageBox
          messages={logsMessages}
          actionNames={logsActions}
          actionHrefs={logsActionEvents}
        />
      </div>
      <div
        id="RailwayCheck"
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative ${checkedRailway ? "" : "hidden"}`}
        style={{
          backgroundImage: `url(${CheckRailwayBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MessageBox
          messages={railwayMessages}
          actionNames={railwayActions}
          actionHrefs={railwayActionEvents}
        />
      </div>
      <div
        id="EndingScene"
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative ${endScene ? "" : "hidden"}`}
        style={{
          backgroundImage: `url(${LaSelleStationImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MessageBox
          messages={endSceneMessages}
          actionNames={endSceneActions}
          actionHrefs={endSceneActionEvents}
        />
      </div>
    </div>
  );
}
