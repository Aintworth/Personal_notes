import React from 'react';

const NotesInput=({ onAddNote, onNewNoteBody, onNewNoteTitle, newNoteTitle, newNoteBody })=>{
    return(
        <form className='personal-notes__input' onSubmit={onAddNote}>
            <input type='text' className="personal-notes__inputTitle" placeholder="Title" value={newNoteTitle} onChange={onNewNoteTitle} />
            <br></br>
            <textarea className="personal-notes__inputBody" value={newNoteBody} onChange={onNewNoteBody} />
            <br></br>
            <button type="submit">Submit</button>
        </form>
    );
}

export default NotesInput;