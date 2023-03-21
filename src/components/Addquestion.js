import React, { useEffect, useState } from "react";
import quoralogo from '../images/quora-logo1.png'
import questionAndAnswers from "./data";
import { Link, useNavigate } from "react-router-dom";
function Addquestion() {

  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  const handleAddQuestion = (event) => {
    event.preventDefault();
    if (question.trim() === "") {
      window.alert("Do not add empty questions.");
      return; // do not add empty questions
    }
    const newQuestion = {
      id: questionAndAnswers.length + 1,
      answeredBy: "",
      questionedBy: "",
      question: question.trim(),
      answers: [],
    };
    questionAndAnswers.push(newQuestion);
   // console.log(questionAndAnswers)
    setQuestion(""); // clear input field
    navigate("/home"); // redirect to main page


  }
  
  
 


  return (
    <>
      <div className="home">
        <img src={quoralogo} />
      </div>

      <div className="addQue ">
        <form onSubmit={handleAddQuestion}>
          QUESTION:<input className="input_text"
            type="text"
            id="question"
            placeholder="Type Your Question here ....."
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
          <div className="btn">
            <span className="nav-item">  <button type="submit">Add question </button></span>
            <span className="nav-item"> <Link to="/home">
              <button type="submit">Cancel</button>
            </Link></span>
          </div>

        </form>
      </div>
    </>
  );
}

export default Addquestion
