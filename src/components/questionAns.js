import React from "react";
import questionAndAnswers from "./data";
import Home from "./Home";
import '../styles/App.css';
function Card(props){
    return(
        <>
        
        <div className="singleans">

        <h2>{props.answeredBy}</h2>
        <h3>{props.question}</h3>
        <p>{props.answer}</p>
        
        </div>
        </>
    )
}

export default Card