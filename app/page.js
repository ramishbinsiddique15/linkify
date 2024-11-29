import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
const Poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex gap-4 flex-col items-center justify-center">
          <p className={`text-3xl font-bold ${Poppins.className}`}>
            The best URL Shortener in the market
          </p>
          <p className="px-10">
            We're the most straight forward URL Shortener in the world. Most of
            the shorteners will track you or ask you to give your details for
            login. We understand your needs and hence we've created this URL
            shortener
          </p>
          <div className="flex gap-3 w-full px-10 text-white">
            <Link href="/shorten">
              <button className="bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold">
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex justify-start relative">
          <Image
            className="mix-blend-darken"
            src={"/vector.jpg"}
            fill="true"
            alt="vector"
          />
        </div>
      </section>
    </main>
  );
}
