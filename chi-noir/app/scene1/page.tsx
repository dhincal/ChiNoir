import MessageBox from "@/components/MessageBox";

export default function Scene1() {
  let sceneMessages: string[] = [
    "Good morning sir! Sorry to wake you up, but we have a situation downtown.",
    "A murder has been committed in Laselle Stop. Station wants you to investigate.",
    "Page me when you are on the way.",
  ];
  return (
    <div className="flex min-h-screen items-center justify-center font  -sans bg-black">
      <MessageBox messages={sceneMessages} />
    </div>
  );
}
