# 🧩 LearnProject — Animated Word Game (React + Framer Motion)

A fun and interactive word spelling mini-game built with **React** and **Framer Motion**.  
Players click the letters to form a word — each letter smoothly animates upward when selected.  
When all letters are chosen, the app checks if the answer matches the correct word and gives instant feedback.

---

## 🚀 Features

- ✨ **Animated letter movement** using Framer Motion
- 🧠 **Interactive word building** logic with React state
- ✅ **Automatic answer validation**
- 🔁 **Page reload or next question** functionality
- 🎨 Clean layout with responsive design (HTML + CSS)

---

## 🧠 How It Works

1. Each question contains a word and its letters as clickable options.
2. When a player clicks a letter:
   - It moves upward using a spring animation.
   - The letter is added to the answer box.
3. When all letters are selected:
   - The game checks if the formed word is correct.
   - Displays a success or error alert.
4. You can move to the next question or automatically reload the game.

---

## 🧩 Tech Stack

- ⚛️ **React JS** – component-based UI
- 🎞️ **Framer Motion** – animations and transitions
- 🎨 **CSS3** – styling and layout

---

## 📂 Project Structure

```
LearnProject/
├── src/
    ├── components
│      ├── LearnProject.jsx
│      ├── LearnProject.css
│   └── index.js
└── README.md
```

---

## 🧰 Installation & Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/LearnProject.git
   ```
2. Navigate to the project directory:
   ```bash
   cd LearnProject
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🎮 Usage

- Click on each letter to build the correct word.
- When finished, you’ll get feedback immediately.
- Click **Next ➡️** to go to the next challenge.
- If the word is incorrect, the page reloads for another try.

---

## 📸 Example Gameplay

```
Question 1: GOAT
[G] [O] [A] [T]
👇
✅ You spelled it right!
```

---

## 🧑‍💻 Developer Notes

This project demonstrates:

- Managing multiple states in React (`useState`)
- Conditional rendering and array mapping
- Handling user interaction and animations
- Real-time validation logic

---

## 📜 License

This project is open-source and free to use for learning or portfolio purposes.

---

**Built with ❤️ using React and Framer Motion.**
