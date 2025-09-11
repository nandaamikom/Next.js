export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between bg-blue-800 text-white px-6 md:px-20 py-12">
      <div>
        <h3 className="font-bold text-lg mb-4">Product</h3>
        <ul className="space-y-2">
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Integrations</a></li>
          <li><a href="#">API</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#">About us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">Subscribe</h3>
        <div className="flex">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-2 rounded-l-md text-gray-700"
          />
          <button className="bg-blue-600 px-4 py-2 rounded-r-md">→</button>
        </div>
      </div>
    </footer>
  );
}
