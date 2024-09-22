"use client"
import Header from "../components/header/page"
import Image from "next/image";
import { motion } from "framer-motion";
import "./page.css"

export default function Hero() {
    return(
        <div className="hero-container">
            <Header/>
            <div className="hero">
                <div className="hero-info">

                    <motion.h1 
                        initial={{ opacity: 0, x: -100 }} 
                        animate={{ opacity: 1, x: 0 }}     
                        transition={{ duration: 1 }}  
                        className="hero-title">
                        Front end
                    </motion.h1>

                    <motion.h1 
                        initial={{ opacity: 0, x: -100 }} 
                        animate={{ opacity: 1, x: 0 }}     
                        transition={{ duration: 1 }} 
                        className="hero-title">
                        Developer
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, x: -100 }} 
                        animate={{ opacity: 1, x: 0 }}     
                        transition={{ duration: 1 }} 
                        className="hero-name">
                        Mateus Sansão Pereira
                    </motion.p>
                </div>
                <div className="hero-img">
                    <Image src="/Mateus.png" width={200} height={200}/>
                </div>
            </div>
        </div>
    )
}