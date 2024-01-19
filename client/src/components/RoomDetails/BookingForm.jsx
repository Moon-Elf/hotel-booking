import { useState } from "react";
import { useBookRoomMutation } from "../../features/room/roomApi";
import Button from "../ui/Button";
import Input from "../ui/Input";
const BookingForm = ({ id, user }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    phone: `0${user.phone}`,
  });

  const [bookRoom, { isLoading }] = useBookRoomMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await bookRoom({
      id: id,
      body: {
        _id: user.id,
        name: formData.name,
        phone: formData.phone,
      },
    });
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
          <Button
            msg="Book Now"
            disabled={!formData.name || !formData.phone || isLoading}
          />
        </div>
      </form>
    </>
  );
};

export default BookingForm;
