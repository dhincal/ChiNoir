"use client";

import MessageBox from "@/components/MessageBox";
import OutsideHouse from "@/public/Scene2/OutsideHouse.png";
import CheckBathroomBg from "@/public/Scene2/CheckBathroomBg.png";
import CheckKitchenBg from "@/public/Scene2/CheckKitchenBg.png";
import CheckBodyBg from "@/public/Scene2/CheckBodyBg.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Scene2() {
  const router = useRouter();

  const [checkedBody, setCheckedBody] = useState(false);
  const [checkedBathroom, setCheckedBathroom] = useState(false);
  const [checkedKitchen, setCheckedKitchen] = useState(false);
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
      setCheckedBathroom(true);
      setNumberOfActionsCompleted(numberOfActionsCompleted + 1);
      delay(500).then(() =>
        document
          .getElementById("BathroomCheck")
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    },
    () => {
      setCheckedKitchen(true);
      setNumberOfActionsCompleted(numberOfActionsCompleted + 1);
      delay(500).then(() =>
        document
          .getElementById("KitchenCheck")
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    },
  ];

  let sceneMessages: string[] = [
    "Welcome back, Detective. This house is where Viktor Bottom has been killed.",
    "We need to investigate the crime scene further to gather more evidence and find out who the culprit is.",
    "Let's start by examining the crime scene and collecting any clues we can find, let me know where would you like to investigate.",
  ];

  let sceneActions: string[] = [
    "Check Body",
    "Check Bathroom",
    "Check Kitchen",
  ];

  let bodyMessages: string[] = [
    "Upon examining the body, we can see that  was shot at close range, and there are traces of gunpowder on his hands.",
    "This suggests that he might have been involved in a struggle with the assailant, or he might have been the one who fired the gun.",
    "We also found a torn piece of fabric in his hand, which could be a crucial piece of evidence.",
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
          .getElementById("HouseScene")
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    },
  ];

  let bathroomMessages: string[] = [
    "This is how the logs are looking like, we can see that there was a gunshot sound detected at 2:15 AM, and there were some unusual activities around that time.",
    "We can also see that there were some people who were around the area at that time, but we need to investigate further to find out who they are.",
  ];
  let bathroomActions: string[] = ["Back to Scene"];
  let bathroomActionEvents: Function[] = [
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
          .getElementById("HouseScene")
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    },
  ];

  let kitchenMessages: string[] = [
    "The kitchen surveillance footage shows a suspicious individual wearing a hoodie and sunglasses, who was seen near the crime scene around the time of the murder.",
    "We need to analyze this footage carefully to identify the suspect and gather more evidence.",
  ];
  let kitchenActions: string[] = ["Back to Scene"];
  let kitchenActionEvents: Function[] = [
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
          .getElementById("HouseScene")
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
      router.push("/ending");
      await delay(500);
      body?.classList.remove("pageTransition");
    },
  ];

  return (
    <div>
      <div
        id="HouseScene"
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative ${endScene ? "hidden" : ""}`}
        style={{
          backgroundImage: `url(${OutsideHouse.src})`,
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
        id="BathroomCheck"
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative ${checkedBathroom ? "" : "hidden"}`}
        style={{
          backgroundImage: `url(${CheckBathroomBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MessageBox
          messages={bathroomMessages}
          actionNames={bathroomActions}
          actionHrefs={bathroomActionEvents}
        />
      </div>
      <div
        id="KitchenCheck"
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative ${checkedKitchen ? "" : "hidden"}`}
        style={{
          backgroundImage: `url(${CheckKitchenBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MessageBox
          messages={kitchenMessages}
          actionNames={kitchenActions}
          actionHrefs={kitchenActionEvents}
        />
      </div>
      <div
        id="EndingScene"
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative ${endScene ? "" : "hidden"}`}
        style={{
          backgroundImage: `url(${OutsideHouse.src})`,
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
