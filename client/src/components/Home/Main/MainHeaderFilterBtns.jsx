import { Grid3X3, LayoutList } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateSort } from "../../../features/filter/filterSlice";

const MainHeaderFilterBtns = ({ viewMode, setViewMode }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateSort(e.target.value));
  };
  return (
    <div className="gallery-functions flex items-center gap-2 text-slate-400">
      <LayoutList
        className={`cursor-pointer hover:text-slate-600 transition-all ${
          viewMode === "list" && "text-blue-500"
        }`}
        size={20}
        onClick={() => setViewMode("list")}
      />
      <Grid3X3
        className={`cursor-pointer hover:text-slate-600 transition-all ${
          viewMode === "grid" && "text-blue-500"
        }`}
        size={20}
        onClick={() => setViewMode("grid")}
      />
      <select
        className="border-2 border-blue-500 rounded-md p-1 text-black"
        onChange={handleChange}
      >
        <option value="default">Default</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default MainHeaderFilterBtns;
