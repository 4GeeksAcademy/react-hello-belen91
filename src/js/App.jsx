import { useState } from "react";
import Navbar from "./pages/components/Navbar"
import Footer from "./pages/components/Footer";
import HomePage from "./pages/HomePage";
import CombatPage from "./pages/CombatPage";

export const App = () => {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && <HomePage />}
      {page === "combat" && <CombatPage />}

      <Footer />
    </>
  );
};

