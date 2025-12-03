import { FiBell } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import img from "~/assets/image 1.png";

export default function Topbar() {
  return (
    <div
      className="
    hidden lg:flex
    fixed
    top-0
    left-[333px]
    w-[calc(100%-333px)]
    h-[82px]
    bg-white
    shadow
    flex
    items-center
    justify-end
    px-4 sm:px-6 lg:px-8
    rounded-b-[16px]
    z-50
    opacity-100
  "
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <FiBell
          size={24}
          className="text-gray-600 cursor-pointer bg-[#F0F9FF] rounded-full p-1 hover:text-gray-800"
        />
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={img} alt="Rana" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col text-right sm:text-left">
          <span className="font-semibold text-sm sm:text-base">
            Hossain Rana
          </span>
          <span className="text-gray-500 text-xs sm:text-sm">
            Rana@potentialai.com
          </span>
        </div>
        <IoMdArrowDropdown size={24} className="text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
}
