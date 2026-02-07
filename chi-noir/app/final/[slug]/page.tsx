"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import SuccessImage from "@/public/Ending/SuccessBg.png";
import FailImage from "@/public/Ending/FailBg.png";
import Link from "next/link";
import ActionButton from "@/components/ActionButton";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Final() {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;

  if (slug === "success") {
    return (
      <div>
        <div
          id="ArrestScene"
          className={`flex min-h-screen items-center justify-center font-sans  relative`}
          style={{
            backgroundImage: `url(${SuccessImage.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <ActionButton
            label="Go Home"
            className="mt-55"
            onClick={async () => {
              const body = document.querySelector("body");
              body?.classList.add("pageTransition");
              await delay(1000);
              router.push(`/`);
              await delay(500);
              body?.classList.remove("pageTransition");
            }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div
          id="ArrestScene"
          className={`flex min-h-screen items-center justify-center font-sans relative`}
          style={{
            backgroundImage: `url(${FailImage.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <ActionButton
            label="Retry"
            className="mt-55"
            onClick={async () => {
              const body = document.querySelector("body");
              body?.classList.add("pageTransition");
              await delay(1000);
              router.push(`/`);
              await delay(500);
              body?.classList.remove("pageTransition");
            }}
          />
        </div>
      </div>
    );
  }
}
