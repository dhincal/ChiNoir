import Image from "next/image";
import HeroImage from "@/public/heroImage.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-black">
      <div className="relative w-screen h-screen">
        <Image
          src={HeroImage}
          alt="Hero Image"
          className="rounded-lg shadow-lg"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-linear-to-b from-transparent from-20% to-45% to-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-primary h-full w-full flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Chi-Noir
          </h1>
          <p className="text-lg text-white">
            Your gateway to the world of noir mysteries.
          </p>
          <Link
            href="/scene1"
            className="mt-6 px-4 py-2 bg-white text-black rounded-xl hover:bg-red-900 transition"
          >
            Start Your Adventure
          </Link>
        </div>
      </div>
    </div>
  );
}
