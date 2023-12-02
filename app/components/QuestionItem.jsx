'use client';
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export default function QuestionItem({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center cursor-pointer" onClick={toggleExpand}>
        {isExpanded ? (
          <IoIosArrowDown className="text-yellow-200 mr-2" />
        ) : (
          <IoIosArrowForward className="text-yellow-200 mr-2" />
        )}
        <h2 className="text-xl text-yellow-200 mb-2">{question}</h2>
      </div>
      {isExpanded && <p>{answer}</p>}
    </div>
  );
}
