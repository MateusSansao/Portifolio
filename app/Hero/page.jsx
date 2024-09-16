"use client"
import Header from "../components/header/page"
import Image from "next/image";

export default function Hero() {
    return(
        <div>
            <Header/>
            <div>
                <div>
                    <h1>
                        Front end
                    </h1>
                    <h1>
                        Developer
                    </h1>
                    <p>
                        Mateus Sansão Pereira
                    </p>
                </div>
                <div>
                    <Image src="/Mateus.png" width={200} height={200}/>
                </div>
            </div>
        </div>
    )
}