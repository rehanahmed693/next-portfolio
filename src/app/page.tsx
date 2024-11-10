import Image from "next/image";
import About from "./About/page";
import Contact from "./Contact/page";
import "./globals.css";
import Link from "next/link";
import Projects from "./Projects/page";

export default function Home() {
  return (
    <div>
      <div className="w-full sm:h-[90vh] h-full bg-slate-800 flex sm:flex-row flex-col">
        <div className="sm:w-[50%] sm:h-[90vh] w-full h-[300px] items-center bg-slate-700 justify-center rounded-r-full">
          <Image
            className="my-image sm:w-[300px] w-[200px] mx-auto sm:my-28 my-14 rounded-full"
            src="/images/profile-pic.jpg"
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div className="sm:mx-auto mx-5 sm:my-40 my-10 ">
          <p className="sm:text-4xl text-xl text-white font-semibold tracking-wider">
            Hi, Myself Is{" "}
            <span className="sm:text-4xl text-2xl text-slate-500 font-bold">
              Rehan Ahmed
            </span>
            <br></br>A Professional And Passionate<br></br>Frontend Web
            Developer
          </p>
          <div className="sm:my-10 mt-6">
            <Link
              href="/About"
              className="mx-auto sm:px-10 px-6 py-1 my-10 rounded-xl text-base sm:text-xl bg-slate-400 text-slate-800"
            >
              Learm More
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Contact />
      <Projects />
    </div>
  );
}
