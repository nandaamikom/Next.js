import { BsCheck2Circle } from "react-icons/bs";

const plans = [
  {
    title: "Free",
    price: "Rp.0 / Selamanya",
    desc: "Sempurna untuk tim kecil yang baru memulai",
    features: ["Maksimal 3 pengguna", "5 proyek aktif", "Storage 1GB", "Basic task management", "Email support"],
    button: "Mulai Gratis",
  },
  {
    title: "Pro",
    price: "Rp.99k / Bulan",
    desc: "Untuk tim yang ingin meningkatkan produktivitas",
    features: ["Unlimited pengguna", "Unlimited proyek", "Storage 100GB", "Advanced analytics", "Semua integrasi", "Priority support"],
    button: "Pilih Paket Pro",
  },
  {
    title: "Enterprise",
    price: "Custom",
    desc: "Solusi enterprise dengan fitur advanced",
    features: ["Semua fitur Pro", "Unlimited storage", "Advanced security", "SSO integration", "Custom integrations", "24/7 phone support"],
    button: "Hubungi Sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 md:px-20 py-16 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Paket Harga Sesuai Kebutuhan Anda</h2>
      <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12">
        Pilih paket yang tepat untuk tim Anda. Upgrade atau downgrade kapan saja.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {plans.map((plan, i) => (
          <div key={i} className="bg-gray-50 rounded-xl shadow p-8 flex flex-col space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-800">{plan.title}</h3>
              <p className="text-gray-500">{plan.desc}</p>
              <p className="text-3xl font-bold text-blue-800 mt-2">{plan.price}</p>
            </div>
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md">{plan.button}</button>
            <ul className="space-y-2">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center space-x-2 text-gray-700">
                  <BsCheck2Circle className="text-green-500" /> <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-12 text-gray-500">Semua paket termasuk free trial 14 hari. Tidak ada biaya setup.</p>
    </section>
  );
}
