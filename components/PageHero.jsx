"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";


function PageHero({imageSrc, title, color}) {
  return (
    <div className="app__hero">
        <div className="container">
            <div className="app__hero-wrapper">
                <div className="app__hero-image">
                    <Image src={imageSrc} fill alt="hero image"/>
                </div>
                <h2 className={cn(`app__hero-title bg-[${color}]`)}>{title}</h2>
            </div>
        </div>
    </div>
  )
}

export default PageHero