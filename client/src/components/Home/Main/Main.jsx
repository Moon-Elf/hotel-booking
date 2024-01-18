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
  const [limit] = useState(6);
  const [viewMode, setViewMode] = useState("grid");
  const [rooms, setRooms] = useState([]);

  const { data, isLoading, isError, error } = useGetRoomsQuery();

  const [loaded, setLoaded] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [orderedRooms, setOrderedRooms] = useState(rooms);
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
      const newRooms = _.cloneDeep(rooms);
      newRooms.sort((a, b) => a.price - b.price);
      setOrderedRooms(newRooms);
    } else if (sort === "desc") {
      const newRooms = _.cloneDeep(rooms);
      newRooms.sort((a, b) => b.price - a.price);
      setOrderedRooms(newRooms);
    } else if (sort === "default") {
      setOrderedRooms(rooms);
    }
  }, [sort, rooms]);

  useEffect(() => {
    sortRooms();
  }, [sortRooms]);

  let filteredRooms = orderedRooms
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

  // Set current page
  useEffect(() => {
    if (!isLoading && !isError && data.length) {
      const newArr = _.cloneDeep(data);
      setRooms(newArr.slice(page - 1, limit));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, isLoading, isError]);

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
          <ListRooms rooms={filteredRooms} />
        )}
        {!isLoading && !isError && viewMode === "grid" && loaded && (
          <GridRooms rooms={filteredRooms} />
        )}
        {/* Pagination */}
        {!isLoading && !isError && filteredRooms.length > 2 && (
          <Pagination page={page} setPage={setPage} totalRooms={data.length} />
        )}
      </div>
    </main>
  );
}
