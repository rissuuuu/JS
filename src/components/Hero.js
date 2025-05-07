import React from 'react';

function Hero({ heroName }) {
    console.log(heroName)
    if(heroName==="Joker"){
        throw new Error("NOT A HERO NAME")
    }
    return (<div>{heroName}</div>)
}
export default Hero;