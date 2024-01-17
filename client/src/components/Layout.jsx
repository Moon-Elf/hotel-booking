import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8 px-2">{children}</main>
      <Footer />
    </>
  );
}
