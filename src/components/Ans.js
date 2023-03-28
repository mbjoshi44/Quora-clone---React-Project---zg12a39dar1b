import React, { useState } from "react";
import "../styles/addAns.css";
import { useNavigate } from "react-router-dom";
import questionAndAnswers from "./data";
import quoralogo from '../images/quora_logo1.png'

function Ans() {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();


  const handleAddAnswer = (event) => {
             event.preventDefault();
            
            if (selectedQuestion === "") {
                window.alert("Please select a question.");
                return;
              }
          
    
    
          questionAndAnswers[questionAndAnswers.length-1].answer  = answer;
            setAnswer("");
            alert("your Answer was submitted");
            navigate("/home");
    
        };
    
    





  const handleCancel = () => {
    setAnswer("");
    navigate("/home");
  };

  return (
    <>
    <div className="home">
                <img src={quoralogo} />
            </div>
    <div className="add-answer">
      <h2>Add Answer</h2>
      <form onSubmit={handleAddAnswer}>
        <label htmlFor="question">Question:</label>
        <select
          id="question"
          value={selectedQuestion}
          onChange={(event) => setSelectedQuestion(event.target.value)}
        >
          <option value="">Select a question</option>
          {questionAndAnswers.map((q) => (
            <option key={q.id} value={q.id}>
              {q.question}
            </option>
          ))}
        </select>
        <label htmlFor="answer">Answer:</label>
        <textarea
        
          id="answer"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        ></textarea>
        <div className="button_container">
          <button type="submit">Add Answer</button>
          <button type="submit" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Ans;












