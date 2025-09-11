import { BsPersonCircle } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const testimonials = [
  { name: "Eka Ferdiansyah", text: "Simple, fast, and boosts my productivity!" },
  { name: "John Prayer", text: "Best tool to manage my time and tasks." },
  { name: "Emma Warner", text: "Easy to use and super effective for my team." },
  { name: "Mike Chen", text: "Collaboration has never been this smooth." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 md:px-20 py-16 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Apa Kata Pengguna Kami</h2>
      <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12">
        Ribuan tim sudah merasakan peningkatan produktivitas dengan ProductivityPro.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-xl shadow flex flex-col space-y-4 text-left">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BsPersonCircle className="text-blue-900" size={24} />
                <p className="font-semibold">{t.name}</p>
              </div>
              <div className="flex space-x-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} size={14} />)}
              </div>
            </div>
            <p className="text-gray-700 text-sm">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
