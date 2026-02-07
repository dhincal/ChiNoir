import MessageBox from "@/components/MessageBox";
import LaSelleStationImg from "@/public/Scene1/LaSelleStation.png";

export default function Scene1() {
  let sceneMessages: string[] = [
    "Welcome to Laselle Stop, Detective. This is the scene of the crime.",
    "We have found out that the victim was a local bouncer named Jackob who works at Rex Lounge.",
    "He was found dead here under the staircase, with a gunshot wound to the chest.",
    "We only have time before the media arrives, so we need to gather as much evidence as possible.",
    "Let's start by examining the crime scene and collecting any clues we can find, let me know where would you like to investigate first.",
  ];

  return (
    <div
      className={`flex min-h-screen items-center justify-center font-sans sceneViginette`}
      style={{
        backgroundImage: `url(${LaSelleStationImg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MessageBox messages={sceneMessages} />
    </div>
  );
}
