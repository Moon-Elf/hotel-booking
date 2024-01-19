import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
const BookingForm = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    phone: `0${user.phone}`,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="sm:max-w-[400px] w-full" onSubmit={handleSubmit}>
        <h4 className="font-semibold mb-2">
          Welcome back <span className="font-bold">{user.name}</span>.{" "}
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
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className="mt-2">
          <label htmlFor="phone">Billing Phone</label>
          <Input
            type="number"
            placeholder="Enter the billing phone number"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </div>
        <div className="mt-2">
          <Button msg="Book Now" disabled={!formData.name || !formData.phone} />
        </div>
      </form>
    </>
  );
};

export default BookingForm;
