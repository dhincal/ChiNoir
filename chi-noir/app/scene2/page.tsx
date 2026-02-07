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
    "Welcome back, Detective. This is the house of the victim, Jackob Bottom. He was found murdered here this morning.",
    "There is no sign of forced entry, which suggests that the perpetrator might have been someone he knows, or someone who has a key to the house.",
    "Feds think that this is a double homicide case, so we need to investigate the house quickly and find the perpetrator before they take the case from us. Again...",
    "Let's start by examining the crime scene and collecting any clues we can find, let me know where would you like to investigate.",
  ];

  let sceneActions: string[] = [
    "Check Body",
    "Check Bathroom",
    "Check Kitchen",
  ];

  let bodyMessages: string[] = [
    "After looking at the body we can see that Jackob has died by hitting his head really hard on the nightstand, which caused a severe brain hemorrhage.",
    "I am pretty sure that he is the man who was in the photograph we found in the previous crime scene, the ginger man.",
    "There are also some bruises on his arms and legs, which suggests that he might have been involved in a struggle with the assailant.",
    "We found his diary in his room, and it seems like he has a relationship with the previous victim.",
    "He is married to Rebecca Bottom, can this be a love triangle gone wrong?",
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
    "Bathroom is pretty clean, there is no sign of struggle or any other things that bats my eye.",
    "But we did found a pregnancy test in the trash can, and it is positive.",
    "I am not sure if we should trust the results, since it is a really cheap one, but it might still be useful information.",
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
    "In the kitchen, we can see harsh signs of struggle, there are broken dishes and overturned furniture.",
    "There is no signs of any blood here, which suggests that the struggle might have happened in another room, and the perpetrator just threw the dishes to make it look like there was a struggle in the kitchen.",
    "We also found a really nice bottle of Scotch whiskey on the counter, and it is half empty, seems like the victim was drinking before the murder.",
    "Next to the Scotch Bottle we found a Pepsi Can, with a hint of lipstick on it. No one would say no to this fine bottle of Scotch.",
    "Unless they want to stay away from alcohol...",
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
    "I believe we gathered enough intel to point some fingers.",
    "Let's go to the station, and inspect the suspects we have gathered evidence against.",
    "It's time to finish this case once and for all.",
  ];
  let endSceneActions: string[] = ["Go to Station"];
  let endSceneActionEvents: Function[] = [
    async () => {
      const body = document.querySelector("body");
      body?.classList.add("pageTransition");
      await delay(1000);
      router.push("/ending");
      await delay(1000);
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
