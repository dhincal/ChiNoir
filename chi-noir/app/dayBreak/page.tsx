"use client";

import MessageBox from "@/components/MessageBox";
import BedroomBg from "@/public/BedroomBg.png";
import { useRouter } from "next/navigation";
import path from "path";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Scene1() {
  let sceneMessages: string[] = [
    "Sorry to botheryou at this hour again detective, but we have a new case that just came in.",
    "We think it might be related to the one you are currently investigating, so we need you to head to the crime scene immediately.",
    "It is at Lincoln Park, I will meet you there.",
  ];

  const router = useRouter();

  let sceneActions: string[] = ["Go To Scene"];

  let actionEvents: Function[] = [() => handleActionClick()];

  async function handleActionClick() {
    const body = document.querySelector("body");
    body?.classList.add("pageTransition");
    await delay(1000);
    router.push("/scene2");
    await delay(500);
    body?.classList.remove("pageTransition");
  }

  return (
    <div>
      <div
        className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative`}
        style={{
          backgroundImage: `url(${BedroomBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MessageBox
          messages={sceneMessages}
          actionNames={sceneActions}
          actionHrefs={actionEvents}
          onPhoneCall={true}
        />
      </div>
    </div>
  );
}
