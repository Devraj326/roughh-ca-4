// import React, { useEffect, useState } from "react";
// import "./App.css";
// import questions from "./questions";
// import Result from "./components/Result";
// import QuestionBox from "./components/QuestionBox";
// import Navbar from "./components/Navbar";



// function App() {

//   return (
//     <div>
//       <Navbar/>
//       <QuizContext/>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { QuizProvider } from './QuizContext';
import QuestionBox from './components/QuestionBox';
import Navbar from './components/Navbar';
import "./App.css";

const App = () => {
  return (
    
    <QuizProvider>
      <Navbar/>
      <QuestionBox />
    </QuizProvider>
  );
};

export default App;


