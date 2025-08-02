import app from "../assets/app-store-QtgANU77.png";
import img from "../assets/game3.png";
import play from "../assets/play-store-BbIiZpff.png";
const Maximize = () => {
  return (
    <div className="relative py-10 md:py-16 w-11/12 mx-auto">
      <div className="relative flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Maximize <br /> Your Impact as <br /> a Coach.
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-8">
            Our platform is designed to help sports coaches save time, stay
            organized, and focus on what they love most—coaching. The ability to
            create training sessions tailored specifically to your athletes
            exact level means you can feel confident you’re delivering maximum
            impact as a coach.
          </p>
          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={app} alt="App Store" className="" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={play} alt="Google Play" className="" />
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute -top-16 lg:-top-6 right-24 w-56  hidden lg:block  h-56 lg:w-96 lg:h-96 rounded-full "></div>
          <div className="relative z-20">
            <div className=" overflow-hidden ">
              <img
                src={img}
                alt="Dashboard"
                className="w-[300px] md:w-[450px] lg:w-[550px] h-auto object-cover z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maximize;
