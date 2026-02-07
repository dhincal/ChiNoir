"use client";

import Image from "next/image";
import HeroImage from "@/public/heroImage.jpg";
import HeroPic from "@/public/HeroPic.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="relative w-screen h-screen">
        <Image
          src={HeroPic}
          alt="Hero Image"
          className="border-4 border-black"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-linear-to-b from-black from-10% via-50% via-transparent to-95% to-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-primary h-full w-full flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold text-white mb-4 heroText">
            Welcome to Chi-Noir
          </h1>
          <p className="text-lg text-white">
            Are you ready to solve the mystery and uncover the truth?
          </p>
          <Link
            onClick={async (e) => {
              e.preventDefault();
              const body = document.querySelector("body");
              body?.classList.add("pageTransition");
              await delay(1000);
              router.push("/intro");
              await delay(500);
              body?.classList.remove("pageTransition");
            }}
            href="/intro"
            className="mt-5 mb-5 px-6 py-3 w-64 text-white uppercase tracking-widest text-sm border border-white/40 rounded-md bg-black/40 backdrop-blur-md shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 hover:border-white hover:shadow-[0_0_18px_rgba(255,255,255,0.7)] hover:text-white"
          >
            Start Your Adventure
          </Link>
          <Link
            href="/how-to-play"
            className="mb-5 px-8 py-3 w-64 text-white uppercase tracking-widest text-sm border border-white/40 rounded-md bg-black/40 backdrop-blur-md shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 hover:border-white hover:shadow-[0_0_18px_rgba(255,255,255,0.7)] hover:text-white"
          >
            How To Play
          </Link>
          <Link
            href="/credits"
            className="mb-5 px-8 py-3 w-64 text-white uppercase tracking-widest text-sm border border-white/40 rounded-md bg-black/40 backdrop-blur-md shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 hover:border-white hover:shadow-[0_0_18px_rgba(255,255,255,0.7)] hover:text-white"
          >
            Credits
          </Link>
        </div>
      </div>
    </div>
  );
}
