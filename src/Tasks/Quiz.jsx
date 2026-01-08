import { useState } from "react";

// Questions data
const questions = [
  {
    question: "What is React?",
    options: ["A library", "A framework", "A language", "A database"],
    correct: 0,
  },
  {
    question: "What hook is used for state in React?",
    options: ["useEffect", "useState", "useContext", "useRef"],
    correct: 1,
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Microsoft", "Facebook", "Amazon"],
    correct: 2,
  },
  {
    question: "What is JSX?",
    options: [
      "A database",
      "A styling language",
      "JavaScript XML",
      "A browser API",
    ],
    correct: 2,
  },
  {
    question: "React components must return?",
    options: ["CSS", "HTML", "JSX", "JSON"],
    correct: 2,
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const styles = {
    container: {
      maxWidth: "500px",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    progress: {
      marginBottom: "10px",
      fontSize: "14px",
      color: "#6b7280",
    },
    question: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    option: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "6px",
      border: "1px solid #d1d5db",
      backgroundColor: "#f9fafb",
      cursor: "pointer",
      textAlign: "left",
    },
    optionHover: {
      backgroundColor: "#e5e7eb",
    },
    result: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    button: {
      padding: "10px 16px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#2563eb",
      color: "#ffffff",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: "10px" }}>Mini Project - Quiz</h2>

      {!showResult ? (
        <>
          {/* Progress */}
          <div style={styles.progress}>
            Question {currentQuestion + 1} of {questions.length}
          </div>

          {/* Question */}
          <div style={styles.question}>
            {questions[currentQuestion].question}
          </div>

          {/* Options */}
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              style={styles.option}
              onClick={() => handleAnswer(index)}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#e5e7eb")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#f9fafb")
              }
            >
              {option}
            </button>
          ))}
        </>
      ) : (
        <>
          {/* Final Result */}
          <div style={styles.result}>
            🎉 You scored {score} out of {questions.length}
          </div>

          <button style={styles.button} onClick={restartQuiz}>
            Restart Quiz
          </button>
        </>
      )}
    </div>
  );
}

export default Quiz;
