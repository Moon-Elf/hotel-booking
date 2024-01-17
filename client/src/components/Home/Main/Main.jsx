import { useState } from "react";
import { useGetRoomsQuery } from "../../../features/room/room";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import GridRooms from "./GridRooms/GridRooms";
import ListRooms from "./ListRooms/ListRooms";
import MainHeaderFilterBtns from "./MainHeaderFilterBtns";

export default function Main() {
  const [viewMode, setViewMode] = useState("list");

  const { data, isLoading, isError, error } = useGetRoomsQuery();

  return (
    <main className="w-full">
      <div className="main-header p-4 flex justify-between items-center border-b">
        <h2 className="font-semibold text-2xl">Rooms</h2>
        <MainHeaderFilterBtns setViewMode={setViewMode} />
      </div>
      <div className="p-4">
        {isLoading && <Loader />}
        {!isLoading && isError && <Error message={error.status} />}
        {!isLoading && !isError && viewMode === "list" && (
          <ListRooms rooms={data} />
        )}
        {!isLoading && !isError && viewMode === "grid" && (
          <GridRooms rooms={data} />
        )}
      </div>
    </main>
  );
}
