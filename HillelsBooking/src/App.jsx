import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import SearchPage from "@/pages/SearchPage";
import HotelsPage from "@/pages/HotelsPage";
import AboutPage from "@/pages/AboutPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="content-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
