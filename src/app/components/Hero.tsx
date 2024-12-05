import Image from "next/image";
import Link from "next/link";
import Iphone from "../../../public/image/iphone.png"
import { FaApple, FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
const Hero = () => {
  return (
    <div className="flex items-center px-10 justify-center">
      <div className="max-w-[1440px] flex gap-6 justify-center">
        {/* left side */}
        <div className="border-r-2 border-neutral-200 hidden md:block">
          <ul className="space-y-4">
            {[
              "Woman’s Fashion",
              "Men’s Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby’s & Toys",
              "Groceries & Pets",
              "Health & Beauty"
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-slate-800 leading-loose hover:underline cursor-pointer transition-all hover:text-blue-500 duration-150"
              >
                <span>{item}</span>
                {index < 2 && <IoIosArrowForward className="text-lg ml-2" />}
              </li>
            ))}
          </ul>
        </div>
        {/* right side */}
        <div className="bg-black flex items-center rounded-lg p-6 px-20">
          <div className="text-white flex flex-col justify-center sm:w-[180px] md:[300px] lg:[400px] space-y-5">
            <div className="flex items-center gap-2">
              <FaApple className="sm:text-2xl md:text-4xl" />
              <span className="sm:text-sm md:text-base font-semibold">
                iPhone 14 Series
              </span>
            </div>
            {/* Heading */}
            <h1 className="sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Up to 10% off Voucher
            </h1>
            <Link
              href={"#product"}
              className="underline underline-offset-4 hover:font-bold flex items-center gap-2"
            >
              Shop Now <FaArrowRight />
            </Link>
          </div>
          {/* Image */}
          <div className="ml-auto">
            <Image src={Iphone} alt="iphone" width={353} height={319}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
