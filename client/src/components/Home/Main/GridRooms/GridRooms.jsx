import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Error from "../../../ui/Error";
import Room from "./Room";

const GridRooms = ({ rooms }) => {
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

  let content = orderedRooms
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
    })
    .map((room) => <Room key={room._id} room={room} />);

  return (
    <div className="md:columns-2 lg:columns-3  gap-4 mt-4">
      {loaded && content.length ? content : <Error message="Nothing Found" />}
    </div>
  );
};

export default GridRooms;
