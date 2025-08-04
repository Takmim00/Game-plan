import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    console.log(name, password);
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md mx-auto p-6 ">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Log in to Account
          </h1>
          <p className="mt-6 text-sm text-gray-600">
            Sign in below to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                type="text"
                name="email"
                autoComplete="email" 
                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative">
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="new-password"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {/* Eye Icon */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                </svg>
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#451DA9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </form>

        <div className="flex items-center justify-between mt-4">
          <div className="font-semibold text-sm text-slate-500 text-left">
            Don't have an account?{" "}
            <Link to="/signup" className="text-red-600 underline">
              Register
            </Link>
          </div>
          <a className="text-custom-blue" href="/forgetPassword">
            Forgot password?
          </a>
        </div>

        <div className="flex w-full items-center my-6">
          <div className="flex-1 border-b border-gray-300"></div>
          <span className="text-black text-lg font-medium leading-8 px-4">
            Or Login With
          </span>
          <div className="flex-1 border-b border-gray-300"></div>
        </div>

        <div className="flex justify-center">
          <button className="px-1 py-2 ">
            <img
              src="data:image/png;base64,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"
              alt="Google Login"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
