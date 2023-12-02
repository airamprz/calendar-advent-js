import React from "react";

export default function Calendar() {
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

  const cards = cardsData.map((card) => (
    <div
      className="bg-white rounded-lg shadow-lg p-4 m-4 transition-transform transform hover:scale-105"
      key={card.id}
    >
      <h2 className="text-2xl text-black">{card.title}</h2>
    </div>
  ));

  return (
    <div className="mt-8">
      <h1 className="text-2xl text-yellow-200 mb-4 mt-16">Calendario</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards}
      </div>
      <div className="border mt-8 p-4">
        <h2 className="text-xl text-yellow-200 mb-4">Instrucciones</h2>
        <p>
          Cada día se desbloqueará un nuevo reto. Para desbloquear el reto del
          día siguiente, debes resolver el reto del día anterior.
        </p>
      </div>
    </div>
  );
}
