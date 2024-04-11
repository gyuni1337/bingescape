import React from 'react'

export default function BigCard(props) {
  return (
    <div className='w-96 flex bg-center cursor-pointer transition-colors duration-200 border-0 hover:border-2 hover:border-gold  justify-center items-center h-52 rounded-xl ' style={{backgroundImage: 'url(' + props.bgImage + ')'}}>
        <h2 className='text-2xl text-white'>{props.text}</h2>
    </div>
  )
}
