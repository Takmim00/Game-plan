import logo from "../assets/gamelogo.png"
const Footer = () => {
  return (
    <footer class="bg-black text-white py-10 md:py-16 px-4 sm:px-6 lg:px-16">
      <div class="text-center mb-10 md:mb-12">
        <a
          class="text-lg font-bold z-50 w-full flex items-center justify-center mb-2"
          href="/home"
          data-discover="true"
        >
          <img
            src={logo}
            alt="Logo"
            class="w-32 md:w-40"
          />
        </a>
        <div class="flex justify-center items-center">
          <div class="flex items-center border border-gray-600 rounded-full overflow-hidden max-w-md w-full">
            <input
              type="email"
              placeholder="Enter your email"
              class="bg-black text-white placeholder-gray-400 px-4 py-3 outline-none flex-grow text-sm md:text-base"
              aria-label="Email"
            />
            <button
              class="bg-purple-600 text-white px-6 py-3 hover:bg-purple-500 transition-colors text-sm md:text-base"
              aria-label="Subscribe"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div class="text-center mb-8 md:mb-12">
        <ul class="flex justify-center flex-wrap gap-4 text-sm md:text-base text-gray-400">
          <li>
            <a
              class="hover:text-white transition-colors"
              href="/terms"
              data-discover="true"
            >
              Terms &amp; Services
            </a>
          </li>
          <li>
            <a
              class="hover:text-white transition-colors"
              href="/privacy"
              data-discover="true"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              class="hover:text-white transition-colors"
              href="/support"
              data-discover="true"
            >
              Support
            </a>
          </li>
        </ul>
      </div>
      <div class="border-t border-gray-600 pt-6">
        <p class="text-center text-sm text-gray-400 mb-2">
          © 2024 gameplan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
