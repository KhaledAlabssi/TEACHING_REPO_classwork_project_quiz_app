import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Quiz({
  displyAlert,
  setTest,
  questionPosition,
  setQuestionPosition,
  setScore,
  test,
}) {
  const navigate = useNavigate();
  const [timer, settimer] = useState(0);

  function clickHandler(answer) {
    console.log(answer);
    if (answer == test.questions[questionPosition].correctAnswer) {
      // toast("Answer was correct!");
      displyAlert("Correct Answer")
     
      setScore((i) => i + 1);
    } else {
      // toast("Answer was wrong!");
      displyAlert("Wrong Answer")
     

    }

    if (questionPosition + 1 == test.questions.length) {
      setQuestionPosition((i) => 0);

      navigate("/end");
    } else {
      setQuestionPosition((i) => i + 1);
    }
  }

  useEffect(() => {
    const int = setInterval(() => settimer((i) => i + 1), 1000);

    const out = setTimeout(() => {
      navigate("/end");
    }, 10000);

    

    return () => {
      settimer(0);
      clearInterval(int);
      clearTimeout(out);
    };
  }, [questionPosition]);

  return (
    <div className="card w-96 bg-primary text-primary-content text-center">
      <div className="btn">{timer} of 10</div>
      <div className="card-body">
        <h2 className="card-title">
          {test.questions[questionPosition].question}
        </h2>
        {test.questions[questionPosition].answers.map((answer) => (
          <p onClick={() => clickHandler(answer)} className="btn">
            {String(answer)}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
