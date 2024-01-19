const Button = ({ msg, ...rest }) => {
  return (
    <button
      className={`btn px-4 py-2 font-semibold rounded-md cursor-pointer w-full sm:w-fit ${"bg-blue-500 text-white hover:bg-blue-700 "} disabled:cursor-not-allowed disabled:bg-slate-500`}
      {...rest}
    >
      {msg}
    </button>
  );
};

export default Button;
