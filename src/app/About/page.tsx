import Image from "next/image";

export default function About() {
  return (
    <div className="w-full sm:h-screen h-full bg-slate-700 flex ">
      <div className="sm:w-[50%] w-[90%] sm:mx-10 mx-4 my-16">
        <h1 className="sm:text-4xl text-2xl text-white font-semibold sm:mb-12 mb-6">
          ABOUT{" "}
          <span className="sm:text-4xl text-2xl text-slate-500 font-bold">
            ME
          </span>
        </h1>
        <p className="text-white sm:text-2xl text-base shadow-2xl border-2 sm:p-6 p-3 sm:w-[85%] w-[100%]">
          Hello, this is Rehan Ahmed a passionate frontend developer. I create
          websites using simple html, css and javascript or typescript as well
          as key frame like react.js and next.js. If you want to reach my
          services regardings frontend development then you can contact me.
        </p>
        <div className="my-4">
          <p className="sm:text-3xl text-2xl text-white font-semibold">
            My Skills
          </p>
          <div className="flex sm:flex-row flex-col sm:gap-10 gap-4  my-4">
            <div>
              <p className="text-xl font-semibold">HTML</p>
              <div className="bg-white w-24 h-3 mt-3">
                <div className=" w-20 bg-blue-600 h-3"></div>
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold">CSS</p>
              <div className="bg-white w-28 h-3 mt-3">
                <div className=" w-20 bg-blue-600 h-3"></div>
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold">JAVASCRIPT</p>
              <div className="bg-white w-28 h-3 mt-3">
                <div className=" w-20 bg-blue-600 h-3"></div>
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold">NEXT.JS</p>
              <div className="bg-white w-28 h-3 mt-3">
                <div className=" w-20 bg-blue-600 h-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mx-auto sm:my-10 hidden sm:block">
        <Image src="/images/profile-pic.jpg" width={500} height={300} alt="" />
      </div>
    </div>
  );
}
