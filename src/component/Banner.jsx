import { Link } from "react-router-dom";
import banner from '../assets/game1.png'

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-700 to-purple-500 text-white overflow-hidden ">

      <div className="absolute w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-pink-500 opacity-20 rounded-full blur-3xl bottom-20 right-10 sm:bottom-32 sm:right-20 md:bottom-40 md:right-32 lg:right-[200px] xl:right-[650px] z-0"></div>
      <div className="absolute w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-pink-500 opacity-20 rounded-full blur-3xl -top-8 -right-8 sm:-top-12 sm:-right-12 md:-top-16 md:-right-0 z-0"></div>
      <div className="absolute w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-pink-500 opacity-20 rounded-full blur-3xl -top-16 -left-16 sm:-top-24 sm:-left-24 md:-top-[150px] md:-left-[150px] z-0"></div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 xl:w-11/12 xl:mx-auto py-4">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="60"
              className="sm:w-[140px] sm:h-[70px] md:w-[150px] md:h-[75px]"
              viewBox="0 0 1591 750"
              fill="none"
            >
              <path
                d="M152.95 265.65C157.49 261.23 164.86 257.72 171.27 257.24H432.96C447.04 258.52 457.09 267.92 459.64 281.74L458.57 472.89C453.61 484.52 444.62 491.61 431.82 492.77H173.55C157.7 491.65 145.93 480.88 144.55 464.9C148.35 406.8 139.63 342.49 144.55 285.12C145.18 277.83 147.7 270.79 152.95 265.66V265.65ZM410.73 320.98C401.56 320.59 392.02 320.53 382.88 319.82C345.93 316.97 298.54 309.4 262.32 313.02C207.17 318.53 184.11 391.29 226.47 429.6C276.82 475.13 353.71 426.5 337.27 361.87L401.59 347.66L410.72 320.98H410.73Z"
                fill="white"
              />
              <path
                d="M784.35 299.37C787.05 300.2 785.85 307.17 786.07 309.61C799.02 297.43 817.27 293.12 832.09 305.09L842.34 316.44C857.29 292.9 898.87 290.73 912.5 316.8C913.52 318.75 916.84 326.85 916.84 328.38V401.74H888.41V337.48C888.41 336.99 885.46 330.67 884.81 329.7C877.32 318.4 860.25 321.76 853.8 332.44C853.35 333.18 850.87 339.36 850.87 339.75V401.74H822.44C823.37 396.11 821.51 390.58 821.26 385.3C820.52 370.1 822.96 352.13 821.31 337.48C819.33 319.87 801.31 318.28 791.16 330.08C789.9 331.54 786.05 337.18 786.05 338.62V401.74H757.62V299.38H784.35V299.37Z"
                fill="white"
              />
              <path
                d="M617.73 398.88C612.35 444.27 550.64 452.93 520.08 427.16L530.79 406.28C552.45 423.14 595.49 420.56 593.28 385.8C557.46 417.81 508.04 389.87 513.41 342.32C517.61 305.12 561.35 281.52 589.29 311.86V299.35H617.74V398.87L617.73 398.88ZM564.03 322.38C532.64 325.67 536 376.29 567.07 375.61C598.05 374.93 597.68 318.86 564.03 322.38Z"
                fill="white"
              />
              <path
                d="M1087.46 389.22V438.13H1059.03V301.08L1060.74 299.37H1087.47V309.6C1092.76 307.24 1096.65 303.26 1102.27 301.09C1122.76 293.19 1143.92 301.39 1155.49 319.49C1185.34 366.18 1133.91 432.39 1087.47 389.22H1087.46ZM1106.49 322.39C1101.15 323.29 1095.11 328.66 1092.19 333.11C1077.91 354.91 1096.76 389.71 1122.18 375.61C1145.96 362.42 1135.73 317.48 1106.49 322.39Z"
                fill="white"
              />
              <path
                d="M1038.55 360.78H965.76C969.21 383.51 1000.76 383.52 1015.08 369.96L1030.58 388.06C1015.96 398.97 1002.06 404.5 983.4 402.85C920.45 397.27 921.83 301.99 984.47 298.18C1022.83 295.85 1045.14 323.74 1038.55 360.79V360.78ZM1010.12 340.31C1007.48 314.38 970.32 316.97 965.76 340.31H1010.12Z"
                fill="white"
              />
              <path
                d="M731.47 401.73H705.88C702.75 399.02 704.62 394.11 704.16 390.36L696.11 397.65C667.55 415.85 626.34 387.08 642.52 354.3C646.06 347.13 660.67 338.04 668.34 338.04H701.32C705.04 338.04 701.5 328.67 700.13 326.72C691.51 314.35 666.58 324.24 656.38 330.73L643.9 312.54C663.92 295.23 714.99 289.61 727.74 317.31C728.38 318.7 731.45 327.64 731.45 328.38V401.74L731.47 401.73ZM701.38 357.66C691.95 360.72 668.86 353.16 668.11 368.35C667.38 383.03 696.77 383.39 701.95 368.23C702.66 366.15 704.56 358.23 701.38 357.66Z"
                fill="white"
              />
              <path
                d="M1326.3 401.73H1300.14V390.36C1288.11 402.52 1273.89 406.18 1257.45 400.64C1232.75 392.32 1225.09 356.62 1249.04 343.23C1251.12 342.07 1261.53 338.04 1263.18 338.04H1297.87C1298.62 311.96 1265.07 320.68 1251.8 331.2L1238.73 311.91C1259.99 296.58 1308.22 288.9 1322.37 316.39C1323.02 317.66 1326.31 325.58 1326.31 326.1V401.73H1326.3ZM1297.87 358.51H1271.14C1270.23 358.51 1265.27 361.86 1264.58 363.33C1257.03 379.49 1283.63 385.23 1293.92 373.33C1297.86 368.77 1298.37 364.39 1297.87 358.51Z"
                fill="white"
              />
              <path
                d="M1419.57 401.73C1417.69 380.92 1422.68 354.37 1418.16 334.33C1414.71 319.04 1396.72 316.51 1386.6 327.24C1385.12 328.8 1380.9 337.05 1380.9 338.6V401.72H1352.47V299.36H1380.9V309.59C1385.44 307.84 1388.36 303.98 1392.98 301.77C1419.29 289.22 1448 308.86 1448 337.46V400.01L1446.29 401.72H1419.56L1419.57 401.73Z"
                fill="white"
              />
              <path
                d="M1213.7 261.83H1185.27V401.72H1213.7V261.83Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>


        <div className="hidden lg:flex space-x-6 text-white font-medium">
          <a href="#" className="hover:text-gray-200">
            Features
          </a>
          <a href="#" className="hover:text-gray-200">
            FAQ
          </a>
          <a href="#" className="hover:text-gray-200">
            Pricing
          </a>
        </div>


        <button className="lg:hidden text-white p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>


        <button className="hidden lg:block text-sm xl:text-lg font-bold bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 xl:px-6 xl:py-2 rounded-full">
          Login / Sign Up
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full px-4 sm:px-6 lg:px-8 xl:w-11/12 xl:mx-auto   lg:py-0">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 xl:max-w-xl space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold leading-tight">
            Plan Your <br className="hidden sm:block" />
            <span className="block sm:inline"> Coaching Sessions In </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> Seconds</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-base xl:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Transform how you plan your sessions with our cutting-edge AI tool
            designed specifically for sports coaches. Whether you're planning an
            entire training session, searching for fresh and creative ideas, or
            looking for the perfect drill to challenge your athletes, our AI has
            you covered. Save precious hours in planning and get back to doing
            what you love most—coaching and inspiring your team.
          </p>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-4 xl:space-y-0 xl:space-x-4">
              <button className="w-full sm:w-auto bg-[#CC7FFF] hover:bg-[#B366E6] text-white px-8 sm:px-12 lg:px-8 xl:px-16 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg">
                Start for Free
              </button>
            </div>
            <p className="text-xs sm:text-sm opacity-90">
              * No credit card required
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex items-end justify-center lg:justify-end h-64 sm:h-80 md:h-96 lg:h-full">
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-full">
            <img
              src={banner}
              alt="Coach with kids"
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
