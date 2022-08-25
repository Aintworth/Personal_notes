import React from 'react';
import { getInitialData } from '../utils/data';
import NotesHeader from './NotesHeader';
import NotesList from './NotesList';



class NotesApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes: getInitialData(),
            searchKey: '',
            viewArchive: false,
            noteTitle: "",
            noteBody: "",
            showAddNote: false,
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onKeyChangeHandler = this.onKeyChangeHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onAddNoteDialogHandler = this.onAddNoteDialogHandler.bind(this);
        this.onSeeArchiveHandler = this.onSeeArchiveHandler.bind(this);
        this.onNewNoteTitleHandler = this.onNewNoteTitleHandler.bind(this);
        this.onNewNoteBodyHandler = this.onNewNoteBodyHandler.bind(this);
    }

    onAddNoteHandler(event){
        event.preventDefault();
        const newNote = {
            id: `${Date.now()}${Math.floor(Math.random() * 100)}`,
            title: this.state.noteTitle,
            body: this.state.noteBody,
            createdAt: Date.now(),
            archived: false,
        }
        const newNotes = [...this.state.notes, newNote]
        this.setState(()=>{
            return{
                notes: newNotes,
                noteTitle: "",
                noteBody: "",
                showAddNote: false,
            }
        });
    }

    onDeleteHandler(id){
        console.log(`delete ${id}`);
        const notes = this.state.notes.filter(note=>note.id!==id);
        this.setState(()=>{
            return{
                notes: notes,
            }
        });
    }

    onSeeArchiveHandler(){
        console.log(`see archive`);
        this.setState(()=>{
            if(this.state.viewArchive===false){
                return {viewArchive: true,}
            }
            else{
                return {viewArchive: false,}
            }
        });
    }
    onAddNoteDialogHandler(){
        console.log(`open dialog`);
        if(this.state.showAddNote===false){
            this.setState(()=>{
                return{
                    showAddNote: true,
                }
            })
        } else {
            this.setState(()=>{
                return{
                    showAddNote: false,
                    noteTitle: "",
                    noteBody: "",
                }
            })
        }
        
    }
    onArchiveHandler(id){
        console.log(`archive ${id}`);
        if(this.state.viewArchive===false){
            const notes = this.state.notes.map((note)=>note.id===id?{...note, archived: true} : note);
            this.setState(()=>{
                return{
                    notes: notes,
                }
            });
        } else {
            const notes = this.state.notes.map((note)=>note.id===id?{...note, archived: false} : note);
            this.setState(()=>{
                return{
                    notes: notes,
                }
            });
        }
        
    }

    onKeyChangeHandler(event){
        console.log(`key change`);
        this.setState(()=>{
            return{
                searchKey: event.target.value.toLowerCase(),
            }
        });
    }

    onNewNoteTitleHandler(event){
        console.log(`max input`);
        if(event.target.value.length <= 50) {
            this.setState(()=>{
                return{
                    noteTitle: event.target.value,
                }
            });
        }
    }

    onNewNoteBodyHandler(event){
        this.setState(()=>{
            return{
                noteBody: event.target.value,
            }
        });
    }

    render(){
        console.log("3");
        return(
            <div className="personal-notes__app">
                <NotesHeader searchKey={this.state.searchKey} onKeyChange={this.onKeyChangeHandler} onAddNoteDialog={this.onAddNoteDialogHandler} onNewNoteTitle={this.onNewNoteTitleHandler} onNewNoteBody={this.onNewNoteBodyHandler} onAddNote={this.onAddNoteHandler} onSeeArchive={this.onSeeArchiveHandler} newNoteTitle={this.state.noteTitle} newNoteBody={this.state.noteBody} showAddNote={this.state.showAddNote}  />
                <NotesList viewArchive={this.state.viewArchive} searchKey={this.state.searchKey} notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
            </div>
        );
    }
}

export default NotesApp;