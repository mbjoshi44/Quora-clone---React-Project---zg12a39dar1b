import React, { useState } from "react";
import "../styles/addQ.css";
import { useNavigate } from "react-router-dom";
import questionAndAnswers from "./data";
import quoralogo from '../images/quora_logo1.png'

function AddQuestion() {
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  function handleAddQuestion(event) {
    event.preventDefault();
    if (question.trim() === "") {
      window.alert("Do not add empty questions.");
      return; 
    }

    var users = JSON.parse(localStorage.getItem("users"))
    const newQuestion = {
      id: questionAndAnswers.length + 1,
      answeredBy: "xyz zbd",
      questionedBy: "fjdd dnn",
      question: question.trim(),
      answers: [],
      username: `${users[users.length-1].username}`,
      src: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 99) + 1}.jpg` 
    };
     questionAndAnswers.push(newQuestion);
    setQuestion(""); 
    alert("Your Queston Added Succesfully")
    navigate("/home")
  
  }
  

  const handleCancel = () => {
    
    navigate("/home");
  };

  return (
    <>
    <div className="home">
                <img src={quoralogo} />
            </div>
    <div className="add-question">
    
      <h2>Add Question</h2>
      <form onSubmit={handleAddQuestion}>
        <label htmlFor="question">Question:</label>
        <input
          className="input_text"
          type="text"
          id="question"
          placeholder="Type Your Question here ....."
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          autoComplete="off"
        />
        <div className="button-container">
          <button type="submit">Add Question</button>
          <button type="submit" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default AddQuestion;
