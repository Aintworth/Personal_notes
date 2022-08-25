import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const showDialog = (title, body)=>{
    MySwal.fire({
        title: title,
        text: body,
    })
}

const NotesItem = ({ title, body })=>{
    console.log("4baa");
    let bodyPreview = body;
    let titlePreview = title;
    if(body.length>250){
        bodyPreview = body.slice(0, body.lastIndexOf(" ", 250)) + "... read more";
    }
    if(title.length>25){
        titlePreview = title.slice(0, body.lastIndexOf(" ", 25)) + "...";
    }
    return(
        <div className="personal-notes__item" onClick={()=>showDialog(title, body)}>
            <h2 className="personal-notes__title">{titlePreview}</h2>
            <p className="personal-notes__body">{bodyPreview}</p>
        </div>
    );
}

export default NotesItem;