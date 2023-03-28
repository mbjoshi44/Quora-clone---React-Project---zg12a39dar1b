import React, { useState, createContext, } from "react";
import "../styles/header.css"
import { useNavigate } from "react-router-dom";
import questionAndAnswers from "./data";
import QuestionAnswerList from "./QuestionAnswerList";
import quoralogo from '../images/quora_logo1.png'

export const FilteredDataContext = createContext([]);

function Header() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredQA = search
    ? questionAndAnswers.filter((q) => {
        const question = q.question.toLowerCase();
        const answer = q.answer.toLowerCase();
        const searchTerm = search.toLowerCase();
        return question.includes(searchTerm) || answer.includes(searchTerm);
      })
    : questionAndAnswers;

  function handleAddQ() {
    navigate("/addQuestion");
  }
  function hendleAnsQ() {
    navigate("/ans");
  }
  function hendleLogout() {
    navigate("/");
  }

  return (
    <>
      <FilteredDataContext.Provider value={filteredQA}>
        <div className="header_container">
          <div className="home">
                <img src={quoralogo} />
            </div>
          <div className="header_search">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          <div className="header_btn">
            <button onClick={handleAddQ}>Add Question</button>
            <button onClick={hendleAnsQ}>Answer Question</button>
            <button onClick={hendleLogout}>Log out</button>
          </div>
        </div>
        <QuestionAnswerList />
      </FilteredDataContext.Provider>
    </>
  );
}

export default Header;
