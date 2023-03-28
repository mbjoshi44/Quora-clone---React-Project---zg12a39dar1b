import React, { useEffect, useState } from 'react'
import questionAndAnswers from './data';
export const DataAppContext = React.createContext();

const DataApp = (props) => {

   
    
    const[search, setSearch] = useState("");


    const filteredQA = search
    ? questionAndAnswers.filter((q) => {
        const question = q.question.toLowerCase();
        const answer = q.answer.toLowerCase();
        const searchTerm = search.toLowerCase();
        return question.includes(searchTerm) || answer.includes(searchTerm);
      })
    : questionAndAnswers;







    useEffect(() => {
        console.log('Context Data - ', appState);
    })

    return (
        <>
            <DataAppContext.Provider value={filteredQA}>
                {props.children}
            </DataAppContext.Provider>

        </>
    )
}

export default DataApp