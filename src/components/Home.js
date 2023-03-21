import React, { useState } from "react";
import '../styles/App.css';

import quoralogo from '../images/quora-logo1.png'
import { Link } from "react-router-dom";
import questionAndAnswers from "./data";

import Card from "./questionAns";

console.log(questionAndAnswers[1].answeredBy);

function Home() {

    const[result, setResult] = useState(null)
    const [inputValue, setInputValue] = useState("");
   const handleChange =(event) =>{
    setInputValue(event.target.value);
   }

    const handleSeach = (event) => {
       
        event.preventDefault();
        let finalResult = [];
        for(let qa of questionAndAnswers){
            if(qa.question.toLowerCase() == inputValue.toLowerCase()){
                finalResult.push(qa.question)
            }
        }
        setResult(finalResult);
        setInputValue("")
      };


    return (
        <>
            <div className="home">
                <img src={quoralogo} />
                <input type="text" placeholder="search for your question ..."  onChange={handleChange} onBlur={handleSeach} />

                <span className="nav-item" > <Link to="/addquestion"><button type="submit">Add Question</button></Link></span>
                <span className="nav-item" > <Link to="/ans"><button type="submit">Add Answer</button></Link></span>
                <span className="nav-item" > <Link to="/login"><button type="submit">login</button></Link></span>
            </div>
            
            {/* <p>{filteredQA}</p> */}

            {/* Question and Answer */}


            <div className="quinside">
                {result &&
                    result.map((question) => (
                        <div >{question}</div>
                    ))}
            </div>

            <div className="quesAns1">
                <div className="quesAns">
                    {
                        questionAndAnswers.map((val) => {
                            return (
                                <div className="quinside">
                                    <Card answeredBy={val.answeredBy}
                                        question={val.question}
                                        answer={val.answer}
                                      
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="questions">

                    
        {questionAndAnswers.map((q) => (
            <div className="quinside">
          <Link to='/ans'>{q.question}</Link>
          </div>
        ))}
      

                </div>
            </div>
        </>
    )
}
export default Home;