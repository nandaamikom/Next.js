import { AiOutlineAppstore } from "react-icons/ai";
import { BsViewList, BsGear } from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";
import { TbLocation } from "react-icons/tb";
import { PiFolderPlus } from "react-icons/pi";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

export default function PlatformPreview() {
  return (
    <section id="platform" className="px-6 md:px-20 py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
        Platform yang Dirancang untuk Tim Modern
      </h2>
      <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 text-center">
        Lihat bagaimana ProductivityPro mengintegrasikan semua kebutuhan tim Anda dalam satu interface.
      </p>

      <div className="flex flex-col md:flex-row bg-gray-100 rounded-2xl shadow-xl overflow-hidden">
        {/* Sidebar */}
        <div className="flex flex-col items-center bg-gray-50 w-20 py-6 space-y-6">
          <Image src="/mircrosoft.svg" alt="logo" width={30} height={30} />
          <AiOutlineAppstore size={28} />
          <BsViewList size={28} />
          <GiOpenBook className="bg-blue-600 text-white rounded-md p-1" size={28} />
          <BsGear size={28} />
          <TbLocation size={28} />
          <PiFolderPlus size={28} />
        </div>

        {/* Main preview */}
        <div className="flex-1 p-6">
          <div className="flex justify-center relative mb-6">
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full md:w-1/2 bg-gray-100 px-4 py-2 rounded-md text-gray-600"
            />
            <CiSearch className="absolute right-4 top-2.5 text-gray-500" size={20} />
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">
            <p>📊 Contoh Task Management Board (bisa diganti dengan komponen asli)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
