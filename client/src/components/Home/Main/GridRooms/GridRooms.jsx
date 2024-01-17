import Room from "./Room";

const GridRooms = ({ rooms }) => {
  return rooms.map((room) => <Room key={room._id} room={room} />);
};

export default GridRooms;
