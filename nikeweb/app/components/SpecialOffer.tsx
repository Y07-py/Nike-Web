import React from "react";
import Image from "next/image";
import { offer, shoe8 } from "@/src/assets/images";
import { arrowRight } from "@/src/assets/icons";

const SuperQuarity = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <Image src={offer} width={773} height={687} className="object-contain w-full" alt="icon"/>
                <div className="flex flex-1 flex-col">
                    <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                        We Provide You
                        <span className="text-coral-red">
                            Special
                        </span>
                        Offer
                    </h2>
                    <p className="mt-4 lg:max-w-lg info-text">
                        Ensuring premum comfort and style, our meticulously creafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
                    </p>
                    <p className="mt-6 lg:max-w-lg info-text">
                        Our dedication to detail and excellence ensures your satisfaction
                    </p>
                    <div className="mt-11 flex flex-wrap gap-4">
                        <Button label='Shop now' iconUR={arrowRight}/>
                        <Button label='Learn more' backgroudColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <Image src={shoe8} alt="shoe8"/>
                </div>
            </div>
        </section>
    );
}

export default SuperQuarity;