import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-20"
    >
      {/* Left Content */}
      <div className="flex flex-col space-y-6 md:space-y-14 max-w-xl py-4 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          Kelola Proyek & {" "} 
          <br className="hidden md:block" />
          Tim Lebih Mudah{" "}
          <br className="hidden md:block" />
          dalam Satu Platform
        </h1>

        <p className="text-gray-700 text-lg md:text-2xl">
          Kolaborasi tanpa batas, integrasi cerdas, dan produktivitas meningkat
          3x lipat.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 ">
          <button className="px-6 md:px-10 py- bg-blue-700 hover:bg-blue-800 text-white rounded-full font-medium text-sm md:text-lg transition">
            Coba Gratis
          </button>
          <button className="px-6 md:px-10 py-3 border rounded-full font-medium text-sm md:text-lg hover:bg-gray-800 hover:text-white transition">
            Lihat Demo
          </button>
        </div>
      </div>

      {/* Right Content (Card Preview) */}
      <div className="w-full md:w-1/2 h-full bg-blue-50 rounded-3xl p-6 md:p-10 shadow-xl hover:shadow-2xl transition">
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-md">
          {/* Badge */}
          <span className="inline-block mb-4 rounded-lg bg-blue-700 px-4 py-2 text-xs sm:text-sm md:text-sm font-medium text-white">
            Content
          </span>

          {/* Image Preview */}
          <div className="relative w-full h-28 md:h-36 lg:h-48 bg-gray-100 rounded-xl overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1705028011814-f4df6ad7ecca?q=80&w=1632&auto=format&fit=crop"
              alt="Preview of project dashboard"
              fill
              className="object-cover"
            />
          </div>

          {/* Title + Description */}
          <div className="mt-4 space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              Update support documentation
            </h3>
            <p className="text-sm md:text-base text-gray-500">
              Create content for Peceland App
            </p>
          </div>

          {/* Date */}
          <span className="inline-block mt-3 rounded-md border px-3 py-1 text-xs md:text-sm font-medium text-gray-600">
            Aug 16, 2025
          </span>

          {/* Footer (avatars + progress) */}
          <div className="mt-4 flex items-center justify-between">
            {/* Avatars */}
            <div className="flex -space-x-2">
              {[1, 2, 3].map((id) => (
                <Image
                  key={id}
                  src={`https://i.pravatar.cc/40?img=${id}`}
                  alt={`User avatar ${id}`}
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full border-2 border-white"
                />
              ))}
            </div>

            {/* Progress */}
            <div className="flex items-center gap-2 text-gray-700 text-sm font-semibold">
              <FaRegCircleCheck size={18} />
              <span>0/8</span>
            </div>
          </div>

          {/* Optional Progress Bar
          <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full w-1/4"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
  