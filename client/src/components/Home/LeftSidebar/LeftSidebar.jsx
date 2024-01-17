import { useGetFacilitiesQuery } from "../../../features/facility/facilityApi";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import { Facilities } from "./Facilities";

export default function LeftSidebar() {
  const { data, isLoading, isError, error } = useGetFacilitiesQuery();

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error message={error.status} />;
  else if (!isLoading && !isError && !data.length)
    content = <Error message="Nothing Found" />;
  else if (!isLoading && !isError && data.length)
    content = <Facilities data={data} />;

  return (
    <div className="w-1/2 p-4 bg-slate-100 rounded-md shadow-md">
      <h2 className="font-semibold text-2xl mb-4 border-b pb-4">Facilities</h2>
      {content}
    </div>
  );
}
