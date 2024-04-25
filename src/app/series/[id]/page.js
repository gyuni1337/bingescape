'use client'

export async function generateStaticParams() {
    id: 'experimental'
}

export default function Movie({params}) {
  return (
      <>
        <h1>The params - {params.id}</h1>
      </>
  )
}