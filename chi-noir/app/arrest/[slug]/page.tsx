"use client";

import JohnBummerArrest from "@/public/Ending/Arrest/JohnBummerArrest.png";
import JohnBummerUpper from "@/public/Ending/Characters/JohnBummerUpper.png";
import ZoeSmithArrest from "@/public/Ending/Arrest/ZoeSmithArrest.png";
import ZoeSmithUpper from "@/public/Ending/Characters/ZoeSmithUpper.png";
import RebeccaArrest from "@/public/Ending/Arrest/RebeccaArrest.png";
import RebeccaUpper from "@/public/Ending/Characters/RebeccaBottomUpper.png";
import AlexJamesArrest from "@/public/Ending/Arrest/AlexJamesArrest.png";
import AlexJamesUpper from "@/public/Ending/Characters/AlexJamesUpper.png";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import MessageBox from "@/components/MessageBox";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Arrest() {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;

  let arrestMessages: string[] = [];
  let arrestImage = null;
  let sceneActions: string[] = ["Go Home"];
  let actionEvents: Function[] = [
    async () => {
      const body = document.querySelector("body");
      body?.classList.add("pageTransition");
      await delay(1000);
      router.push("/");
      await delay(500);
      body?.classList.remove("pageTransition");
    },
  ];

  if (slug === "john") {
    arrestMessages = [
      "I have told you many times. I am innocent. I did not kill Jackob. I did not even know him.",
      "I was at home all night. I have an alibi. You can check with my neighbors. They will tell you that I was at home.",
      "But it is too late isn't it? See you on the other side, Detective.",
    ];
    arrestImage = JohnBummerArrest;

    return (
      <div>
        <div
          id="ArrestScene"
          className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative`}
          style={{
            backgroundImage: `url(${JohnBummerArrest.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <MessageBox
            messages={arrestMessages}
            actionNames={sceneActions}
            actionHrefs={actionEvents}
            customImage={JohnBummerUpper.src}
          />
        </div>
      </div>
    );
  } else if (slug === "zoe") {
    arrestMessages = [
      "I have nothing to say to you. I am innocent. I did not kill Jackob. He only used to come by our hospital.",
      "I was at the bar all night. I have an alibi. You can check with the bartender. He will tell you that I was at the bar.",
      "But it is too late isn't it? See you on the other side, Detective.",
    ];
    arrestImage = ZoeSmithArrest;
    return (
      <div>
        <div
          id="ArrestScene"
          className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative`}
          style={{
            backgroundImage: `url(${ZoeSmithArrest.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <MessageBox
            messages={arrestMessages}
            actionNames={sceneActions}
            actionHrefs={actionEvents}
            customImage={ZoeSmithUpper.src}
          />
        </div>
      </div>
    );
  } else if (slug === "rebecca") {
    arrestMessages = [
      "Okay Detective, you got me. I killed Jackob. But you will never understand why. You will never understand what he did to me. He deserved it. He deserved everything that is coming to him.",
      "He has lied to me, to his own wife, I have lived my whole life for a lie.",
    ];

    return (
      <div>
        <div
          id="ArrestScene"
          className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative`}
          style={{
            backgroundImage: `url(${RebeccaArrest.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <MessageBox
            messages={arrestMessages}
            actionNames={sceneActions}
            actionHrefs={actionEvents}
            customImage={RebeccaUpper.src}
          />
        </div>
      </div>
    );
  } else if (slug === "alex") {
    arrestMessages = [
      "I didn't mean to do it. It was an accident. Jackob was going to ruin everything. I had to stop him.",
      "I was at the office all night. You can check with my assistant. She will tell you that I was working late.",
      "But it is too late isn't it? See you on the other side, Detective.",
    ];
    arrestImage = AlexJamesArrest;

    return (
      <div>
        <div
          id="ArrestScene"
          className={`flex min-h-screen items-center justify-center font-sans sceneViginette relative`}
          style={{
            backgroundImage: `url(${AlexJamesArrest.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <MessageBox
            messages={arrestMessages}
            actionNames={sceneActions}
            actionHrefs={actionEvents}
            customImage={AlexJamesUpper.src}
          />
        </div>
      </div>
    );
  }
}
