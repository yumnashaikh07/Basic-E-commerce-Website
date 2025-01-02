"use client";
import React from 'react'
import {useEffect , useState} from 'react'

const texts =
[
    `"Personalize Your Tote Today"`,
    `From beach days to grocery runs, our totes do it all!`,
    `#Your Tote, Your Story!`
];
function Herobanner (): React.ReactElement{
    const[ index , setIndex] = useState<number>(0)

useEffect(() => {
    const timeoutId = setTimeout(() => {
        setIndex((prevIndex : number) => (prevIndex +1) % texts.length);
    },3000)
    return() => clearTimeout(timeoutId);},
    [index]);

    const next = ()=>{
        setIndex((prevIndex :number)=>(prevIndex + 1) % texts.length)
    }
    const prev =()=> {
        setIndex((prevIndex : number) => (prevIndex-1+texts.length) % texts.length)
    }

    return(
        <div className='relative flex items-center justify-center header-bg text-black h-9 md:h-12'> 
              <h1 className =" text-center text-base md:text-2xl hero-font transition-transform duration-500 hover:scale-105">{texts[index]}</h1>
        </div>
    )}
export default Herobanner;
