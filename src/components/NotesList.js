import React from 'react';
import NotesCard from './NotesCard';

const NotesList = ({ notes, onDelete, onArchive, viewArchive, searchKey })=>{
    const filteredNote = notes.filter((note)=>note.archived===viewArchive && note.body.toLowerCase().includes(searchKey) );
    if(filteredNote.length > 0){
        return (
            <div className="personal-notes__list">
                {
                    filteredNote.map((note)=>(
                        <NotesCard
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        {...note}
                        />
                    ))
                }
            </div>
        );
    } else {
        return (
            <div className="personal-notes__listEmpty">
                <h1>Note Tidak Ada</h1>
            </div>
        );
    }
    
}

export default NotesList;