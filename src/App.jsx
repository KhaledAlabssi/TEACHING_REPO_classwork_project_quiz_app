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
import data from "./data/quiz.json";

function App() {
  const [questionPosition, setQuestionPosition] = useState(0);
  const [score, setScore] = useState(0);
  const [test, setTest] = useState({});
  const [alert, setAlert] = useState({show: false, message: ""});

  function displyAlert (msg) {
    setAlert({show: true, message: msg})

    setTimeout(() => {
      setAlert({show: false, message: ""})
    }, 2000);
  }




  return (
    <div className="App h-screen flex flex-col">
      <Nav />
      {alert.show && (
        <div role="alert" className={alert.message == "Wrong Answer"? "alert alert-error absolute " : "alert alert-success absolute "}>
          <span>{alert.message}</span>
        </div>
      )}

      <main className="grow flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home data={data} setTest={setTest} />} />
          <Route
            path="/quiz"
            element={
              <Quiz
                displyAlert={displyAlert}
                questionPosition={questionPosition}
                setQuestionPosition={setQuestionPosition}
                setScore={setScore}
                test={test}
                setTest={setTest}
              />
            }
          />
          <Route
            path="/end"
            element={
              <Thanks setTest={setTest} setScore={setScore} score={score} />
            }
          />
        </Routes>
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
