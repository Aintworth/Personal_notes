import React from 'react';
import SearchBar from './NotesSearchBar';
import NotesHeaderButtons from './NotesHeaderButtons'
import NotesInput from './NotesInput';

const NotesHeader = ({ searchKey, onKeyChange, onAddNoteDialog, onSeeArchive, onAddNote, onNewNoteTitle, onNewNoteBody, newNoteTitle, newNoteBody, showAddNote})=>{
    console.log("4a");
    if(showAddNote===false){
        return (
            <div className="personal-notes__header">
                <h1>PERSONAL NOTES</h1>
                <SearchBar searchKey={searchKey} onKeyChange={onKeyChange} />
                <NotesHeaderButtons onAddNoteDialog={onAddNoteDialog} onSeeArchive={onSeeArchive} />
            </div>
        )
    } else {
        return (
            <div className="personal-notes__header">
                <h1>PERSONAL NOTES</h1>
                <SearchBar searchKey={searchKey} onKeyChange={onKeyChange} />
                <NotesHeaderButtons onAddNoteDialog={onAddNoteDialog} onSeeArchive={onSeeArchive} />
                <NotesInput onAddNote={onAddNote} onNewNoteTitle={onNewNoteTitle} onNewNoteBody={onNewNoteBody}  newNoteTitle={newNoteTitle} newNoteBody={newNoteBody} />
            </div>
        )
    }
    
}

export default NotesHeader;