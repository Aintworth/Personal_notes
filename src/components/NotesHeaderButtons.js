import React from 'react';

const NotesHeaderButtons = ({onAddNoteDialog, onSeeArchive})=>{
    console.log("4baba");
    return(
        <div className="personal-notes__headerButtons">
            <button className="addNotesButton" onClick={()=>onAddNoteDialog()}>+</button>
            <button className="seeArchiveButton" onClick={()=>onSeeArchive()}>See Archive</button>
        </div>
    );
}

export default NotesHeaderButtons;

