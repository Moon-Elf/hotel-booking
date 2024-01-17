import { Grid3X3, LayoutList } from "lucide-react";

export default function Main() {
  return (
    <main className="w-full">
      <div className="main-header p-4 flex justify-between items-center border-b">
        <h2 className="font-semibold text-2xl">Rooms</h2>
        <div className="gallery-functions flex items-center gap-2 text-slate-400">
          <LayoutList
            className="cursor-pointer hover:text-black transition-all"
            size={20}
          />
          <Grid3X3
            className="cursor-pointer hover:text-black transition-all"
            size={20}
          />
          <select className="border-2 border-blue-500 rounded-md p-1 text-black">
            <option value="default">Default</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>
    </main>
  );
}
