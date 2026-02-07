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
import { useRouter } from "next/navigation";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Ending() {
  const router = useRouter();

  let sceneMessages: string[] = [
    "Okay Detective, we have gathered a lot of evidence and information about the case.",
    "With the evidence we have colllected, we chose four suspects to inspect.",
    "Let's inspect each of them and see if we can find any information that can help us connect the dots.",
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
            description="Regular at Rex Lounge, known for his heavy drinking and aggressive behavior. He has a history of bar fights and has been banned from several establishments in the past. He is currently unemployed and has no known source of income."
            occupancy="Unemployed"
            gunLicense={false}
            height="175 cm"
            weight="60 kg"
            alcoholLevel="High"
            salary="$0"
            married={false}
          />
          <div className="flex flex-row gap-x-4 mt-4">
            <button
              className="cursor-pointer mb-5 px-8 py-3 w-1/2 text-red-500 uppercase tracking-widest text-sm border border-red-500/40 rounded-md bg-black/40 backdrop-blur-md shadow-[0_0_8px_rgba(239,68,68,0.25)] transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_18px_rgba(239,68,68,0.7)] hover:text-red-500"
              onClick={async () => {
                const body = document.querySelector("body");
                body?.classList.add("pageTransition");
                await delay(1000);
                router.push("/arrest/john");
                await delay(500);
                body?.classList.remove("pageTransition");
              }}
            >
              Choose This Suspect
            </button>
            <button
              className="cursor-pointer mb-5 px-8 py-3 w-1/2 text-white uppercase tracking-widest text-sm border border-white/40 rounded-md bg-black/40 backdrop-blur-md shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 hover:border-white hover:shadow-[0_0_18px_rgba(255,255,255,0.7)] hover:text-white"
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
            <button className="cursor-pointer mb-5 px-8 py-3 w-1/2 text-red-500 uppercase tracking-widest text-sm border border-red-500/40 rounded-md bg-black/40 backdrop-blur-md shadow-[0_0_8px_rgba(239,68,68,0.25)] transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_18px_rgba(239,68,68,0.7)] hover:text-red-500">
              Choose This Suspect
            </button>
            <button
              className="cursor-pointer mb-5 px-8 py-3 w-1/2 text-white uppercase tracking-widest text-sm border border-white/40 rounded-md bg-black/40 backdrop-blur-md shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 hover:border-white hover:shadow-[0_0_18px_rgba(255,255,255,0.7)] hover:text-white"
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
            description="Wife of Viktor Bottom. She works as a marketing specialist at a local firm. She does not have a history of criminal records other than traffic tickets, and we did not stumble on any alcohol or drug usage in her blood. She does not have a gun license and does not own any firearms legally."
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
            <button className="cursor-pointer mb-5 px-8 py-3 w-1/2 text-red-500 uppercase tracking-widest text-sm border border-red-500/40 rounded-md bg-black/40 backdrop-blur-md shadow-[0_0_8px_rgba(239,68,68,0.25)] transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_18px_rgba(239,68,68,0.7)] hover:text-red-500">
              Choose This Suspect
            </button>
            <button
              className="cursor-pointer mb-5 px-8 py-3 w-1/2 text-white uppercase tracking-widest text-sm border border-white/40 rounded-md bg-black/40 backdrop-blur-md shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 hover:border-white hover:shadow-[0_0_18px_rgba(255,255,255,0.7)] hover:text-white"
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
            description="Tall and muscular, Alex works as a bouncer at Rex Lounge. He has a history of minor altercations but no serious criminal record. He has a gun license but does not own a firearm on the records. He is currently single and has no children."
            occupancy="Bouncer"
            gunLicense={true}
            height="190 cm"
            weight="100 kg"
            alcoholLevel="Low"
            salary="$20,000/yr"
            married={false}
          />
          <div className="flex flex-row gap-x-4 mt-4">
            <button className="cursor-pointer mb-5 px-8 py-3 w-1/2 text-red-500 uppercase tracking-widest text-sm border border-red-500/40 rounded-md bg-black/40 backdrop-blur-md shadow-[0_0_8px_rgba(239,68,68,0.25)] transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_18px_rgba(239,68,68,0.7)] hover:text-red-500">
              Choose This Suspect
            </button>
            <button
              className="cursor-pointer mb-5 px-8 py-3 w-1/2 text-white uppercase tracking-widest text-sm border border-white/40 rounded-md bg-black/40 backdrop-blur-md shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 hover:border-white hover:shadow-[0_0_18px_rgba(255,255,255,0.7)] hover:text-white"
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
