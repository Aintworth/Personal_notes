import React from 'react';
import NotesItem from './NotesItem';
import NotesCardButtons from './NotesCardButtons';


const NotesCard = ({ id, onDelete, onArchive, title, body })=>{
    console.log("4ba");
    return (
        <div className="personal-notes__card" >
            <NotesItem title={title} body={body}/>
            <NotesCardButtons id={id} onDelete={onDelete} onArchive={onArchive}/>
        </div>
    );
}

export default NotesCard;