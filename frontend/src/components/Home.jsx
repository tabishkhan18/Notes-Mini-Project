import React from 'react'
import NoteCard from './NoteCard'

const Home = () => {
  let cards = 1

  return (
    <>
      {cards > 0 ? <NoteCard /> : "No notes to display"}
      <button>Add Note</button>
    </>
  )
}

export default Home