import { ChevronRight, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <section className="bg-slate-950 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] rounded-md shadow-md">
      <div className="bg-blue-500/10 backdrop-blur-sm py-8 px-4 text-center lg:py-16 rounded-md">
        <Link
          to="/"
          className="inline-flex items-center p-1 pe-2 mb-7 text-sm rounded-full bg-blue-950 text-blue-300 hover:bg-blue-900"
        >
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">
            New
          </span>{" "}
          <span className="text-sm font-medium">Checkout all our rooms</span>
          <ChevronRight size={15} />
        </Link>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
          The best <span className="text-blue-500">HOT</span>EL in Dhaka
        </h1>
        <p className="mb-8 lg:text-xl sm:px-16 lg:px-32 text-gray-200">
          The best hotel in Dhaka offers a luxurious stay with elegant rooms,
          exceptional amenities, and impeccable service. Enjoy stunning city
          views, world-class dining, a fitness center, spa, and rooftop pool.
          Experience the epitome of hospitality in Dhaka for an unforgettable
          stay.
        </p>
        <form className="w-full max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <Smartphone className="stroke-blue-500" size={20} />
            </div>
            <input
              type="number"
              className="block w-full p-4 ps-10 text-sm rounded-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Phone number here..."
              required
            />
            <button
              type="submit"
              className="text-white absolute top-1/2 right-2 -translate-y-1/2 rounded-md text-sm px-4 py-2 bg-blue-500 hover:bg-blue-700 focus:ring-blue-800"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Auth;
