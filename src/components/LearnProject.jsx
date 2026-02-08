// const Quest = [
//   { question: "GOAT", options: ["G", "O", "A", "T"] },
//   { question: "LION", options: ["L", "I", "O", "N"] },
//   { question: "FISH", options: ["F", "I", "S", "H"] },
//   { question: "BIRD", options: ["B", "I", "R", "D"] },
//   { question: "FROG", options: ["F", "R", "O", "G"] },
//   { question: "DUCK", options: ["D", "U", "C", "K"] },
//   { question: "BEAR", options: ["B", "E", "A", "R"] },
//   { question: "ONYX", options: ["O", "N", "Y", "X"] },
//   { question: "ZINC", options: ["Z", "I", "N", "C"] },
//   { question: "MUTE", options: ["M", "U", "T", "E"] },
//   { question: "HAZE", options: ["H", "A", "Z", "E"] },
//   { question: "WOLF", options: ["W", "O", "L", "F"] },
//   { question: "DEER", options: ["D", "E", "E", "R"] },
//   { question: "COW", options: ["C", "O", "W"] },
//   { question: "DOG", options: ["D", "O", "G"] },
//   { question: "CAT", options: ["C", "A", "T"] },
//   { question: "VOID", options: ["V", "O", "I", "D"] },
//   { question: "EMBER", options: ["E", "M", "B", "E", "R"] },
//   { question: "CRYPT", options: ["C", "R", "Y", "P", "T"] },
//   { question: "PLUSH", options: ["P", "L", "U", "S", "H"] },
//   { question: "TWIG", options: ["T", "W", "I", "G"] },
//   { question: "QUILL", options: ["Q", "U", "I", "L", "L"] },
//   { question: "PIG", options: ["P", "I", "G"] },
//   { question: "ANT", options: ["A", "N", "T"] },
//   { question: "BAT", options: ["B", "A", "T"] },
//   { question: "RAT", options: ["R", "A", "T"] },
//   { question: "HEN", options: ["H", "E", "N"] },
//   { question: "FOX", options: ["F", "O", "X"] },
//   { question: "CROW", options: ["C", "R", "O", "W"] },
//   { question: "SWAN", options: ["S", "W", "A", "N"] },
//   { question: "MOON", options: ["M", "O", "O", "N"] },
//   { question: "KING", options: ["K", "I", "N", "G"] },
//   { question: "FIRE", options: ["F", "I", "R", "E"] },
//   { question: "WIND", options: ["W", "I", "N", "D"] },
//   { question: "JAZZ", options: ["J", "A", "Z", "Z"] },
//   { question: "CODE", options: ["C", "O", "D", "E"] },
//   { question: "QUIZ", options: ["Q", "U", "I", "Z"] },
//   { question: "MATH", options: ["M", "A", "T", "H"] },
//   { question: "VIBE", options: ["V", "I", "B", "E"] },
//   { question: "RHYME", options: ["R", "H", "Y", "M", "E"] },
// ];

// import { useState, useMemo, useEffect } from "react";
// import { motion } from "framer-motion";
// import "./LearnProject.css";

// // Shuffle helper
// const shuffleArray = (array) => {
//   let shuffled = [...array];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// };

// const LearnProject = () => {
//   const [CurrentQuest, setCurrentQuest] = useState(0);
//   const [Answer, setAnswer] = useState("");
//   const [Move, setMove] = useState(Array(Quest[0].options.length).fill(false));
//   const [Score, setScore] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(10);

//   // Shuffle options each question
//   const shuffledOptions = useMemo(
//     () => shuffleArray(Quest[CurrentQuest].options),
//     [CurrentQuest]
//   );

//   // 🕒 Timer
//   useEffect(() => {
//     setTimeLeft(10);
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev === 1) {
//           clearInterval(timer);
//           alert("⏰ Time's up!");
//           handleNext();
//         }
//         return prev - 1;
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [CurrentQuest]);

//   const handleMove = (index, letter) => {
//     if (Move[index]) return; // Prevent re-click
//     setMove((prev) => prev.map((m, i) => (i === index ? true : m)));
//     setAnswer((prev) => prev + letter);
//   };

