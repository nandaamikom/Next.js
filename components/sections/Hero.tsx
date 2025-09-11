import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-20 gap-12"
    >
      {/* Left Content */}
      <div className="flex flex-col space-y-6 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-normal">
          <span>Kelola Proyek</span> <br />
          <span>& Tim Lebih</span> <br />
          <span>Mudah dalam</span> <br />
          <span>Satu Platform</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-2xl">
          Kolaborasi tanpa batas, integrasi cerdas, dan produktivitas meningkat
          3x lipat.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 md:px-10 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-medium text-lg">
            Coba Gratis
          </button>
          <button className="px-6 md:px-10 py-3 border rounded-full font-medium text-lg hover:bg-gray-800 hover:text-white">
            Lihat Demo
          </button>
        </div>
      </div>

      {/* Right Content (Card Preview) */}
      <div className="w-full md:w-1/2 bg-blue-50 rounded-3xl p-6 md:p-10 shadow-xl">
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-md">
          {/* Badge */}
          <span className="inline-block mb-4 rounded-lg bg-blue-700 px-6 py-2 text-sm md:text-base font-medium text-white">
            Content
          </span>

          {/* Image Preview */}
          <div className="relative w-full h-48 md:h-56 bg-gray-100 rounded-xl overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1705028011814-f4df6ad7ecca?q=80&w=1632&auto=format&fit=crop"
              alt="colorful abstract holographic"
              fill
              className="object-cover"
            />
          </div>

          {/* Title + Description */}
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-4">
            Update support documentation
          </h3>
          <p className="text-sm md:text-base text-gray-500">
            Create content for Peceland App
          </p>

          {/* Date */}
          <span className="inline-block mt-3 rounded-md border px-3 py-1 text-xs md:text-sm font-medium">
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
                  alt={`user${id}`}
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
        </div>
      </div>
    </section>
  );
}
