"use client";

import MessageBox from "@/components/MessageBox";
import LaSelleStationImg from "@/public/Scene1/LaSelleStation.png";
import CheckLogsBg from "@/public/Scene1/CheckLogsBg.png";
import CheckRailwayBg from "@/public/Scene1/CheckRailwayBg.png";
import CheckBodyBg from "@/public/Scene1/CheckBodyBg.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Scene1() {
  const router = useRouter();

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
    "Welcome to La Selle Stop, Detective, the scene of the crime.",
    "We have found out that the victim was a local bouncer named Jacob who works at Rex Lounge.",
    "He was found dead here under the staircase, with a gunshot wound to the chest.",
    "We do not have much time before the media arrives, so we need to be quick and gather as much evidence as possible.",
    "Let's start by examining the crime scene and collecting any clues we can find, let me know where would you like to investigate.",
  ];

  let sceneActions: string[] = ["Check Body", "Check Logs", "Check Railway"];

  let bodyMessages: string[] = [
    "Upon examining the body, we can see that Jacob was shot at close range, with a small caliber handgun. The gunshot wound is consistent with a single shot fired from a distance of less than 2 feet.",
    "Other than the signs of murder, we found a red haired man's photograph in his wallet, seems like a romantic interest.",
    "We also found a tuft of brown hair on his clothes, this either might be from the perpetrator, or from a random woman who goes to the club he works at.",
  ];
  let bodyActions: string[] = ["Back to Scene"];
  let bodyActionEvents: Function[] = [
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

  let logsMessages: string[] = [
    "As we look at the logs, between 1 A.M. and 6 A.M. there were not so many people coming in or out.",
    "Only thing that interests me is an entry made by John Bummer at around 3 A.M., he has a long criminal record, mostly for drug abuse and petty theft, but he has been known to be violent when under influence.",
    "I don't think there is any other useful information in the logs, at least more than we have anyways.",
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
    "After cheking the inside the railway, we found 9mm shell casings, which matches the caliber of the gunshot wound on the victim.",
    "Other than that, we found a receipt from Rex Lounge, the club where the victim works, for a purchase made at around 2:00 A.M., which is around the time of the murder.",
    "Also even though it serves alcohol this person did not order alcohol, just a regular can of pepsi.",
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
  let endSceneActionEvents: Function[] = [
    async () => {
      const body = document.querySelector("body");
      body?.classList.add("pageTransition");
      await delay(1000);
      router.push("/dayBreak");
      await delay(500);
      body?.classList.remove("pageTransition");
    },
  ];

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
          backgroundImage: `url(${CheckBodyBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MessageBox
          messages={bodyMessages}
          actionNames={bodyActions}
          actionHrefs={bodyActionEvents}
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
