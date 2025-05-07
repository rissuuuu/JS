
import React from 'react';
import Hero from './Hero';

// function Hero({ heroName }) {
//     if (heroName === "Joker") {
//         throw new Error("NOT A HERO NAME")
//     }
//     return (<div>{heroName}</div>)
// }

function ErrBoundry() {
    return (
        <div>
            <Hero heroName="Rishav"></Hero>
            <Hero heroName="Joker"></Hero>
        </div>
    )
}

export default ErrBoundry;