import logo from "./logo.svg";
import "./App.css";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Thanks from "./components/Thanks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [questionPosition, setQuestionPosition] = useState(0);
  const [score, setScore] = useState(0);
  return (
    <div className="App h-screen flex flex-col">
      <Nav />
      
      <main className="grow flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/quiz"
            element={
              <Quiz
                questionPosition={questionPosition}
                setQuestionPosition={setQuestionPosition}
                setScore={setScore}
              />
            }
          />
          <Route path="/end" element={<Thanks score={score} />} />
        </Routes>
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
