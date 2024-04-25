import React from 'react';
import Image from 'next/image'; 

function Card(props) {


    
    return (
        <div className="flex flex-col w-[250px] gap-1">

           {/* TODO - CHANGE THIS TO NEXT.JS IMAGE INSTEAD OF IMG TAG */}
          <img className='rounded-lg transition-colors duration-200 cursor-pointer border-[5px] hover:border-gold focus:border-darkgold' src={"https://placehold.co/600x800?text=Exempel\\nBild"} width={250} height={200} alt="Image of selected movie/serie"></img> 
            <h2 className='mt-2 text-white font-light text-sm'>{props.info}</h2>
            <h2 className='text-white font-bold text-lg'>{props.title}</h2>
            <h2 className='text-white font-light text-sm'>{props.genre}</h2>

        </div>
    )
}

export default Card;