import React from "react";
import { FaHome } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <h1>Messegers</h1>
      <FaHome size={100} color="blue" />
      <FaFacebookMessenger size={100} color="blue" />
      <IoMail size={100} color="blue" />
      <IoIosContact size={100} color="blue" />
      <FaInstagram size={100} color="blue"/>
      <FaLinkedin size={100} color="blue"/>
      <FaGithub size={100} color="blue"/>
    </div>
  );
};

export default App;
