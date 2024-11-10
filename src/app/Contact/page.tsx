import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-slate-800 w-full h-screen flex items-center">
      <div className="w-[75%] h-[80%] rounded-lg sm:rounded-none bg-slate-400 flex mx-auto">
        <div className="w-[40%] h-[300px] hidden sm:block m-4 ">
          <Image
            src="/images/contact-img.jpg"
            width={300}
            height={5}
            alt=""
          />
        </div>
        <form action="" className="mt-5 mx-auto sm:mx-0">
          <h1 className="sm:text-4xl text-2xl mx-8 sm:mx-0 text-white font-semibold sm:mb-6 mb-2">
            CONTACT{" "}
            <span className="sm:text-4xl text-2xl text-slate-500 font-bold">
              ME
            </span>
          </h1>
          <div className="my-8 flex sm:flex-row flex-col sm:gap-8 gap-3">
            <input
              className="p-2 sm:text-lg text-sm outline-none rounded-2xl"
              type="text"
              placeholder="First Name"
            />
            <input
              className="p-2 sm:text-lg text-sm outline-none rounded-2xl"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <div className="my-8 flex sm:flex-row flex-col sm:gap-8 gap-3">
            <input
              className="p-2 sm:text-lg text-sm outline-none rounded-2xl"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-2 sm:text-lg text-sm outline-none rounded-2xl"
              type="text"
              placeholder="Contact No"
            />
          </div>
          <div className="">
            <textarea
              placeholder="Message"
              className="w-full p-2 outline-none sm:text-base text-sm h-[100px]  sm:h-[150px]"
            ></textarea>
          </div>

          <button className="mx-auto sm:px-10 px-5 py-1 mt-6 rounded-xl text-base  sm:text-xl bg-slate-800 text-white">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
