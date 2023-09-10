'use client';

import Image from "next/image";
import { bigShoe1 } from "@/src/assets/images";

interface Props {
    imgURL: string;
    changeBigShoeImage: () => void;
    bigShoeImg: string
}

const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}: Props) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
    return (
        <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red': 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4"> 
                <Image src={imgURL.thumbnail} alt='shoe collection' width={127} height={103} className="object-contain"/>
            </div>
        </div>
    );
}

export default ShoeCard;