"use client"
import "./page.css"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Header() {
    return(
        <div className="header-container">
            <div className="header">
              <FaWhatsapp className="icon"/>
              <FaInstagram className="icon"/>
              <FaGithub className="icon"/>
            </div>
        </div>
    )
}