import LeftSidebar from "../Home/LeftSidebar";
import Main from "../Home/Main";

export default function Home() {
  return (
    <div className="flex">
      <LeftSidebar />
      <Main />
    </div>
  );
}
