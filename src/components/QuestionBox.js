// import React from 'react'

// export default function QuestionBox() {
//   return (
//     <div>

//     </div>
//   )
// }

// import React, { useState } from 'react';
// import questions from '../questions';

// const QuizApp = () => {
//   const [questionsSequence, setQuestionSequence] = useState(0);
//   const [marks, setMarks] = useState(0);

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setMarks(marks + 1);
//     }

//     const nextQuestion = questionsSequence + 1;
//     if (nextQuestion < questions.length) {
//       setQuestionSequence(nextQuestion);
//     } else {
//       // Handle quiz completion here if needed
//     }
//   };

//   return (
//     <div>
//       <h1>Quiz App</h1>
//       {questionsSequence < questions.length ? (
//         <>
//           <h2>{questions[questionsSequence].text}</h2>
//           {questions[questionsSequence].options.map((option) => (
//             <button
//               key={option.id}
//               onClick={() => handleAnswer(option.isCorrect)}
//             >
//               {option.text}
//             </button>
//           ))}
//         </>
//       ) :( nul<Result marks={marks} totalQuestions={questions.length} />)}
//     </div>
//   );
// };

// export default QuizApp;


// import React, { useState } from 'react';
// import questions from '../questions';
// import Result from './Result';

// const QuizApp = () => {
//   const [questionsSequence, setQuestionSequence] = useState(0);
//   const [marks, setMarks] = useState(0);

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setMarks(marks + 1);
//     }

//     const nextQuestion = questionsSequence + 1;
//     if (nextQuestion < questions.length) {
//       setQuestionSequence(nextQuestion);
//     } else {
//       // Handle quiz completion here if needed
//       setQuestionSequence(-1); // Reset question sequence to indicate quiz completion
//     }
//   };

//   return (
//     <div>
//       <h1>Quiz App</h1>
//       {questionsSequence >= 0 ? (
//         <>
//           <h2>{questions[questionsSequence].text}</h2>
//           {questions[questionsSequence].options.map((option) => (
//             <button
//               key={option.id}
//               onClick={() => handleAnswer(option.isCorrect)}
//             >
//               {option.text}
//             </button>
//           ))}
//         </>
//       ) : (
//         <Result marks={marks} totalQuestions={questions.length} />
//       )}
//     </div>
//   );
// };

// export default QuizApp;















// import React, { useState } from 'react';
// import questions from '../questions';
// import { useQuizContext } from '../QuizContext';
// import Result from './Result';
// import './QuestionBox.css';

// const QuizApp = () => {
//   const { marks, setMarks, totalQuestions, setTotalQuestions } = useQuizContext();
//   const [questionsSequence, setQuestionSequence] = useState(0);
//   const [isQuestionRed, setIsQuestionRed] = useState(false);

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setMarks(marks + 1);
//     }

//     const nextQuestion = questionsSequence + 1;
//     if (nextQuestion < questions.length) {
//       setQuestionSequence(nextQuestion);
//       setIsQuestionRed(false); // Reset the question color when moving to the next question
//     } else {
//       // Show result when all questions are answered
//       setQuestionSequence(-1); // set a value to indicate all questions are answered
//     }
//   };

//   const handleButtonClick = (buttonText) => {
//     console.log(`Button "${buttonText}" clicked`);
//     if (buttonText === "Button 1") {
//       setIsQuestionRed(true);
//     } else if (buttonText === "Button 2") {
//       setIsQuestionRed(false);
//     }
//   };

//   return (
//     <div className='question-box'>
//       <h1>Quiz App</h1>
//       {questionsSequence >= 0 ? (
//         <>
//           <h2 style={{ color: isQuestionRed ? 'red' : null }}>
//             {questions[questionsSequence].text}
//           </h2>
//           {questions[questionsSequence].options.map((option) => (
//             <button
//               key={option.id}
//               onClick={() => handleAnswer(option.isCorrect)}
//             >
//               {option.text}
//             </button>
//           ))}
//           <button className='button' onClick={() => handleButtonClick("Button 1")}><span>Heighilight text</span></button>
//           <button className='button1' onClick={() => handleButtonClick("Button 2")}>Unheilight text</button>
//         </>
//       ) : (
//         <Result />
//       )}
//     </div>
//   );
// };



// export default QuizApp;









// import React, { useState, useEffect } from 'react';
// import questions from '../questions';
// import { useQuizContext } from '../QuizContext';
// import Result from './Result';
// import './QuestionBox.css';

// const QuizApp = () => {
//   const { marks, setMarks, totalQuestions, setTotalQuestions } = useQuizContext();
//   const [questionsSequence, setQuestionSequence] = useState(0);
//   const [isQuestionRed, setIsQuestionRed] = useState(false);

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setMarks(marks + 1);  
//     }

