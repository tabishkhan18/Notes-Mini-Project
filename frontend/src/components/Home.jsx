import React from 'react'
import NoteCard from './NoteCard'

const Home = () => {


  const data = [
    {
      id: 1,
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title: "lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      title: "Note 3",
      content: "This is the content of note 3."
    }
  ];


  return (
    <>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px'}}>
      {data.map((note) => (
      
      <NoteCard key={note.id} title={note.title} content={note.content} />

    ))}
    </div>
    <div className="add" style={{textAlign: 'center', marginTop: '20px'}}>
      <a href="/add" className="add-link">
        <span>Add Note</span>
      </a>
    </div>
    </>
    
  )
}

export default Home