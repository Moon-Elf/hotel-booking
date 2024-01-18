import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetRoomQuery } from "../../features/room/room";

import Details from "../RoomDetails/Details";

const RoomDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetRoomQuery(id);
  const [ratingGot, setRatingGot] = useState([]);
  const [ratingLeft, setRatingLeft] = useState([]);

  useEffect(() => {
    if (!isError && !isLoading) {
      const ratingArr = new Array(data.rating);
      for (let i = 0; i < data.rating; i++) {
        ratingArr[i] = (i + 1).toString();
      }
      setRatingGot(ratingArr);
      const ratingLeftArr = new Array(5 - data.rating);
      for (let i = 0; i < 5 - data.rating; i++) {
        ratingLeftArr[i] = (i + 1).toString();
      }
      setRatingLeft(ratingLeftArr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isError]);

  return (
    !isLoading &&
    !isError && (
      <Details room={data} ratingGot={ratingGot} ratingLeft={ratingLeft} />
    )
  );
};

export default RoomDetails;
