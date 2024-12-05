import { Poppins } from "next/font/google";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});
const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col">
      {/* Top Heading */}
      <div className="w-full bg-black py-2 px-8 flex items-center justify-between text-white">
        <div className="flex-1 text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a
            href="#"
            className={`${PoppinsFont.className} hover:text-slate-300 underline font-semibold text-[14px] tracking-[1px] px-2`}
          >
            ShopNow
          </a>
        </div>
        <div className="flex items-center gap-[2px]">
          <div className="text-white text-sm font-normal leading-[21px]">
            English
          </div>
          <RiArrowDropDownLine className="text-white text-3xl" />
        </div>
      </div>
      {/* Navbar Main */}
      <div className="flex items-center justify-between px-20 py-4">
        <h1 className="text-[24px] font-bold px-16">Exclusive</h1>
        <nav className="space-x-8 md:flex items-center hidden">
          <a
            href="#"
            className="text-[16px] text-slate-600 hover:text-black underline"
          >
            Home
          </a>
          <a href="#" className="text-[16px] text-slate-600 hover:text-black">
            Contact
          </a>
          <a href="#" className="text-[16px] text-slate-600 hover:text-black">
            About
          </a>
          <a href="#" className="text-[16px] text-slate-600 hover:text-black">
            Sign Up
          </a>
        </nav>
        {/* Seacrh icon */}
        <div className="flex items-center space-x-6">
          <div className="lg:flex items-center hidden bg-[#F5F5F5] rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none bg-[#F5F5F5] text-sm"
            />
            <CiSearch size={16}/>
          </div>
          <CiHeart size={16}/>
          <IoCartOutline size={16}/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
