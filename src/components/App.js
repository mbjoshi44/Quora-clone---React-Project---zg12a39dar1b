import React from 'react'
import '../styles/App.css';
// import Addquestion from './Addquestion';
import Ans from './Ans';
import LoginQ from './LoginQ';
import Home from './Home';
import Rag from './Ragistration';
import AddQuestion from './Addquestion';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {

  return (
    <>


      <div id="main">
        <BrowserRouter>
         
          <Routes>
            <Route path='/' element={<LoginQ/>} />
            <Route path='/home' element={<Home/>} />
            {/* <Route path='/addquestion' element={<Addquestion />} /> */}
            <Route path='/ans' element={<Ans />} />
            <Route path='/AddQuestion' element={<AddQuestion />} />
            <Route path='/login' element={<LoginQ />} />
            <Route path='/rag' element={<Rag />} />
          </Routes>
        
        </BrowserRouter>
      </div>
    </>

  )
}


export default App;
