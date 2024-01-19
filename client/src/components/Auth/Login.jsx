import { ChevronLeft, Key, Loader2 } from "lucide-react";
import { useState } from "react";
import { useLoginMutation } from "../../features/auth/authApi";

const Login = ({ data, setStep }) => {
  const [password, setPassword] = useState("");

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ name: data.name, phone: data.phone, password: password });
  };
  return (
    <div className="text-white">
      <p className="text-sm mb-1 flex justify-center">
        Not you?{" "}
        <span
          className="underline cursor-pointer flex justify-center items-center"
          onClick={() => setStep(1)}
        >
          <ChevronLeft size={20} /> Go back
        </span>
      </p>
      <h3 className="text-sm mb-2">
        Welcome back <span className="font-bold">{data.name}</span>. Enter your
        password to login
      </h3>
      <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Key className="stroke-blue-500" size={20} />
          </div>
          <input
            type="password"
            className="block w-full p-4 ps-10 text-sm rounded-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
            placeholder="Password here..."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute top-1/2 right-2 -translate-y-1/2 rounded-md text-sm px-4 py-2 bg-blue-500 hover:bg-blue-700 focus:ring-blue-800 disabled:cursor-not-allowed disabled:bg-slate-500"
            disabled={password.length <= 2 || isLoading}
          >
            {isLoading ? <Loader2 className="animate-spin" /> : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
