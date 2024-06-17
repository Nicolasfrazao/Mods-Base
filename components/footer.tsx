const Footer = () => {
  return (
    <footer className="font-sans tracking-wide bg-black py-10 px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
        <div>
          <h4 className="text-white text-lg font-semibold mb-6">Company</h4>
          <ul className="space-y-5">
            <li>About Us</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-6">Information</h4>
          <ul className="space-y-5">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-6">Help</h4>
          <ul className="space-y-5">
            <li>FAQs</li>
            <li>Shipping Information</li>
            <li>Returns & Exchanges</li>
          </ul>
        </div>

        <div className="col-span-full max-w-2xl">
          <h4 className="text-white text-lg font-semibold mb-6">Newsletter</h4>
          <p className="text-gray-300 mb-4 text-[15px]">
            Subscribe to our newsletter to get updates on new mods and posts.
          </p>

          <form className="mb-4">
            <div className="flex items-center">
              <input
                className="bg-gray-800 px-4 py-3.5 rounded-l-md w-full text-[15px] text-gray-300 outline-none"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="bg-gray-700 text-[15px] text-gray-300 tracking-wide px-4 py-3.5 rounded-r-md"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <p className="text-gray-300 text-right text-[15px] mt-8">
        © 2024
        All Rights Reserved.
      </p>
    </footer>
  );
};
