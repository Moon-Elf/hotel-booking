import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetRoomsQuery } from "../../../features/room/room";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import GridRooms from "./GridRooms/GridRooms";
import ListRooms from "./ListRooms/ListRooms";
import MainHeaderFilterBtns from "./MainHeaderFilterBtns";
import Pagination from "./Pagination";

export default function Main() {
  const [page, setPage] = useState(1);
  const [limit] = useState(1);
  const [viewMode, setViewMode] = useState("grid");

  const { data, isLoading, isError, error } = useGetRoomsQuery();

  const [loaded, setLoaded] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [orderedRooms, setOrderedRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const { search, selectedRoomFacilities, sort } = useSelector(
    (state) => state.filter
  );
  useEffect(() => {
    const formedArr = selectedRoomFacilities.map((obj) => obj.slug).join("-");
    setSelectedTags(formedArr);
    setLoaded(true);
  }, [selectedRoomFacilities]);

  const sortRooms = useCallback(() => {
    if (sort === "asc") {
      const newRooms = _.cloneDeep(data);
      newRooms.sort((a, b) => a.price - b.price);
      setOrderedRooms(newRooms);
    } else if (sort === "desc") {
      const newRooms = _.cloneDeep(data);
      newRooms.sort((a, b) => b.price - a.price);
      setOrderedRooms(newRooms);
    } else if (sort === "default") {
      setOrderedRooms(data);
    }
  }, [sort, data]);

  const filterRoomsFunc = useCallback(() => {
    if (orderedRooms) {
      const arr = orderedRooms
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
    }
  }, [search, selectedTags, orderedRooms]);

  useEffect(() => {
    sortRooms();
    filterRoomsFunc();
  }, [sortRooms, filterRoomsFunc]);

  return (
    <main className="w-full">
      <div className="main-header px-0 py-4 sm:p-4 flex justify-between items-center border-b">
        <h2 className="font-semibold text-2xl">Rooms</h2>
        <MainHeaderFilterBtns viewMode={viewMode} setViewMode={setViewMode} />
      </div>
      <div className="sm:p-4">
        {isLoading && <Loader />}
        {!isLoading && isError && <Error message={error.status} />}
        {!isLoading && !isError && viewMode === "list" && loaded && (
          <ListRooms page={page} limit={limit} rooms={filteredRooms} />
        )}
        {!isLoading && !isError && viewMode === "grid" && loaded && (
          <GridRooms page={page} limit={limit} rooms={filteredRooms} />
        )}
        {/* Pagination */}
        {!isLoading && !isError && filteredRooms.length >= limit && (
          <Pagination
            page={page}
            setPage={setPage}
            totalRooms={filteredRooms.length}
            limit={limit}
          />
        )}
      </div>
    </main>
  );
}
