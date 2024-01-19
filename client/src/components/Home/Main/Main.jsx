import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetRoomsQuery } from "../../../features/room/roomApi";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import GridRooms from "./GridRooms/GridRooms";
import ListRooms from "./ListRooms/ListRooms";
import MainHeaderFilterBtns from "./MainHeaderFilterBtns";
import Pagination from "./Pagination";

export default function Main({ mobileSidebar, setMobileSidebar }) {
  const [viewMode, setViewMode] = useState("grid");

  const { data, isLoading, isError, error } = useGetRoomsQuery();
  const { search, selectedRoomFacilities, sort, page, limit } = useSelector(
    (state) => state.filter
  );

  const [loaded, setLoaded] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  // const [orderedRooms, setOrderedRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);

  useEffect(() => {
    const formedArr = selectedRoomFacilities.map((obj) => obj.slug).join("-");
    setSelectedTags(formedArr);
    setLoaded(true);
  }, [selectedRoomFacilities]);

  const filterRoomsFunc = useCallback(() => {
    const newRooms = _.cloneDeep(data) || [];
    if (sort === "asc") {
      newRooms.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      newRooms.sort((a, b) => b.price - a.price);
    }

    const arr = newRooms
      .filter(
        (room) =>
          room.name.toLowerCase().includes(search) ||
          room.desc.toLowerCase().includes(search)
      )
      .filter((room) => {
        const check = room.facilities.filter((facility) => {
          if (selectedTags.includes(facility)) return facility;
        });
        if (check.length) return room;
      });
    setFilteredRooms(arr);
  }, [search, selectedTags, data, sort]);

  useEffect(() => {
    filterRoomsFunc();
  }, [filterRoomsFunc]);

  const handleClick = () => {
    if (mobileSidebar) setMobileSidebar(false);
  };

  return (
    <main className="w-full" onClick={handleClick}>
      <div className="main-header px-0 py-4 sm:p-4 flex justify-between items-center border-b">
        <h2 className="font-semibold text-2xl">Rooms</h2>
        <MainHeaderFilterBtns viewMode={viewMode} setViewMode={setViewMode} />
      </div>
      <div className="sm:p-4">
        {isLoading && (
          <div className="mt-4">
            <Loader />
          </div>
        )}
        {!isLoading && isError && <Error message={error.status} />}
        {!isLoading && !isError && viewMode === "list" && loaded && (
          <ListRooms page={page} limit={limit} rooms={filteredRooms} />
        )}
        {!isLoading && !isError && viewMode === "grid" && loaded && (
          <GridRooms page={page} limit={limit} rooms={filteredRooms} />
        )}
        {/* Pagination */}
        {!isLoading && !isError && filteredRooms.length > limit && (
          <Pagination
            page={page}
            totalRooms={filteredRooms.length}
            limit={limit}
          />
        )}
      </div>
    </main>
  );
}
