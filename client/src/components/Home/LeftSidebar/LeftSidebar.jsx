import { X } from "lucide-react";
import { useGetFacilitiesQuery } from "../../../features/facility/facilityApi";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import { Facilities } from "./Facilities";

export default function LeftSidebar({
  mobileSidebarView,
  setMobileSidebarView,
}) {
  const { data, isLoading, isError, error } = useGetFacilitiesQuery();

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error message={error.status} />;
  else if (!isLoading && !isError && !data.length)
    content = <Error message="Nothing Found" />;
  else if (!isLoading && !isError && data.length)
    content = <Facilities data={data} />;

  return (
    <div
      className={`w-3/4 p-4 bg-slate-100 rounded-md shadow-md
    fixed md:relative top-0 left-0 h-full md:h-fit transition-all md:translate-x-0 ${
      !mobileSidebarView ? "-translate-x-full" : "translate-x-0"
    }`}
    >
      <div className="flex justify-between mb-4 pb-4 border-b">
        <h2 className="font-semibold text-2xl">Facilities</h2>
        {mobileSidebarView && (
          <X
            className="md:hidden"
            size={30}
            onClick={() => setMobileSidebarView(false)}
          />
        )}
      </div>
      {content}
    </div>
  );
}
