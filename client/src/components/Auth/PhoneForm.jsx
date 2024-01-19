import { Loader2, Smartphone } from "lucide-react";
import { useCheckPhoneMutation } from "../../features/auth/authApi";

const PhoneForm = ({ setData, data, setStep }) => {
  const [checkPhone, { isLoading }] = useCheckPhoneMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await checkPhone({ phone: data.phone });
      if (res.data?.status === "yes") {
        setData((prev) => ({ ...prev, name: res.data.name }));
        setStep(2);
      } else if (res.error?.data.status === "no") setStep(3);
    } catch (err) {
      console.log(err.error);
    }
  };
  return (
    <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <Smartphone className="stroke-blue-500" size={20} />
        </div>
        <input
          type="number"
          className="block w-full p-4 ps-10 text-sm rounded-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="01766XXXX73"
          required
          value={data.phone}
          onChange={(e) =>
            setData((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
        <button
          type="submit"
          className="text-white absolute top-1/2 right-2 -translate-y-1/2 rounded-md text-sm px-4 py-2 bg-blue-500 hover:bg-blue-700 focus:ring-blue-800 disabled:cursor-not-allowed disabled:bg-slate-500"
          disabled={data.phone.length != 11 || isLoading}
        >
          {isLoading ? <Loader2 className="animate-spin" /> : "Continue"}
        </button>
      </div>
    </form>
  );
};

export default PhoneForm;
