import { PiFolderPlus } from "react-icons/pi";
import { LiaUserPlusSolid } from "react-icons/lia";
import { FaChartLine } from "react-icons/fa";

const steps = [
  {
    title: "Buat Proyek",
    desc: "Mulai dengan membuat workspace baru untuk proyek Anda. Setup dalam hitungan menit.",
    icon: <PiFolderPlus size={60} className="bg-blue-600 text-white p-3 rounded-xl" />,
  },
  {
    title: "Tambah Tim",
    desc: "Undang anggota tim dan atur role sesuai kebutuhan. Kolaborasi dimulai dari sini.",
    icon: <LiaUserPlusSolid size={60} className="bg-blue-600 text-white p-3 rounded-xl" />,
  },
  {
    title: "Pantau Progres",
    desc: "Dashboard interaktif dengan real-time updates dan analytics yang mendalam.",
    icon: <FaChartLine size={60} className="bg-blue-600 text-white p-3 rounded-xl" />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 md:px-20 py-16 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Cara Kerja dalam 3 Langkah Mudah</h2>
      <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12">
        Mulai meningkatkan produktivitas tim Anda hanya dalam beberapa menit dengan setup sederhana.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="bg-gray-100 rounded-2xl shadow-lg p-8 flex flex-col items-center space-y-4">
            {s.icon}
            <h3 className="text-2xl font-semibold">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
      <button className="mt-12 bg-gradient-to-r from-blue-900 to-blue-500 text-white px-8 py-3 rounded-xl font-medium">
        Mulai Sekarang - Gratis
      </button>
    </section>
  );
}
