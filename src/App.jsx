import { useState } from "react";
import HomePage from "./HomePage";
import AnalysisPage from "./AnalysisPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Navigation handlers
  const handleTryAI = () => {
    setCurrentPage("analysis");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  return (
    <>
      {currentPage === "home" && <HomePage onTryAI={handleTryAI} />}
      {currentPage === "analysis" && <AnalysisPage onBackToHome={handleBackToHome} />}
    </>
  );
}

export default App;
