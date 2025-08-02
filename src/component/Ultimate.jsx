import img from "../assets/game2.png";
const Ultimate = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  w-11/12 mx-auto py-10 md:py-16">
      <div class="w-full  flex justify-center">
        <div class="relative grid-bg ">
          <div class=" overflow-hidden p-1 ">
            <img
              src={img}
              alt="Dashboard"
              class="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover  relative"
            />
          </div>
        </div>
      </div>
      <div className="w-full  mt-8 md:mt-0 md:pl-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Your Ultimate <br /> Coaching <br /> Assistant Is Here
        </h2>
        <ul className="list-disc list-inside  mt-6 space-y-4 text-gray-800 text-lg">
          <li className=" text-sm md:text-base">
            Save Time on Planning: Instantly generate comprehensive training
            sessions, freeing up valuable time to focus on coaching.
          </li>
          <li className=" text-sm md:text-base">
            Access Fresh Ideas: Discover innovative drills and session plans to
            keep your athletes engaged and challenged.
          </li>
          <li className=" text-sm md:text-base">
            Comprehensive Drill Library: Quickly find drills for specific
            scenarios, skills, or challenges, ensuring you’re always prepared.
          </li>
          <li className=" text-sm md:text-base">
            Personalized Recommendations: Receive tailored suggestions based on
            your team’s skill level, sport, and specific goals.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Ultimate;
