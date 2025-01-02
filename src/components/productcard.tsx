import Image from "next/image";
import React from "react";
interface ProductCardProps{
    title:string
    price: string
    image:string
}
 export default function ProductCard({title,price,image}:ProductCardProps){
    return(
        <div className="overflow-hidden text-center shadow-lg">
        <header>
            <Image 
            src={image}
            width={500}
            height={500}
            alt={title}
            className="w-72 h-72 object-cover cursor-pointer"/>
        </header>
        <blockquote className="bg-yellow-100 py-1">
            <h1 className="text-sm ">{title}</h1>
            <span className="text-lg"> {price}</span>
            
        </blockquote>
        <footer className=" bg-[#bfa179] font-semibold">
            <button className="text-black  transition-transform duration-500 hover:scale-125 py-3 ">Add to Bag</button>
        </footer>
        </div>
    )
}