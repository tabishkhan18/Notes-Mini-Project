import React, { useState } from 'react'

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.4)',
  backdropFilter: 'blur(4px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalStyle = {
  background: '#000',
  borderRadius: '16px',
  boxShadow: '0 4px 32px rgba(0,0,0,0.15)',
  padding: '32px 24px 24px 24px',
  minWidth: '350px',
  maxWidth: '90vw',
  width: '400px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '16px',
  right: '16px',
  background: 'transparent',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: '#888',
};

const EditNoteCard = ({ setEditButton, initialTitle, initialContent, onSave }) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(title, content);
    }
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalStyle}>
        <button
          style={closeButtonStyle}
          aria-label="Close"
          onClick={() => setEditButton(false)}
          title="Close"
        >
          &times;
        </button>
        <h2 className="edit-note-title" style={{ marginTop: 0 }}>Edit Note</h2>
        <form className="edit-note-form" onSubmit={handleSubmit}>
          <label htmlFor="noteTitle">Title:</label>
          <input
            type="text"
            id="noteTitle"
            name="noteTitle"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            style={{ width: '100%', marginBottom: '12px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />

          <label htmlFor="noteContent">Content:</label>
          <textarea
            id="noteContent"
            name="noteContent"
            value={content}
            onChange={e => setContent(e.target.value)}
            required
            style={{ width: '100%', minHeight: '80px', marginBottom: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          ></textarea>

          <div className="edit-note-actions" style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <button type="submit" className="save-button" style={{ padding: '8px 16px', borderRadius: '4px', border: 'none', background: '#1976d2', color: '#fff', cursor: 'pointer' }}>Save</button>
            <button
              type="button"
              className="cancel-button"
              style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid #ccc', background: '#fff', color: '#333', cursor: 'pointer' }}
              onClick={() => setEditButton(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditNoteCard