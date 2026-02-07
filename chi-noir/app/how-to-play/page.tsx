"use client";

import { FILE } from "dns/promises";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function HowToPlay() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="relative max-w-2xl w-full bg-[#e8dcc2] text-zinc-900 p-10 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.7)] mx-auto mt-20">
      <audio ref={audioRef} src="/Music/FolderNoise.mp3" autoPlay />
      <div className="absolute -top-6 left-8 bg-[#d6c7a5] px-6 py-2 text-sm tracking-widest shadow-md">
        CASE FILE #001
      </div>
      <div className="absolute top-8 right-8 rotate-12 border-2 border-red-800 text-red-800 px-4 py-1 text-xs tracking-widest">
        CONFIDENTIAL
      </div>
      <h1 className="text-3xl tracking-widest mb-6">CASE BRIEFING</h1>

      <div className="space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="font-bold tracking-wider">CLUES ARE IMPORTANT</h2>
          <p>
            Listen carefully to every information. Truth often hides between
            words.
          </p>
        </div>

        <div>
          <h2 className="font-bold tracking-wider">DECISIONS</h2>
          <p>
            You will not have much time, choose where you want to focus wisely.
          </p>
        </div>

        <div>
          <h2 className="font-bold tracking-wider">CONSEQUENCES</h2>
          <p>Accuse the wrong suspect… and the killer walks free.</p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link
          onClick={async (e) => {
            e.preventDefault();
            const body = document.querySelector("body");
            body?.classList.add("pageTransition");
            await delay(1000);
            router.push("/");
            await delay(500);
            body?.classList.remove("pageTransition");
          }}
          href="/"
          className="px-8 py-3 bg-zinc-900 text-white tracking-widest hover:bg-black transition cursor-pointer rounded-md shadow-[0_0_8px_rgba(0,0,0,0.25)] hover:shadow-[0_0_18px_rgba(0,0,0,0.7)]"
        >
          I AM READY!
        </Link>
      </div>
    </div>
  );
}