//   // ✅ Check correctness after animations
//   useEffect(() => {
//     if (Answer.length === Quest[CurrentQuest].question.length) {
//       const correct = Answer === Quest[CurrentQuest].question;
//       setTimeout(() => {
//         if (correct) {
//           setScore((prev) => prev + 1);
//           alert("✅ Correct!");
//           handleNext();
//         } else {
//           alert("❌ Wrong! Try again!");
//           handleReset(); // Just reset this question, not full reload
//         }
//       }, 700);
//     }
//   }, [Answer]);

//   const handleNext = () => {
//     if (CurrentQuest < Quest.length - 1) {
//       const next = CurrentQuest + 1;
//       setCurrentQuest(next);
//       setAnswer("");
//       setMove(Array(Quest[next].options.length).fill(false));
//     } else {
//       alert(`🏁 Game Over! Final Score: ${Score}/${Quest.length}`);
//       setTimeout(() => window.location.reload(), 1200);
//     }
//   };

//   // 🧩 RESET only current question
//   const handleReset = () => {
//     setAnswer("");
//     setMove(Array(Quest[CurrentQuest].options.length).fill(false));
//     setTimeLeft(10);
//   };

//   return (
//     <>
//       <div className="scoreCont">Score: {Score}</div>
//       <div className="container">
//         <h2>
//           Question {CurrentQuest + 1}: {Quest[CurrentQuest].question}
//         </h2>
//         <h3 className="timer">⏳ Time left: {timeLeft}s</h3>

//         <input type="text" value={Answer} readOnly className="questionInput" />

//         <div className="game">
//           {shuffledOptions.map((optionAll, index) => (
//             <motion.input
//               key={index}
//               type="text"
//               value={optionAll}
//               readOnly
//               className="optionBtn"
//               onClick={() => handleMove(index, optionAll)}
//               animate={{
//                 y: Move[index] ? -120 : 0,
//                 opacity: Move[index] ? 0 : 1,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 150,
//                 damping: 10,
//               }}
//             />
//           ))}
//         </div>

//         <div className="btnRow">
//           {/* {Answer.length === Quest[CurrentQuest].options.length && (
//             <button onClick={handleNext} className="nextBtn">
//               Next ➡️
//             </button>
//           )} */}

