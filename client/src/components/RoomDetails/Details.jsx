import { Star, Tags } from "lucide-react";
import BookingForm from "./BookingForm";

const Details = ({ room, ratingGot, ratingLeft }) => {
  const { name, url, price, desc, facilities, bookedCount, bookingLimit } =
    room;
  return (
    <div className="listRoomCard grid gap-2 bg-slate-100 p-2 rounded-md mb-4 relative break-inside-avoid">
      <div className="flex gap-4">
        <div className="max-w-[300px]">
          <img src={url} alt={name} className="object-left" />
        </div>
        <div className="w-full grid gap-4">
          <div className="w-full h-60">
            <img src={url} alt={name} className="object-top" />
          </div>
          <div className="w-full h-60">
            <img src={url} alt={name} />
          </div>
          <div className="w-full h-60">
            <img src={url} alt={name} className="object-bottom" />
          </div>
        </div>
        <div className="max-w-[300px]">
          <img src={url} alt={name} className="object-right" />
        </div>
      </div>
      {/* Card Details */}
      <div className="listRoomCard-details">
        <h5 className="font-semibold text-2xl">{name}</h5>
        {/* Card Body */}
        <div className="card-body grid gap-1 mt-2">
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
            <span className="text-2xl font-bold text-orange-500">{price}</span>{" "}
            BDT
          </div>
          <p>{desc}</p>
          <div className="flex gap-1">
            {ratingGot.map((arr, index) => (
              <Star
                key={index}
                className="fill-orange-600 stroke-none"
                size={15}
              />
            ))}
            {ratingLeft.map((arr, index) => (
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
            <BookingForm />
          )}
          <div className="flex gap-1 justify-center sm:justify-end mt-2 sm:mt-0">
            <span>{bookedCount}</span>/
            <span className="font-bold">{bookingLimit}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
