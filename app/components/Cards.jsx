import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Cards() {
  const cardsData = [
    { id: 1, title: "1" },
    { id: 2, title: "2" },
    { id: 3, title: "3" },
    { id: 4, title: "4" },
    { id: 5, title: "5" },
    { id: 6, title: "6" },
    { id: 7, title: "7" },
    { id: 8, title: "8" },
    { id: 9, title: "9" },
    { id: 10, title: "10" },
    { id: 11, title: "11" },
    { id: 12, title: "12" },
    { id: 13, title: "13" },
    { id: 14, title: "14" },
    { id: 15, title: "15" },
    { id: 16, title: "16" },
    { id: 17, title: "17" },
    { id: 18, title: "18" },
    { id: 19, title: "19" },
    { id: 20, title: "20" },
    { id: 21, title: "21" },
    { id: 22, title: "22" },
    { id: 23, title: "23" },
    { id: 24, title: "24" },
  ];

  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (id) => {
    setFlippedCard(id === flippedCard ? null : id);
  };

  const cards = cardsData.map((card) => (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-4 m-4 transition-transform transform hover:scale-105"
      key={card.id}
      onClick={() => handleCardClick(card.id)}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        rotateY: flippedCard === card.id ? 180 : 0,
      }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`card-face front ${flippedCard === card.id ? "hidden" : ""}`}
      >
        <h2 className="text-2xl text-black">{card.title}</h2>
      </div>
      <div
        className={`card-face back ${flippedCard === card.id ? "" : "hidden"}`}
      >
      </div>
    </motion.div>
  ));

  return <>{cards}</>;
}
