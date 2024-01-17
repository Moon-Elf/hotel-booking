import { Star, Tags } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../../ui/Button";

const Room = ({ room }) => {
  const ratingArr = new Array(room.rating);
  for (let i = 0; i < room.rating; i++) {
    ratingArr[i] = (i + 1).toString();
  }
  return (
    <div>
      <div className="listRoomCard flex gap-4 bg-slate-100 p-2 rounded-md">
        <Link to="/" className="img-box">
          <img src={room.url} alt={room.name} />
        </Link>
        {/* Card Details */}
        <div className="listRoomCard-details flex flex-col justify-between w-full">
          <h5 className="font-semibold text-lg">{room.name}</h5>
          {/* Card Body */}
          <div className="card-body grid gap-1 mt-2">
            <p>
              {room.desc.length > 10 ? (
                <span>{room.desc.substring(0, 60)}...</span>
              ) : (
                room.desc
              )}
            </p>
            <div className="flex flex-wrap gap-2 py-2">
              {room.facilities.map((facility, index) => (
                <span
                  key={index}
                  className="bg-white px-2 rounded-md cursor-pointer flex gap-1 items-center"
                >
                  <Tags size={18} /> {facility}
                </span>
              ))}
            </div>
            <div className="flex gap-1">
              {ratingArr.map((arr, index) => (
                <Star
                  key={index}
                  className="fill-orange-600 stroke-none"
                  size={15}
                />
              ))}
            </div>
          </div>
          {/* Card Footer */}
          <div className="card-footer flex justify-between border-t mt-4 pt-4">
            <Button secondary msg="Book Today" />
            <div className="flex gap-1">
              <span>{room.bookedCount}</span>/
              <span className="font-bold">{room.bookingLimit}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
