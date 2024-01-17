import { Search } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateSearch } from "../features/filter/filterSlice";
import Input from "./ui/Input";

export default function Navbar() {
  const { search: storeSearch } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [search, setSearch] = useState(storeSearch);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(updateSearch(e.target.value));
  };

  return (
    <header className="bg-slate-100 border-b">
      <nav className="container mx-auto px-2 py-3">
        <div className="sm:flex items-center justify-between">
          <Link to="/" className="text-center sm:text-start">
            <h3 className="text-3xl font-semibold">
              <span className="font-bold text-blue-600">HOT</span>EL
            </h3>
          </Link>
          <div className="flex-1 max-w-xs search-field mx-auto mt-2 sm:mt-0 sm:mx-0">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <Input
              placeholder="Search for room"
              name="search"
              value={search}
              onChange={handleSearch}
              icon={<Search />}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
