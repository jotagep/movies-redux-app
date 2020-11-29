import React from 'react'
import { useParams } from 'react-router-dom'

export default function SelectedMoviePage() {

  const { id } = useParams<{id: string}>()
  console.log(id)

  return (
    <div>
      
    </div>
  )
}
