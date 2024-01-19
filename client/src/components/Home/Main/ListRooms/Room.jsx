import { Star, Tags } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../../ui/Button";

const Room = ({ room }) => {
  const {
    name,
    price,
    url,
    rating,
    _id,
    bookedCount,
    bookingLimit,
    desc,
    facilities,
  } = room;

  const ratingArr = new Array(rating);
  for (let i = 0; i < rating; i++) {
    ratingArr[i] = (i + 1).toString();
  }
  const ratingLeftArr = new Array(5 - rating);
  for (let i = 0; i < 5 - rating; i++) {
    ratingLeftArr[i] = (i + 1).toString();
  }
  return (
    <div>
      <div className="listRoomCard flex gap-4 bg-slate-100 p-2 rounded-md">
        <Link to={`/room/${_id}`} className="img-box">
          <img src={url} alt={name} />
        </Link>
        {/* Card Details */}
        <div className="listRoomCard-details flex flex-col justify-between w-full">
          <h5 className="font-semibold text-lg">
            <Link to={`/room/${_id}`}>{name}</Link>
          </h5>
          {/* Card Body */}
          <div className="card-body grid gap-1 mt-2">
            <p>
              {desc.length > 60 ? (
                <span>{desc.substring(0, 60)}...</span>
              ) : (
                desc
              )}
            </p>
            <div className="flex flex-wrap gap-2 py-2">
              {facilities.map((facility, index) => (
                <span
                  key={index}
                  className="bg-white px-2 rounded-md cursor-pointer flex gap-1 items-center"
                >
                  <Tags size={18} /> {facility}
                </span>
              ))}
            </div>
            {/* Price */}
            <div className="flex gap-2 items-center">
              <span className="text-2xl font-bold text-orange-500">
                {price}
              </span>{" "}
              BDT
            </div>
            <div className="flex gap-1">
              {ratingArr.map((arr, index) => (
                <Star
                  key={index}
                  className="fill-orange-600 stroke-none"
                  size={15}
                />
              ))}
              {ratingLeftArr.map((arr, index) => (
                <Star key={index} className="stroke-orange-600" size={15} />
              ))}
            </div>
          </div>
          {/* Card Footer */}
          <div className="card-footer sm:flex justify-between items-center border-t mt-4 pt-2">
            {bookedCount >= bookingLimit ? (
              <span className="font-semibold text-red-400">
                Sorry! Running at maximum capacity
              </span>
            ) : (
              <Link to={`/room/${_id}`}>
                <Button msg="Book Today" />
              </Link>
            )}
            <div className="flex gap-1 justify-center sm:justify-end mt-2 sm:mt-0">
              <span>{bookedCount}</span>/
              <span className="font-bold">{bookingLimit}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
