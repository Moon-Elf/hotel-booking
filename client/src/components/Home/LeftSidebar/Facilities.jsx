import { useSelector } from "react-redux";
import Facility from "./Facility";

export const Facilities = ({ data }) => {
  const state = useSelector((state) => state.filter);
  console.log(state);
  return (
    <div className="flex gap-2 flex-wrap">
      {data.map((item) => (
        <Facility key={item._id} facility={item} />
      ))}
    </div>
  );
};

export default Facilities;
