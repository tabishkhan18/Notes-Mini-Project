import React, { useState } from 'react'
import EditNoteCard from './EditNoteCard';

const noteCardStyle = {
  width: '300px',
  height: '300px',
  background: '#000',
  borderRadius: '16px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '24px',
  margin: '24px',
  position: 'relative',
};

const noteActionsStyle = {
  display: 'flex',
  gap: '12px',
  marginTop: 'auto',
};

const buttonStyle = {
  padding: '8px 16px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
};

const editButtonStyle = {
  ...buttonStyle,
  background: '#1976d2',
  color: '#fff',
};

const deleteButtonStyle = {
  ...buttonStyle,
  background: '#fff',
  color: '#d32f2f',
  border: '1px solid #d32f2f',
};


const NoteCard = ({title, content}) => {
  const [editButton, setEditButton] = useState(false);
  const [noteTitle, setNoteTitle] = useState(title);
  const [noteContent, setNoteContent] = useState(content);

  const handleEdit = () => {
    setEditButton(true);
  };

  const handleDelete = () => {
    console.log("Delete button clicked");
  };

  const handleSave = (newTitle, newContent) => {
    setNoteTitle(newTitle);
    setNoteContent(newContent);
    setEditButton(false);
  };

  return (
    <>
      
      <div className="note-card" style={noteCardStyle}>
        <div style={{color: '#fff'}}>
          <h2 className="note-title" style={{ margin: '0 0 12px 0' }}>{noteTitle}</h2>
          <p className="note-content" style={{ margin: 0 }}>{noteContent}</p>
        </div>
        <div className="note-actions" style={noteActionsStyle}>
          <button className="edit-button" style={editButtonStyle} onClick={handleEdit}>Edit</button>
          <button className="delete-button" style={deleteButtonStyle} onClick={handleDelete}>Delete</button>
        </div>
      </div>
      {editButton && (
        <EditNoteCard
          setEditButton={setEditButton}
          initialTitle={noteTitle}
          initialContent={noteContent}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default NoteCard