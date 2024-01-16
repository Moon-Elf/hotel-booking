const Input = ({ name, icon, ...rest }) => {
  return (
    <div className="relative">
      <input
        type="text"
        id={name}
        className="px-2 py-1 text-gray-600 rounded-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 w-full"
        {...rest}
      />
      <label
        htmlFor={name}
        className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 cursor-pointer text-blue-600"
      >
        {icon}
      </label>
    </div>
  );
};

export default Input;
