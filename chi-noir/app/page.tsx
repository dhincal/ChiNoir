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
    <div className="flex min-h-screen items-center justify-center dark:bg-black">
      <div className="relative w-screen h-screen">
        <Image
          src={HeroPic}
          alt="Hero Image"
          className="rounded-lg shadow-lg"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-linear-to-b from-transparent from-20% to-30% to-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-primary h-full w-full flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold text-white mb-4">
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
            className="mt-6 px-4 py-2 bg-white text-black rounded-xl hover:bg-red-900 transition"
          >
            Start Your Adventure
          </Link>
          <Link
            href="/how-to-play"
            className="mt-6 px-4 py-2 bg-white text-black rounded-xl hover:bg-red-900 transition"
          >
            How To Play
          </Link>
          <Link
            href="/credits"
            className="mt-6 px-4 py-2 bg-white text-black rounded-xl hover:bg-red-900 transition"
          >
            Credits
          </Link>
        </div>
      </div>
    </div>
  );
}
