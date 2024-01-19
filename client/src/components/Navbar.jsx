import { LogIn, LogOut, Search } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLoggedOut } from "../features/auth/authSlice";
import { updateSearch } from "../features/filter/filterSlice";
import Input from "./ui/Input";

export default function Navbar() {
  const { search: storeSearch } = useSelector((state) => state.filter);
  const { name } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [search, setSearch] = useState(storeSearch);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(updateSearch(e.target.value));
  };

  return (
    <header className="bg-slate-100 border-b">
      <nav className="container mx-auto px-2 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-center sm:text-start">
            <h3 className="text-3xl font-semibold">
              <span className="font-bold text-blue-600">HOT</span>EL
            </h3>
          </Link>
          <div className="max-w-sm w-full hidden sm:flex px-2">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <Input
              placeholder="Search for room"
              name="search"
              value={search}
              onChange={handleSearch}
              icon={<Search />}
            />
          </div>
          <div>
            {name ? (
              <>
                <div className="flex mx-auto w-fit mt-2 sm:mt-0 gap-2 px-2 py-1.5 items-center justify-center rounded-md bg-blue-100 shadow-md text-black">
                  <span className="font-medium">{name.substring(0, 3)}</span>
                  <span
                    className="p-1.5 bg-slate-100 rounded-md shadow-md cursor-pointer hover:bg-slate-200 border-2 border-red-500"
                    title="Logout"
                    onClick={() => {
                      dispatch(userLoggedOut());
                      localStorage.removeItem("auth");
                    }}
                  >
                    <LogOut size={15} />
                  </span>
                </div>
              </>
            ) : (
              <Link
                to="/auth"
                className="inline-flex mx-auto w-fit mt-2 sm:mt-0 gap-2 px-2 py-1.5 items-center justify-center rounded-md bg-blue-100 shadow-md text-black"
              >
                <span className="font-medium">Login</span>
                <span
                  className="p-1.5 bg-slate-100 rounded-md shadow-md cursor-pointer hover:bg-slate-200 border-2 border-blue-500"
                  title="Logout"
                >
                  <LogIn size={15} />
                </span>
              </Link>
            )}
          </div>
        </div>
      </nav>
      <div className="flex-1 mx-auto my-2 max-w-xs search-field sm:hidden px-2">
        <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
        <Input
          placeholder="Search for room"
          name="search-mobile"
          value={search}
          onChange={handleSearch}
          icon={<Search />}
        />
      </div>
    </header>
  );
}