//     const nextQuestion = questionsSequence + 1;
//     if (nextQuestion < questions.length) {
//       setQuestionSequence(nextQuestion);
//       setIsQuestionRed(false); // Reset the question color when moving to the next question
//     } else {
//       // Show result when all questions are answered
//       setQuestionSequence(-1); // set a value to indicate all questions are answered
//     }
//   };

//   const handleButtonClick = (buttonText) => {
//     console.log(`Button "${buttonText}" clicked`);
//     if (buttonText === "Button 1") {
//       setIsQuestionRed(true);
//     } else if (buttonText === "Button2") {
//       setIsQuestionRed(false);
//     }
//   };

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = e.pageX - e.target.offsetLeft;
//       const y = e.pageY - e.target.offsetTop;

//       document.querySelector('.button').style.setProperty('--x', `${x}px`);
//       document.querySelector('.button').style.setProperty('--y', `${y}px`);
//     };

//     document.querySelector('.button').addEventListener('mousemove', handleMouseMove);

//     return () => {
//       // Cleanup: remove the event listener when the component unmounts
//       document.querySelector('.button').removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []); // Empty dependency array to run the effect only once on mount

//   return (
//     <div className='question-box'>
//       <h1>Quiz App</h1>
//       {questionsSequence >= 0 ? (
//         <>
//           <h2 style={{ color: isQuestionRed ? 'red' : null }}>
//             {questions[questionsSequence].text}
//           </h2>
//           {questions[questionsSequence].options.map((option) => (
//             <button
//               key={option.id}
//               onClick={() => handleAnswer(option.isCorrect)}
//             >
//               {option.text}
//             </button>
//           ))}
//           <button className='button' onClick={() => handleButtonClick("Button 1")}><span>Highlight text</span></button>
//           <button className='button' onClick={() => handleButtonClick("Button2")}>Unhighlight text</button>
//         </>
//       ) : (
//         <Result />
//       )}
//     </div>
//   );
// };

// export default QuizApp;









import React, { useState, useEffect } from 'react';
import questions from '../questions';
import { useQuizContext } from '../QuizContext';
import Result from './Result';
import './QuestionBox.css';

const QuizApp = () => {
  const { marks, setMarks, totalQuestions, setTotalQuestions } = useQuizContext();
  const [questionsSequence, setQuestionSequence] = useState(0);
  const [isQuestionRed, setIsQuestionRed] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setMarks(marks + 1);  
    }

    const nextQuestion = questionsSequence + 1;
    if (nextQuestion < questions.length) {
      setQuestionSequence(nextQuestion);
      setIsQuestionRed(false); // Reset the question color when moving to the next question
    } else {
      // Show result when all questions are answered
      setQuestionSequence(-1); // set a value to indicate all questions are answered
    }
  };

  const handleButtonClick = (buttonText) => {
    console.log(`Button "${buttonText}" clicked`);
    if (buttonText === "Button 1") {
      setIsQuestionRed(true);
    } else if (buttonText === "Button2") {
      setIsQuestionRed(false);
    }
  };

  const restartQuiz = () => {
    setQuestionSequence(0);
    setMarks(0);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.pageX - e.target.offsetLeft;
      const y = e.pageY - e.target.offsetTop;

      document.querySelector('.button').style.setProperty('--x', `${x}px`);
      document.querySelector('.button').style.setProperty('--y', `${y}px`);
    };

    document.querySelector('.button').addEventListener('mousemove', handleMouseMove);

    return () => {
      // Cleanup: remove the event listener when the component unmounts
      document.querySelector('.button').removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className='question-box'>
      
      {questionsSequence >= 0 ? (
        <>
          <h1>{`Question ${questionsSequence + 1} of 5`}</h1>
          <h2 style={{ color: isQuestionRed ? 'red' : null }}>
            {questions[questionsSequence].text}
          </h2>
          <div>
          {questions[questionsSequence].options.map((option) => (
            <button class="custom-btn btn-12"
              key={option.id}
              onClick={() => handleAnswer(option.isCorrect)}
            >
               <span>Click!</span>
              <span>{option.text}</span>
            </button>  
          ))}
          </div>
          <div className='highlight'>
          <button className='button' onClick={() => handleButtonClick("Button 1")}><span>Highlight text</span></button>
          <button className='button' onClick={() => handleButtonClick("Button2")}>Unhighlight text</button>
          </div>
        </>
      ) : (
        <Result restartQuiz={restartQuiz} />
      )}
    </div>
  );
};

export default QuizApp;



















