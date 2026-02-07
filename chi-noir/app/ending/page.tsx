"use client";

import SuspectsBg from "@/public/Ending/SuspectsBg.png";
import MessageBox from "@/components/MessageBox";
import AlexJamesFull from "@/public/Ending/Characters/AlexJamesFull.png";
import AlexJamesUpper from "@/public/Ending/Characters/AlexJamesUpper.png";
import JohnBummerFull from "@/public/Ending/Characters/JohnBummerFull.png";
import JohnBummerUpper from "@/public/Ending/Characters/JohnBummerUpper.png";
import RebeccaBottomFull from "@/public/Ending/Characters/RebeccaBottomFull.png";
import RebeccaBottomUpper from "@/public/Ending/Characters/RebeccaBottomUpper.png";
import ZoeSmithFull from "@/public/Ending/Characters/ZoeSmithFull.png";
import ZoeSmithUpper from "@/public/Ending/Characters/ZoeSmithUpper.png";

import Image from "next/image";
import CharInfoBox from "@/components/CharInfoBox";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Ending() {
  let sceneMessages: string[] = [
    "Okay Detective, we have gathered enough evidence and interrogated all the suspects. It's time to piece everything together and solve the case.",
    "With the evidence we have colllected, we chose four suspects to inspect.",
    "Let's inspect each of them and see if we can find any inconsistencies in their stories or any evidence that points to the culprit.",
  ];
  let sceneActions: string[] = [
    "John Bummer",
    "Zoe Smith",
    "Rebecca Bottom",
    "Alex James",
  ];
  let actionEvents: Function[] = [
    () => {
      delay(500).then(() =>
        document
          .getElementById("JohnBummerScene")
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    },

    () => {
      delay(500).then(() =>
        document
          .getElementById("ZoeSmithScene")
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    },
    () => {
      delay(500).then(() =>
        document
          .getElementById("RebeccaBottomScene")
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    },
    () => {
      delay(500).then(() =>
        document
          .getElementById("AlexJamesScene")
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    },
  ];
  return (
    <div>
      <div
        id="SuspectsScene"
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative`}
        style={{
          backgroundImage: `url(${SuspectsBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute translate-y-36 flex flex-row items-center justify-between h-full w-full px-20 py-10">
          <Image
            src={JohnBummerFull}
            alt="John Bummer Full"
            className="w-2/12"
          />
          <Image
            src={RebeccaBottomFull}
            alt="Zoe Smith Full"
            className="w-2/12"
          />
          <Image
            src={RebeccaBottomFull}
            alt="Rebecca Bottom Full"
            className="w-2/12"
          />
          <Image src={AlexJamesFull} alt="Alex James Full" className="w-2/12" />
        </div>
        <MessageBox
          messages={sceneMessages}
          actionNames={sceneActions}
          actionHrefs={actionEvents}
        />
      </div>
      <div
        id="JohnBummerScene"
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative`}
        style={{
          backgroundImage: `url(${SuspectsBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute translate-y-36 flex flex-row items-center justify-between h-full w-full px-20 py-10">
          <Image
            src={JohnBummerUpper}
            alt="John Bummer Upper"
            className="w-6/12"
          />
        </div>
        <div className="right-1/6 absolute flex flex-col items-center justify-center h-full w-1/3 px-20 py-10">
          <CharInfoBox
            className="w-full"
            name="John Bummer"
            description="Description of John Bummer"
            occupancy="Unemployed"
            gunLicense={false}
            height="175 cm"
            weight="100 kg"
            alcoholLevel="High"
            salary="$0"
            married={false}
          />
          <div className="flex flex-row gap-x-4 mt-4">
            <button className="bg-red-900 text-white px-4 py-2 rounded-lg cursor-pointer hover:text-red-900 hover:bg-white transition duration-300">
              Choose This Suspect
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer hover:text-black hover:bg-white transition duration-300"
              onClick={() => {
                delay(500).then(() =>
                  document
                    .getElementById("SuspectsScene")
                    ?.scrollIntoView({ behavior: "smooth" }),
                );
              }}
            >
              Back to Suspects
            </button>
          </div>
        </div>
      </div>
      <div
        id="ZoeSmithScene"
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative`}
        style={{
          backgroundImage: `url(${SuspectsBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute translate-y-36 flex flex-row items-center justify-between h-full w-full px-20 py-10">
          <Image src={ZoeSmithUpper} alt="Zoe Smith Upper" className="w-6/12" />
        </div>
        <div className="right-1/6 absolute flex flex-col items-center justify-center h-full w-1/3 px-20 py-10">
          <CharInfoBox
            className="w-full"
            name="Zoe Smith"
            description="Description of Zoe Smith"
            occupancy="Nurse"
            gunLicense={true}
            height="165 cm"
            weight="60 kg"
            alcoholLevel="None"
            salary="$25,000/yr"
            pregnant={true}
            married={true}
          />
          <div className="flex flex-row gap-x-4 mt-4">
            <button className="bg-red-900 text-white px-4 py-2 rounded-lg cursor-pointer hover:text-red-900 hover:bg-white transition duration-300">
              Choose This Suspect
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer hover:text-black hover:bg-white transition duration-300"
              onClick={() => {
                delay(500).then(() =>
                  document
                    .getElementById("SuspectsScene")
                    ?.scrollIntoView({ behavior: "smooth" }),
                );
              }}
            >
              Back to Suspects
            </button>
          </div>
        </div>
      </div>
      <div
        id="RebeccaBottomScene"
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative`}
        style={{
          backgroundImage: `url(${SuspectsBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute translate-y-36 flex flex-row items-center justify-between h-full w-full px-20 py-10">
          <Image
            src={RebeccaBottomUpper}
            alt="Rebecca Bottom Upper"
            className="w-6/12"
          />
        </div>
        <div className="right-1/6 absolute flex flex-col items-center justify-center h-full w-1/3 px-20 py-10">
          <CharInfoBox
            className="w-full"
            name="Rebecca Bottom"
            description="Description of Rebecca Bottom"
            occupancy="Marketing Specialist"
            gunLicense={false}
            height="160 cm"
            weight="50 kg"
            alcoholLevel="None"
            salary="$50,000/yr"
            pregnant={false}
            married={true}
          />
          <div className="flex flex-row gap-x-4 mt-4">
            <button className="bg-red-900 text-white px-4 py-2 rounded-lg cursor-pointer hover:text-red-900 hover:bg-white transition duration-300">
              Choose This Suspect
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer hover:text-black hover:bg-white transition duration-300"
              onClick={() => {
                delay(500).then(() =>
                  document
                    .getElementById("SuspectsScene")
                    ?.scrollIntoView({ behavior: "smooth" }),
                );
              }}
            >
              Back to Suspects
            </button>
          </div>
        </div>
      </div>
      <div
        id="AlexJamesScene"
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative`}
        style={{
          backgroundImage: `url(${SuspectsBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute translate-y-36 flex flex-row items-center justify-between h-full w-full px-20 py-10">
          <Image
            src={AlexJamesUpper}
            alt="Alex James Upper"
            className="w-6/12"
          />
        </div>
        <div className="right-1/6 absolute flex flex-col items-center justify-center h-full w-1/3 px-20 py-10">
          <CharInfoBox
            className="w-full"
            name="Alex James"
            description="Description of Alex James"
            occupancy="Bouncer at Rex Lounge"
            gunLicense={true}
            height="190 cm"
            weight="100 kg"
            alcoholLevel="Low"
            salary="$20,000/yr"
            married={true}
          />
          <div className="flex flex-row gap-x-4 mt-4">
            <button className="bg-red-900 text-white px-4 py-2 rounded-lg cursor-pointer hover:text-red-900 hover:bg-white transition duration-300">
              Choose This Suspect
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer hover:text-black hover:bg-white transition duration-300"
              onClick={() => {
                delay(500).then(() =>
                  document
                    .getElementById("SuspectsScene")
                    ?.scrollIntoView({ behavior: "smooth" }),
                );
              }}
            >
              Back to Suspects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
