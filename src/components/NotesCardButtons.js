import React from 'react';

const NotesCardButtons = ({id, onDelete, onArchive})=>{
    console.log("4bab");
    return(
        <div className="personal-notes__cardButtons">
            <button className="deleteButton" onClick={()=>onDelete(id)}>X</button>
            <button className="archiveButton" onClick={()=>onArchive(id)}>Archive</button>
        </div>
    );
}

export default NotesCardButtons;

