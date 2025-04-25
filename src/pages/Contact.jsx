import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
//
import "../styles/Contact.css";
export default function Contact() {
  return (
    <div className="container card ">
      <h1>Get in touch with me </h1>
      <div className="">
     
        <p>
          <FontAwesomeIcon icon={faPhone} /> <span>+8618726470878</span>
        </p>
      </div>

      <div className="">
      
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
        <span> shukriiman83@gmail.com</span> 
        </p>
      </div>
      <div className="">
        <p>
          <FontAwesomeIcon icon={faClock} /> <span>Mon-Fri: 9AM - 5PM</span>
        </p>
      </div>
      <div className="">
    
        <p>
          <FontAwesomeIcon icon={faLocationDot} /><span>Hefei,China</span> 
        </p>
      </div>
    </div>
  );
}
