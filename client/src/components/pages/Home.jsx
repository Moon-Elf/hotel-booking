import { Tags } from "lucide-react";
import { useState } from "react";
import LeftSidebar from "../Home/LeftSidebar/LeftSidebar";
import Main from "../Home/Main/Main";

export default function Home() {
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const toggleMobileView = () => {
    setMobileSidebar(true);
  };
  return (
    <div className="md:flex gap-4">
      <LeftSidebar
        mobileSidebarView={mobileSidebar}
        setMobileSidebarView={setMobileSidebar}
      />
      <div
        className="flex md:hidden bg-blue-100 w-fit px-3 py-2 m2-4 rounded-md cursor-auto"
        onClick={toggleMobileView}
      >
        <Tags /> <h4>Filter by facilities</h4>
      </div>
      <Main />
    </div>
  );
}
