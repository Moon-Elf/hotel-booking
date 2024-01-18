const Pagination = ({ page, setPage, totalRooms, limit }) => {
  const showMore = () => {
    setPage((prev) => prev + 1);
  };
  const showLess = () => {
    setPage((prev) => prev - 1);
  };
  return (
    <>
      <div className="flex flex-col items-center mt-8">
        {/* <!-- Help text --> */}
        <span className="text-sm text-gray-700">
          Showing <span className="font-semibold text-gray-900 ">1</span> to{" "}
          <span className="font-semibold text-gray-900">
            {page * limit >= totalRooms ? totalRooms : page * limit}
          </span>{" "}
          of <span className="font-semibold text-gray-900">{totalRooms}</span>{" "}
          Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          {/* <!-- Buttons --> */}
          {page * limit >= totalRooms ? (
            <>
              <button
                className="px-3 h-8 text-sm font-medium bg-slate-100 rounded-s-md hover:bg-gray-200 "
                onClick={showLess}
              >
                Load Less
              </button>
              <button className="px-3 h-8 text-sm font-medium bg-slate-100 rounded-e-md hover:bg-gray-200 ">
                Reached at bottom
              </button>
            </>
          ) : (
            <>
              {page === 1 ? (
                <button className="px-3 h-8 text-sm font-medium bg-slate-100 rounded-s-md hover:bg-gray-200 ">
                  Reached at Top
                </button>
              ) : (
                <button
                  className="px-3 h-8 text-sm font-medium bg-slate-100 rounded-s-md hover:bg-gray-200 "
                  onClick={showLess}
                >
                  Load Less
                </button>
              )}
              <button
                className="px-3 h-8 text-sm font-medium bg-slate-100 rounded-e-md hover:bg-gray-200 "
                onClick={showMore}
              >
                Load More
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Pagination;
