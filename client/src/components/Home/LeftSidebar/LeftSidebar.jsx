import { Facebook, Github, Instagram, Linkedin, X } from "lucide-react";
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
      className={`w-3/4 md:w-1/2 p-4 bg-slate-100 rounded-md shadow-md
    fixed md:sticky top-0 md:top-4 left-0 h-full md:h-fit transition-all md:translate-x-0 z-10 overflow-y-scroll md:overflow-y-hidden ${
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

      <div className="socialLinks flex gap-2 mt-4 border-t pt-4">
        <a
          href="https://www.facebook.com/fb.shahidul.alam/"
          className="bg-white p-2 rounded-full shadow-lg"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook />
        </a>
        <a
          href="https://www.linkedin.com/in/in-shahidul-alam/"
          className="bg-white p-2 rounded-full shadow-lg"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://instagram.com/z_shanto_z"
          className="bg-white p-2 rounded-full shadow-lg"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a
          href="https://github.com/shz-code/"
          className="bg-white p-2 rounded-full shadow-lg"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
      </div>
    </div>
  );
}
