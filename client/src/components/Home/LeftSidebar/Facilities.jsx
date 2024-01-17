import Facility from "./Facility";

export const Facilities = ({ data }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {data.map((item) => (
        <Facility key={item._id} facility={item} />
      ))}
    </div>
  );
};

export default Facilities;
