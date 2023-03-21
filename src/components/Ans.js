import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import quoralogo from '../images/quora-logo1.png'
import questionAndAnswers from "./data";
function Ans() {
    const [selectedQuestion, setSelectedQuestion] = useState("");
    const [answer, setAnswer] = useState([]);

    const navigate = useNavigate();

    const handleAddAnswer = (event) => {
        event.preventDefault();

        const qu = questionAndAnswers.find((q) => q.id === selectedQuestion);
        const newAnswer = {
            question: qu ,
            id: '',
            answer: answer,
        };
        questionAndAnswers.push(newAnswer);
        setAnswer("");
        navigate("/home");


    };


   

    const cancel = () => {
        setAnswer("");
        navigate("/home");
    };
    return (
        <>
            <div className="home">
                <img src={quoralogo} />
            </div>

            <div className="addQue">
                <div className="quee">
                    <div >
                        <h2>Select question</h2>
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
                            <div className="btn">
                                <span > <button type="submit">Add Answer</button></span>
                                <span > <button type="submit" onClick={cancel} >Cancel</button></span>
                            </div>

                        </form>




                    </div>

                </div>

            </div>
        </>
    )
}

export default Ans;