import Header from "./Header";
import Footer from "./Footer";
import PulseSVG from "./PulseSVG";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-primary font-sans">
      <Header />
      {children}
      <PulseSVG />
      <Footer />
    </div>
  );
}
