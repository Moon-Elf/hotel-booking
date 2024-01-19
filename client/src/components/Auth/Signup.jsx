import { CircleUserRound, Key } from "lucide-react";

const Signup = () => {
  return (
    <div className="text-white">
      <h3 className="text-sm mb-2">
        Create an account today not to miss the best deals on rooms*
      </h3>
      <form className="w-full max-w-md mx-auto grid gap-2">
        {/* Name */}
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <CircleUserRound className="stroke-blue-500" size={20} />
          </div>
          <input
            type="number"
            className="block w-full p-4 ps-10 text-sm rounded-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Name here..."
            required
          />
        </div>
        {/* Password */}
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Key className="stroke-blue-500" size={20} />
          </div>
          <input
            type="number"
            className="block w-full p-4 ps-10 text-sm rounded-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Password here..."
            required
          />
        </div>
        {/* Confirm Password */}
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Key className="stroke-blue-500" size={20} />
          </div>
          <input
            type="number"
            className="block w-full p-4 ps-10 text-sm rounded-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Confirm Password here..."
            required
          />
        </div>
        <button
          type="submit"
          className="text-white rounded-md text-sm px-4 py-2 bg-blue-500 hover:bg-blue-700 focus:ring-blue-800"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
