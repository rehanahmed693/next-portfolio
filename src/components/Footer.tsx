import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <div>
      <footer className="flex-row  sm:w-[100%] sm:h-60 bg-slate-800 sm:flex sm:justify-between text-white ">
        <div className="leftFooter sm:my-10 mx-2">
          <h2 className="text-xl sm:text-2xl">
            Rehan<span className="font-bold text-gray-400">Developer</span>
          </h2>
          <ul className="flex gap-3 sm:gap-6 mt-2 sm:mt-6 font-medium text-sm  sm:text-xl sm:font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            |
            <li>
              <Link href="">About</Link>
            </li>
            |
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>

          <p className="mt-4 font-thin text-sm  sm:text-base ">
            copyright o 2024 <strong>RehanDeveloper</strong> All rights reserved
          </p>
        </div>

        <div className="footerCenter mt-10 mx-2">
          <div className="flex gap-2 text-xs sm:text-base mb-2  sm:mb-3">
            <p>Address:</p>
            <p>
              Karachi,<strong>Sindh</strong>
            </p>
          </div>

          <div className="flex gap-2 text-xs sm:text-base mb-2  sm:mb-3">
            <p>Mobile:</p>
            <p>0322-2313171</p>
          </div>

          <div className="flex gap-2 text-xs sm:text-base mb-2  sm:mb-3">
            <p>WhataApp:</p>
            <p>0348-2512752</p>
          </div>

          <div className=" flex gap-2 text-xs sm:text-base mb-2  sm:mb-3">
            <p>Email:</p>
            <p>rehanaftab42@gmail.com</p>
          </div>
        </div>

        <div className="footer-right w-[350px] mt-8 mx-2 ">
          <h2 className="text-base font-bold sm:text-2xl sm:pb-4">
            Social Media
          </h2>

          <div className="flex gap-4 text-xl sm:text-3xl mt-5">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-instagram"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}
