const Pagination = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-8">
        {/* <!-- Help text --> */}
        <span className="text-sm text-gray-700">
          Showing <span className="font-semibold text-gray-900 ">1</span> to{" "}
          <span className="font-semibold text-gray-900">10</span> of{" "}
          <span className="font-semibold text-gray-900">100</span> Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          {/* <!-- Buttons --> */}
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium bg-slate-100 rounded-s-md hover:bg-gray-200 ">
            Prev
          </button>
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium bg-slate-100 rounded-e-md border-l-2 hover:bg-gray-200">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
