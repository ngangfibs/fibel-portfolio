import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { Nav } from "@/components/Nav";
import { Footer, FooterCTA } from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Works from "@/pages/Works";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <FooterCTA />
      <Footer />
    </div>
  );
}
