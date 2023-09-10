import React from "react";
import Button from "./Button";
import { Bitter } from "next/font/google";
import { shoe4, shoe8 } from "@/src/assets/images";
import Image from "next/image";

const SuperQuarity = () => {
    return (
        <section id="about-us" className="flex -justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className="flex flex-1 flex-col">
            <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                We provide You
                <span className="text-coral-red inline-block mt-3">
                    Super
                </span>
                <span className="text-coral-red">
                    Quality
                </span>
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Our dedication to detail and excellence ensures your satisfaction
                </p>
                <div className="mt-11">
                    <Button label="View details"/>
                </div>
            </div>
            <div className="flex01 flex justify-center items-center">
                <Image src={shoe8} alt='shoe8' width={570} height={522} className='object-contain'/>
            </div>
        </section>
    );
}

export default SuperQuarity;