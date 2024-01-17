import LeftSidebar from "../Home/LeftSidebar/LeftSidebar";
import Main from "../Home/Main/Main";

export default function Home() {
  return (
    <div className="flex gap-4">
      <LeftSidebar />
      <Main />
    </div>
  );
}
