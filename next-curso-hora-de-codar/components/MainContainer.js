import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainContainer({ children }) {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 h-full text-slate-400 flex flex-col justify-between items-center">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