//           {/* 🧩 Reset button */}
//           <button onClick={handleReset} className="resetBtn">
//             🔄 Reset
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LearnProject;

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [showFeedback, setShowFeedback] = useState(null); // 'correct' | 'wrong' | null

  // Shuffle options each question
  const shuffledOptions = useMemo(
    () => shuffleArray(Quest[CurrentQuest].options),
    [CurrentQuest],
  );

  // Timer
  useEffect(() => {
    setTimeLeft(10);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setShowFeedback("wrong");
          setTimeout(() => {
            setShowFeedback(null);
            handleNext();
          }, 1500);
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [CurrentQuest]);

  const handleMove = (index, letter) => {
    if (Move[index]) return;
    setMove((prev) => prev.map((m, i) => (i === index ? true : m)));
    setAnswer((prev) => prev + letter);
  };

  // Check correctness after animations
  useEffect(() => {
    if (Answer.length === Quest[CurrentQuest].question.length) {
      const correct = Answer === Quest[CurrentQuest].question;
      setTimeout(() => {
        if (correct) {
          setScore((prev) => prev + 1);
          setShowFeedback("correct");
          setTimeout(() => {
            setShowFeedback(null);
            handleNext();
          }, 1500);
        } else {
          setShowFeedback("wrong");
          setTimeout(() => {
            setShowFeedback(null);
            handleReset();
          }, 1500);
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
      setTimeout(() => {
        alert(`🏁 Game Over! Final Score: ${Score}/${Quest.length}`);
        window.location.reload();
      }, 100);
    }
  };

  const handleReset = () => {
    setAnswer("");
    setMove(Array(Quest[CurrentQuest].options.length).fill(false));
    setTimeLeft(10);
  };

  const progress = ((CurrentQuest + 1) / Quest.length) * 100;
  const timerColor =
    timeLeft > 5
      ? "text-emerald-400"
      : timeLeft > 3
        ? "text-yellow-400"
        : "text-red-400";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Score and Progress */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <div className="flex justify-between items-center mb-3">
            <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 shadow-2xl">
              <span className="text-white font-bold text-xl tracking-wider">
                SCORE: <span className="text-yellow-400 text-2xl">{Score}</span>
              </span>
            </div>
            <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 shadow-2xl">
              <span className="text-white font-bold text-xl tracking-wider">
                {CurrentQuest + 1}/{Quest.length}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-black/40 rounded-full h-3 backdrop-blur-md border border-white/20 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Main Game Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden"
        >
          {/* Feedback Overlay */}
          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm rounded-3xl"
              >
                {showFeedback === "correct" ? (
                  <motion.div
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    className="text-8xl"
                  >
                    ✅
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ rotate: 180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    className="text-8xl"
                  >
                    ❌
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Question Header */}
          <motion.h2
            key={CurrentQuest}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-black text-center mb-4 text-white tracking-[0.3em] uppercase"
            style={{
              textShadow:
                "4px 4px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 6px 6px 20px rgba(0,0,0,0.5)",
            }}
          >
            Spell: {Quest[CurrentQuest].question}
          </motion.h2>

          {/* Timer */}
          <motion.h3
            animate={{ scale: timeLeft <= 3 ? [1, 1.1, 1] : 1 }}
            transition={{ repeat: timeLeft <= 3 ? Infinity : 0, duration: 0.5 }}
            className={`text-3xl font-bold text-center mb-6 ${timerColor}`}
            style={{ textShadow: "2px 2px 4px #000" }}
          >
            ⏳ {timeLeft}s
          </motion.h3>

          {/* Answer Input */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-6"
          >
            <input
              type="text"
              value={Answer}
              readOnly
              className="w-full h-20 text-4xl font-bold text-center text-white bg-black/40 rounded-2xl border-2 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)_inset,0_0_10px_rgba(255,255,255,0.3)] focus:outline-none focus:border-white/50 transition-all"
              style={{ textShadow: "3px 3px 6px #000" }}
              placeholder="..."
            />
          </motion.div>

          {/* Letter Options */}
          <div className="flex justify-center items-center gap-3 mb-6 flex-wrap min-h-[80px]">
            {shuffledOptions.map((optionAll, index) => (
              <motion.button
                key={index}
                onClick={() => handleMove(index, optionAll)}
                animate={{
                  y: Move[index] ? -150 : 0,
                  opacity: Move[index] ? 0 : 1,
                  scale: Move[index] ? 0.5 : 1,
                }}
                whileHover={{
                  scale: Move[index] ? 1 : 1.1,
                  rotate: Move[index] ? 0 : 5,
                }}
                whileTap={{ scale: Move[index] ? 1 : 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className={`
                  w-16 h-16 md:w-20 md:h-20 text-3xl md:text-4xl font-black
                  bg-gradient-to-br from-blue-500 to-purple-600 
                  text-white rounded-2xl 
                  shadow-[0_0_20px_rgba(59,130,246,0.5),0_8px_0_rgba(0,0,0,0.3)] 
                  border-2 border-white/30
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.8),0_8px_0_rgba(0,0,0,0.3)]
                  active:shadow-[0_0_15px_rgba(59,130,246,0.3),0_4px_0_rgba(0,0,0,0.3)]
                  active:translate-y-1
                  transition-all
                  ${Move[index] ? "cursor-not-allowed" : "cursor-pointer"}
                `}
                style={{ textShadow: "3px 3px 0 #000" }}
                disabled={Move[index]}
              >
                {optionAll}
              </motion.button>
            ))}
          </div>

          {/* Reset Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="w-full py-4 text-xl font-bold bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-2xl shadow-[0_0_20px_rgba(239,68,68,0.5),0_8px_0_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] active:translate-y-1 transition-all border-2 border-white/30"
            style={{ textShadow: "3px 3px 0 #000" }}
          >
            🔄 RESET
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default LearnProject;
