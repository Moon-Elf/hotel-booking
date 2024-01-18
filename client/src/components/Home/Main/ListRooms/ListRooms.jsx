import { useSelector } from "react-redux";
import Room from "./Room";

const ListRooms = ({ rooms }) => {
  const { search, selectedRoomFacilities, sort } = useSelector(
    (state) => state.filter
  );

  return (
    <div className="grid gap-4 mt-4">
      {rooms.map((room) => (
        <Room key={room._id} room={room} />
      ))}
    </div>
  );
};

export default ListRooms;
