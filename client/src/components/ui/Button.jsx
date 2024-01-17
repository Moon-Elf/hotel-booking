import { Ban, Loader2 } from "lucide-react";
const Button = ({ secondary, isLoading, allowed, msg, ...rest }) => {
  return (
    <button
      disabled={isLoading || !allowed}
      className={`btn px-4 py-2 font-semibold rounded-md cursor-pointer w-full sm:w-fit ${
        !secondary ? "" : "bg-blue-500 text-white hover:bg-blue-700 "
      }`}
      {...rest}
    >
      {msg}
      {!secondary && isLoading && <Loader2 className="animate-spin" />}
      {!secondary && !allowed && <Ban />}
    </button>
  );
};

export default Button;
