import { useState } from "react";
import MainHeaderFilterBtns from "./MainHeaderFilterBtns";

export default function Main() {
  const [viewMode, setViewMode] = useState("list");
  return (
    <main className="w-full">
      <div className="main-header p-4 flex justify-between items-center border-b">
        <h2 className="font-semibold text-2xl">Rooms</h2>
        <MainHeaderFilterBtns setViewMode={setViewMode} />
      </div>
    </main>
  );
}
