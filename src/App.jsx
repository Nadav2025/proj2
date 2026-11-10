import { useState } from 'react'
import './App.css';

const cards = [
  {
    question: "Who invented basketball?",
    answer: "James Naismith",
    category: "Easy",
  },
  {
    question: "In what year was basketball invented?",
    answer: "1891",
    category: "Easy",
  },
  {
    question: "Where was basketball invented?",
    answer: "Springfield, Massachusetts",
    category: "Easy",
  },
  {
    question: "Which NBA player has won the most MVP awards?",
    answer: "Kareem Abdul-Jabbar (6 MVP awards)",
    category: "Medium",
  },
  {
    question: "Which player has the most NBA championships?",
    answer: "Bill Russell (11 titles)",
    category: "Medium",
  },
  {
    question: "Who scored 100 points in one NBA game?",
    answer: "Wilt Chamberlain",
    category: "Medium",
  },
  {
    question: "When was the NBA founded?",
    answer: "1946",
    category: "Hard",
  },
  {
    question: "When was the three-point line added to the NBA?",
    answer: "1979",
    category: "Hard",
  },
  {
    question: "Who was the first high school player drafted #1 overall in the modern NBA era?",
    answer: "Kevin Garnett (1995)",
    category: "Hard",
  },
  {
    question: "Which team won the first NBA championship?",
    answer: "Philadelphia Warriors (1947)",
    category: "Hard",
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState (0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = cards[currentIndex];

  const handleFlip = () => {
    setIsFlipped ((prev) => !prev);
  };

  const handleNext = () => {
    let randomIndex = Math.floor(Math.random() * cards.length);

    while (randomIndex === currentIndex && cards.length > 1) {
      randomIndex = Math.floor(Math.random() * cards.length);
      }

      setCurrentIndex(randomIndex);
      setIsFlipped(false);
  };

  return (
    <div className="app">
      <h1> Basketball History Flashcards</h1>
      <p>Click a card to flip it, then hit next for a random new one.</p>
      <p>
        <b>Total Cards:</b> {cards.length}
      </p>

      <div
        className={`flipCard ${isFlipped ? "isFlipped" : ""} ${currentCard.category.toLowerCase()}`}
        onClick={handleFlip}
      >
        <div className="flipInner">
         
        <div className="flipFace flipFront">
          <p className="difficulty">
            <b>Difficulty:</b> {currentCard.category}
          </p>
          <h2 className="cardText">{currentCard.question}</h2>
          <p className="hint">(Click to flip)</p>
        </div>

        <div className="flipFace flipBack">
          <p className="difficulty">
            <b>Difficulty:</b> {currentCard.category}
          </p>
          <h2 className="cardText">{currentCard.answer}</h2>
          <p className="hint">(Click to flip back)</p>
          </div>
        </div>
      </div>

      <button onClick={handleNext}>Next Card</button>
    </div>
  );
}


   