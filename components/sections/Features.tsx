import { BsPeople, BsShieldCheck } from "react-icons/bs";
import { PiLightning } from "react-icons/pi";
import { FaRegChartBar } from "react-icons/fa";

const features = [
  {
    title: "Kolaborasi Real-time",
    desc: "Edit bersama tim dalam waktu nyata. Lihat perubahan langsung dan berkomunikasi tanpa hambatan.",
    icon: <BsPeople size={40} className="bg-blue-600 text-white p-2 rounded-lg" />,
  },
  {
    title: "Integrasi Lengkap",
    desc: "Terhubung dengan Google Drive, Slack, Zoom, dan 100+ aplikasi lainnya.",
    icon: <PiLightning size={40} className="bg-purple-600 text-white p-2 rounded-lg" />,
  },
  {
    title: "Analitik & Laporan",
    desc: "Dashboard progress real-time dengan insights mendalam.",
    icon: <FaRegChartBar size={40} className="bg-green-600 text-white p-2 rounded-lg" />,
  },
  {
    title: "Keamanan Data",
    desc: "Enkripsi end-to-end dan role-based access control untuk melindungi data perusahaan.",
    icon: <BsShieldCheck size={40} className="bg-red-600 text-white p-2 rounded-lg" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 md:px-20 py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
        Fitur yang Membuat Tim Anda Lebih Produktif
      </h2>
      <p className="text-lg md:text-2xl text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Semua yang Anda butuhkan untuk mengelola proyek dan tim dalam satu platform.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-100 p-8 rounded-xl shadow flex flex-col space-y-4">
            {f.icon}
            <h3 className="text-2xl font-semibold">{f.title}</h3>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
