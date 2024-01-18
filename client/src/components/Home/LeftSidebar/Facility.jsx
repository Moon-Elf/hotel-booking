import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedRoomFacilities,
  removeSelectedRoomFacilities,
} from "../../../features/filter/filterSlice";

const Facility = ({ facility }) => {
  const [selected, setSelected] = useState(true);
  const { selectedRoomFacilities } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    const formedArr = selectedRoomFacilities.map((obj) => obj.slug).join("-");
    if (!formedArr.includes(facility.slug)) setSelected(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setSelected(!selected);
    if (selected) {
      dispatch(removeSelectedRoomFacilities(facility._id));
    } else {
      dispatch(addSelectedRoomFacilities(facility));
    }
  };
  return (
    <div
      className={`bg-white px-2 py-1 rounded-md cursor-pointer hover:bg-slate-200/50 border-2 ${
        selected ? " border-green-500" : "border-transparent"
      }`}
      onClick={handleClick}
    >
      {facility.name}
    </div>
  );
};

export default Facility;
