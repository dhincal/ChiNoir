"use client";

import SuspectsBg from "@/public/Ending/SuspectsBg.png";
import MessageBox from "@/components/MessageBox";

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
    () => alert("John Bummer is the culprit!"),
    () => alert("Zoe Smith is the culprit!"),
    () => alert("Rebecca Bottom is the culprit!"),
    () => alert("Alex James is the culprit!"),
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
        <MessageBox
          messages={sceneMessages}
          actionNames={sceneActions}
          actionHrefs={actionEvents}
        />
      </div>
    </div>
  );
}
