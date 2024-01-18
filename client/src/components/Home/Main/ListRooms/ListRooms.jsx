import Error from "../../../ui/Error";
import Room from "./Room";

const ListRooms = ({ rooms }) => {
  return (
    <div className="grid gap-4 mt-4">
      {rooms.length ? (
        rooms.map((room) => <Room key={room._id} room={room} />)
      ) : (
        <Error message="Nothing Found" />
      )}
    </div>
  );
};

export default ListRooms;
