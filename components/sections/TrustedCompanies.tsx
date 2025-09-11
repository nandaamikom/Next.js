import Image from "next/image";

export default function TrustedCompanies() {
  return (
    <section className="flex flex-col items-center bg-gray-50 px-6 md:px-20 py-12 space-y-10">
      <p className="text-xl md:text-2xl text-gray-700 text-center">
        Dipercaya oleh perusahaan global dan startup inovatif
      </p>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-8 items-center">
        {["mircrosoft.svg","google.svg","linkedin.svg","amazon.svg","adobe.png","node.svg","laravel.svg"].map((logo, i) => (
          <Image key={i} src={`/${logo}`} alt="company logo" width={100} height={100} className="h-10 w-auto" />
        ))}
      </div>
    </section>
  );
}
