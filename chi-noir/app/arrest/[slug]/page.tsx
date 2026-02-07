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
      "I have told you many times. I am innocent. I did not kill Jacob or Viktor. I did not even know them.",
      "I was at home all night. I left that kind of lifestyle back in the past.",
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
      "I didn't do it. Jacob is a really old friend of mine. I would never hurt him.",
      "He used to come to our hospital, I would make sure he gets the best care possible.",
      "You got the wrong guy Detective. I am a doctor, not a killer. I have dedicated my life to saving people, not taking lives.",
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
      "Okay Detective, you got me. I killed Jacob. But you will never understand why.",
      "He took my husband away from me. He is dead because of him. He is dead because of his lies.",
      "I loved my husband, my dearest Viktor. I didn't want to hurt him. Now he is dead.",
      "I have nothing left to lose. I have lost everything because of Jacob. I was not going to let him get away with it.",
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
      "I did not kill Jacob. I did not even know him. I was his bouncer friend. I was there for him.",
      "Before you ask, no, I did not kill Viktor either. I was not even there when they were killed. I was at home all night.",
      "I am a good person. I have a good heart. I would never hurt anyone. I am not a killer.",
      "You made a big mistake detective.",
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
