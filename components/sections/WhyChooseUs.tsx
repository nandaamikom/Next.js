import { PiFolderPlus } from "react-icons/pi";
import { LiaUserPlusSolid } from "react-icons/lia";
import { FaChartLine } from "react-icons/fa";

const items = [
  {
    title: "Hemat Waktu",
    desc: "Otomatisasi tugas berulang dan workflow cerdas menghemat hingga 5 jam per minggu.",
    icon: <PiFolderPlus size={60} className="bg-blue-600 text-white p-3 rounded-xl" />,
  },
  {
    title: "Lebih Produktif",
    desc: "Semua data terorganisir dalam satu tempat. Tidak ada lagi file hilang atau informasi tercecer.",
    icon: <LiaUserPlusSolid size={60} className="bg-blue-600 text-white p-3 rounded-xl" />,
  },
  {
    title: "Fleksibel",
    desc: "Akses penuh melalui web & mobile app. Bekerja dari mana saja dengan sinkronisasi real-time.",
    icon: <FaChartLine size={60} className="bg-blue-600 text-white p-3 rounded-xl" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="px-6 md:px-20 py-16 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Mengapa Tim Memilih ProductivityPro?</h2>
      <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12">
        Lebih dari sekadar tool manajemen proyek. Solusi komprehensif untuk efisiensi & kolaborasi.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="bg-gray-100 p-8 rounded-xl shadow flex flex-col items-center space-y-4">
            {item.icon}
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
      <button className="mt-12 bg-gradient-to-r from-blue-900 to-blue-500 text-white px-8 py-3 rounded-xl font-medium">
        Coba Gratis 14 Hari
      </button>
    </section>
  );
}
