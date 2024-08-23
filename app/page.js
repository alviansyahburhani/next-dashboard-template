
import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen p-6">
      <div className="flex items-end h-20 p-4 bg-gradient-to-bl from-pink-100 via-purple-700 to-blue-200 rounded-lg shrink-0 md:h-52">
         <AcmeLogo className="w-full"/> 
      </div>
      <div className="flex flex-col gap-4 mt-4 grow md:flex-row">
        <div className="flex flex-col justify-center gap-6 px-6 py-10 rounded-lg bg-gradient-to-bl from-pink-100 via-purple-700 to-blue-200 md:w-2/5 md:px-20">
          <p className="text-xl text-white md:text-3xl md:leading-normal">
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-yellow-400">
              Next.js Learn Course
            </a>
            , brought to you by devnolife - laboratorium-if-unismuh.
          </p>
          <Link
            href="/login"
            className="flex items-center self-start gap-5 px-6 py-3 text-sm font-medium text-black transition-colors bg-white rounded-lg hover:bg-yellow-400 md:text-base"
          >
            <span>Log in</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          {/* Gambar untuk Desktop */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          {/* Gambar untuk Mobile */}
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
      <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
    </main>
  );
}
