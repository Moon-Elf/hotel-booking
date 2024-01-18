import Button from "../ui/Button";
import Input from "../ui/Input";
const BookingForm = () => {
  return (
    <>
      <form className="sm:max-w-[400px] w-full">
        <h4 className="font-semibold mb-2">
          Welcome back <span>name</span>.{" "}
          <p className="font-normal text-sm">
            Fill the form below to confirm booking.
          </p>
        </h4>
        <div>
          <label htmlFor="name">Billing Name</label>
          <Input
            type="text"
            placeholder="Enter the billing name"
            id="name"
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="phone">Billing Phone</label>
          <Input
            type="number"
            placeholder="Enter the billing phone number"
            id="phone"
            required
          />
        </div>
        <div className="mt-2">
          <Button msg="Book Now" secondary />
        </div>
      </form>
    </>
  );
};

export default BookingForm;
