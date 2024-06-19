import { Star, Tags } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Error from "../ui/Error";
import BookingForm from "./BookingForm";
import ImageModal from "./ImageModal";

const Details = ({ id, room, ratingGot, ratingLeft }) => {
  const [modal, setModal] = useState(false);
  const [formedArr, setFormedArr] = useState([]);
  const user = useSelector((state) => state.user);

  const {
    name,
    url,
    price,
    description,
    facilities,
    bookedCount,
    bookingLimit,
    users,
  } = room;

  useEffect(() => {
    const arr = users.map((obj) => obj._id).join("-");
    setFormedArr(arr);
  }, [users]);

  let tags = facilities.map((facility, index) => (
    <span
      key={index}
      className="bg-white px-2 rounded-md cursor-pointer flex gap-1 items-center"
    >
      <Tags size={18} /> {facility}
    </span>
  ));

  return (
    <div className="listRoomCard grid gap-2 bg-slate-100 p-2 rounded-md mb-4 relative break-inside-avoid">
      <div className="flex gap-4">
        <div className="max-w-[400px] mx-auto md:max-w-[300px]">
          <img
            src={url}
            alt={name}
            className="object-left cursor-pointer"
            onClick={() => setModal(true)}
          />
        </div>
        <div className="w-full hidden gap-4 md:grid">
          <div className="w-full h-60">
            <img
              src={url}
              alt={name}
              className="object-top cursor-pointer"
              onClick={() => setModal(true)}
            />
          </div>
          <div className="w-full h-60">
            <img src={url} alt={name} onClick={() => setModal(true)} />
          </div>
          <div className="w-full h-60">
            <img
              src={url}
              alt={name}
              className="object-bottom cursor-pointer"
              onClick={() => setModal(true)}
            />
          </div>
        </div>
        <div className="max-w-[300px] hidden md:block">
          <img
            src={url}
            alt={name}
            className="object-right cursor-pointer"
            onClick={() => setModal(true)}
          />
        </div>
      </div>
      {/* Card Details */}
      <div className="listRoomCard-details">
        <h5 className="font-semibold text-2xl">{name}</h5>
        {/* Card Body */}
        <div className="card-body grid gap-1 mt-2">
          <div className="flex flex-wrap gap-2 py-2">{tags}</div>
          {/* Price */}
          <div className="flex gap-2 items-center">
            <span className="text-2xl font-bold text-orange-500">{price}</span>{" "}
            BDT
          </div>
          <p>{description}</p>
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
          {formedArr.includes(user.id) ? (
            <span className="font-semibold text-green-600">
              Thanks for booking the room.
            </span>
          ) : bookedCount >= bookingLimit ? (
            <span className="font-semibold text-red-400">
              Sorry! Running at maximum capacity
            </span>
          ) : (
            <>
              {user.phone ? (
                <BookingForm id={id} user={user} />
              ) : (
                <Link to="/auth">
                  <Error message="Login now to book your room" />
                </Link>
              )}
            </>
          )}
          <div className="flex gap-1 justify-center sm:justify-end mt-2 sm:mt-0">
            <span>{bookedCount}</span>/
            <span className="font-bold">{bookingLimit}</span>
          </div>
        </div>
      </div>
      {modal && (
        <ImageModal tags={tags} url={url} name={name} setModal={setModal} />
      )}
    </div>
  );
};

export default Details;
