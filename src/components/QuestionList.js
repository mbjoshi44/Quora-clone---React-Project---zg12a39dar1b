import React from "react";
import { Link } from "react-router-dom";
import questionAndAnswers from "./data";
import "../styles/list.css"
function QuestionList() {
  return (
    <div>
      <h2>List of Questions</h2>
      <ul>
        {questionAndAnswers.map((q) => (
          <Link to='/ans'><li key={q.id}>{q.question}</li></Link>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;