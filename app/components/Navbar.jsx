import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center text-white">
      <div className="flex items-center ml-4">
        <Image
          src="https://pbs.twimg.com/media/Fi649vIWIAcuH7L.png:large"
          alt="aDEViento"
          width={70}
          height={70}
        />
        <h1>aDEViento 2023</h1>
      </div>
      <div className="flex items-center mr-4">
        <a
          href="https://github.com/airamprz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={32} color="white" className="mr-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/airamprz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={32} color="white" />
        </a>
      </div>
    </nav>
  );
}
