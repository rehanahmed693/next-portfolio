import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="bg-slate-700 w-full sm:h-screen h-full ">
      <h1 className="sm:text-4xl text-2xl text-white font-semibold sm:mb-2 mb-3 p-3 text-center">
        My Projects
      </h1>
      <div className="parent group flex flex-wrap justify-center h-min w-100vh">
        <div className="child cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 m-[20px] h-[400px] sm:h-[450px] w-[300px] bg-slate-100 rounded-t-xl  border-3-amber-600 hover:">
          <Image
            className="h-[200px] sm:h-[250px] rounded-t-xl w-full"
            src="/images/banner.png"
            alt=""
            width={250}
            height={200}
          />
          <h2 className="text-2xl p-1 text-center font-semibold">
            Travel Website
          </h2>
          <p className="p-2 text-sm sm:text-base bg-white w-[95%] ml-2">
            This is a travel website with multiple pages and give my best to
            developed frontend website using next.js.
          </p>
          <button className="btn w-[80%] bg-blue-600 rounded-full text-white mt-2 ml-7 p-[4px] font-bold hover:text-[18px] ">
            <Link href="https://traveler-website-black.vercel.app/">
              Go Website
            </Link>
          </button>
        </div>

        <div className="child cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 m-[20px] h-[400px] sm:h-[450px] w-[300px] bg-slate-100 rounded-t-xl  border-3-amber-600 hover:">
          <Image
            className="h-[200px] sm:h-[250px] rounded-t-xl w-full"
            src="/images/figma.png"
            alt=""
            width={250}
            height={200}
          />
          <h2 className="text-2xl p-1 text-center font-semibold">
            Figma Clone
          </h2>
          <p className="p-2 text-sm sm:text-base bg-white w-[95%] ml-2">
            This is a clone website with multiple pages and give my best to
            developed frontend website using next.js.
          </p>
          <button className="btn w-[80%] bg-blue-600 rounded-full text-white mt-2 ml-7 p-[4px] font-bold hover:text-[18px] ">
            <Link href="https://figma-work-sable.vercel.app/">Go Website</Link>
          </button>
        </div>

        <div className="child cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 m-[20px] h-[400px] sm:h-[450px] w-[300px] bg-slate-100 rounded-t-xl  border-3-amber-600 hover:">
          <Image
            className="h-[200px] sm:h-[250px] rounded-t-xl w-full"
            src="/images/python.png"
            alt=""
            width={250}
            height={200}
          />
          <h2 className="text-2xl p-1 text-center font-semibold">
            Blog Website
          </h2>
          <p className="p-2 text-sm sm:text-base bg-white w-[95%] ml-2">
            This is a Blog website with multiple pages and give my best to
            developed frontend website using next.js
          </p>
          <button className="btn w-[80%] bg-blue-600 rounded-full text-white mt-2 ml-7 p-[4px] font-bold hover:text-[18px] ">
            <Link href="https://myblog-asignment4-5--orpin.vercel.app/">
              Go Website
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
