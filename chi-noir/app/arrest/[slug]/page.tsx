"use client";

import JohnBummerArrest from "@/public/Ending/Arrest/JohnBummerArrest.png";
import JohnBummerUpper from "@/public/Ending/Characters/JohnBummerUpper.png";
import ZoeSmithArrest from "@/public/Ending/Arrest/ZoeSmithArrest.png";

import { useParams } from "next/navigation";
import Image from "next/image";
import MessageBox from "@/components/MessageBox";

export default function Arrest() {
  const params = useParams();
  const { slug } = params;

  let arrestMessages: string[] = [];
  let arrestImage = null;
  let sceneActions: string[] = ["Go Home"];
  let actionEvents: Function[] = [];

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
  }
}
