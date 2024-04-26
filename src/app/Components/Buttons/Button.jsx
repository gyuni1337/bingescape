import React from 'react'


export default function Button(props) {
  return (
    <input type="button" value={props.text} className={`h-[40px] cursor-pointer py-[7px] px-[24px] text-center rounded-lg text-black bg-${props.color} `}/>
  )
}
