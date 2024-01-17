import Room from "./Room";

const ListRooms = ({ rooms }) => {
  return (
    <div className="grid gap-4">
      {rooms.map((room) => (
        <Room key={room._id} room={room} />
      ))}
    </div>
  );
};

export default ListRooms;
