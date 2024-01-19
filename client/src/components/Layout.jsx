import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main className="container mx-auto py-8 px-2">{children}</main>
      <Footer />
    </>
  );
}
