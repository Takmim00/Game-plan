import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, password, confirmPassword);
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md mx-auto p-6 ">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">Sign Up</h2>
          <p className="text-gray-600 mb-6">Create a new account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm text-gray-700 flex items-start">
              User Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full h-12 p-4 border rounded-xl mt-2 border-gray-300"
              name="name"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700 flex items-start">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 p-4 border rounded-xl mt-2 border-gray-300"
              name="email"
              autoComplete="email"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700 flex items-start">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full h-12 p-4 border rounded-xl mt-2 border-gray-300"
                name="password"
                autoComplete="new-password"
              />
              <span className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-700 flex items-start">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full h-12 p-4 border rounded-xl mt-2 border-gray-300"
                name="confirmPassword"
                autoComplete="new-password"
              />
              <span className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="flex items-start space-x-2 mt-4">
            <input type="checkbox" className="w-5 h-5" name="termsAccepted" />
            <label
              htmlFor="termsAccepted"
              className="text-sm text-gray-700 text-start"
            >
              By creating an account, I accept the Terms &amp; Conditions &amp;
              Privacy Policy.
            </label>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#451DA9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-700 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-custom-blue hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
