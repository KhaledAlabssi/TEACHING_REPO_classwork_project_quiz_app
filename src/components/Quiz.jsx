import React from "react";
import q from "../data/quiz.json";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Quiz({ questionPosition, setQuestionPosition, setScore}) {


  const navigate = useNavigate();

  function clickHandler(answer) {
    console.log(answer);
    if (answer == q[questionPosition].correctAnswer) {
      toast("Answer was correct!");
      setScore(i => i+1)
    } else {
      toast("Answer was wrong!");
    }

    if(questionPosition + 1 == q.length){
        setQuestionPosition(i => 0)
        setScore(i => 0)

        navigate("/end");

    } else {
        setQuestionPosition(i => i + 1)

    }


  }

  return (
    <div className="card w-96 bg-primary text-primary-content text-center">
      <div className="card-body">
        <h2 className="card-title">{q[questionPosition].question}</h2>
        {q[questionPosition].answers.map((answer) => (
          <p onClick={() => clickHandler(answer)} className="btn">
            {String(answer)}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
