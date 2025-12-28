const Quest = [
  { question: "GOAT", options: ["G", "O", "A", "T"] },
  { question: "LION", options: ["L", "I", "O", "N"] },
  { question: "FISH", options: ["F", "I", "S", "H"] },
  { question: "BIRD", options: ["B", "I", "R", "D"] },
  { question: "FROG", options: ["F", "R", "O", "G"] },
  { question: "DUCK", options: ["D", "U", "C", "K"] },
  { question: "BEAR", options: ["B", "E", "A", "R"] },
  { question: "ONYX", options: ["O", "N", "Y", "X"] },
  { question: "ZINC", options: ["Z", "I", "N", "C"] },
  { question: "MUTE", options: ["M", "U", "T", "E"] },
  { question: "HAZE", options: ["H", "A", "Z", "E"] },
  { question: "WOLF", options: ["W", "O", "L", "F"] },
  { question: "DEER", options: ["D", "E", "E", "R"] },
  { question: "COW", options: ["C", "O", "W"] },
  { question: "DOG", options: ["D", "O", "G"] },
  { question: "CAT", options: ["C", "A", "T"] },
  { question: "VOID", options: ["V", "O", "I", "D"] },
  { question: "EMBER", options: ["E", "M", "B", "E", "R"] },
  { question: "CRYPT", options: ["C", "R", "Y", "P", "T"] },
  { question: "PLUSH", options: ["P", "L", "U", "S", "H"] },
  { question: "TWIG", options: ["T", "W", "I", "G"] },
  { question: "QUILL", options: ["Q", "U", "I", "L", "L"] },
  { question: "PIG", options: ["P", "I", "G"] },
  { question: "ANT", options: ["A", "N", "T"] },
  { question: "BAT", options: ["B", "A", "T"] },
  { question: "RAT", options: ["R", "A", "T"] },
  { question: "HEN", options: ["H", "E", "N"] },
  { question: "FOX", options: ["F", "O", "X"] },
  { question: "CROW", options: ["C", "R", "O", "W"] },
  { question: "SWAN", options: ["S", "W", "A", "N"] },
  { question: "MOON", options: ["M", "O", "O", "N"] },
  { question: "KING", options: ["K", "I", "N", "G"] },
  { question: "FIRE", options: ["F", "I", "R", "E"] },
  { question: "WIND", options: ["W", "I", "N", "D"] },
  { question: "JAZZ", options: ["J", "A", "Z", "Z"] },
  { question: "CODE", options: ["C", "O", "D", "E"] },
  { question: "QUIZ", options: ["Q", "U", "I", "Z"] },
  { question: "MATH", options: ["M", "A", "T", "H"] },
  { question: "VIBE", options: ["V", "I", "B", "E"] },
  { question: "RHYME", options: ["R", "H", "Y", "M", "E"] },
];

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import "./LearnProject.css";

// Shuffle helper
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const LearnProject = () => {
  const [CurrentQuest, setCurrentQuest] = useState(0);
  const [Answer, setAnswer] = useState("");
  const [Move, setMove] = useState(Array(Quest[0].options.length).fill(false));
  const [Score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  // Shuffle options each question
  const shuffledOptions = useMemo(
    () => shuffleArray(Quest[CurrentQuest].options),
    [CurrentQuest]
  );

  // 🕒 Timer
  useEffect(() => {
    setTimeLeft(10);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          alert("⏰ Time's up!");
          handleNext();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [CurrentQuest]);

  const handleMove = (index, letter) => {
    if (Move[index]) return; // Prevent re-click
    setMove((prev) => prev.map((m, i) => (i === index ? true : m)));
    setAnswer((prev) => prev + letter);
  };

  // ✅ Check correctness after animations
  useEffect(() => {
    if (Answer.length === Quest[CurrentQuest].question.length) {
      const correct = Answer === Quest[CurrentQuest].question;
      setTimeout(() => {
        if (correct) {
          setScore((prev) => prev + 1);
          alert("✅ Correct!");
          handleNext();
        } else {
          alert("❌ Wrong! Try again!");
          handleReset(); // Just reset this question, not full reload
        }
      }, 700);
    }
  }, [Answer]);

  const handleNext = () => {
    if (CurrentQuest < Quest.length - 1) {
      const next = CurrentQuest + 1;
      setCurrentQuest(next);
      setAnswer("");
      setMove(Array(Quest[next].options.length).fill(false));
    } else {
      alert(`🏁 Game Over! Final Score: ${Score}/${Quest.length}`);
      setTimeout(() => window.location.reload(), 1200);
    }
  };

  // 🧩 RESET only current question
  const handleReset = () => {
    setAnswer("");
    setMove(Array(Quest[CurrentQuest].options.length).fill(false));
    setTimeLeft(10);
  };

  return (
    <>
      <div className="scoreCont">Score: {Score}</div>
      <div className="container">
        <h2>
          Question {CurrentQuest + 1}: {Quest[CurrentQuest].question}
        </h2>
        <h3 className="timer">⏳ Time left: {timeLeft}s</h3>

        <input type="text" value={Answer} readOnly className="questionInput" />

        <div className="game">
          {shuffledOptions.map((optionAll, index) => (
            <motion.input
              key={index}
              type="text"
              value={optionAll}
              readOnly
              className="optionBtn"
              onClick={() => handleMove(index, optionAll)}
              animate={{
                y: Move[index] ? -120 : 0,
                opacity: Move[index] ? 0 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
            />
          ))}
        </div>

        <div className="btnRow">
          {/* {Answer.length === Quest[CurrentQuest].options.length && (
            <button onClick={handleNext} className="nextBtn">
              Next ➡️
            </button>
          )} */}

          {/* 🧩 Reset button */}
          <button onClick={handleReset} className="resetBtn">
            🔄 Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default LearnProject;
