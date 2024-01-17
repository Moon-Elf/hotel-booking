import Facility from "./Facility";

export const Facilities = ({ data }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {data.map((item) => (
        <Facility key={item._id} facility={item} />
      ))}
    </div>
  );
};

export default Facilities;
