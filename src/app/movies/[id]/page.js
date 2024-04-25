// 'use client';

import { useEffect, useState } from "react"

export async function generateStaticParams() {
    id: 'experimental'
}
 


export default function Movie({params}) {

    // let [ info, setInfo ] = useState('');

    useEffect(() => {  

        // const simpleFetch = async () => {
        //     const res = await fetch('/api/getMovie/blabla');
        //     const data = await res.json();
        //     setInfo(data);
        //     }
        // simpleFetch();
                

    }, []);

  return (
      <>
        <h1>The params - {params.id}</h1>
      </>
  )
}