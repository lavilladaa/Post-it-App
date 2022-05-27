import React from "react"
import {useState} from "react"
import NewPostit from "./NewPostit"
import Postit from "./Postit"



export default function Notes(){
    
    // creating the array to render all the notes
    const [notesList,setNotesList] =useState([]);
    const [titleList,setTitleList]=useState([]);

    // function to add a new note
    const newNote=(note,title)=>{
        //In this way the last note created is added at the end
        setNotesList([...notesList,note])
        setTitleList([...titleList,title])
    }

    // function to edit an existing note
 
    const editNote=(id, editTitle, editText)=>{
        console.log("esta es la lista ANTES de la funcion edit");
        console.log(notesList);
        
        const listNotesUpdated=notesList.map((element,index)=>{
    //    
            if(index===id){
                element=editText;
        
                console.log("entre al index==id")
            } 
            // to return all the elements the return has to be outside the if
            return element;  })
            setNotesList(listNotesUpdated);
            

        const listTitleUpdated=titleList.map((element,index)=>{
        
     
            if(index===id){
                element=editTitle;

            } return element;   })
            setTitleList(listTitleUpdated);


    }



    const deleteNote=(id)=>{
        console.log("esta es la lista ANTES de la funcion delete");
        console.log(notesList);
        // filter method to take all the notes except that one 
        //where the user clicked the delete button
        const notesDisplayed=notesList.filter((element,index)=>  index!==id);
        setNotesList(notesDisplayed);
        console.log("esta es la lista DESPUES del filter");
        console.log(notesDisplayed);
        

        const titlesDisplayed=titleList.filter((element,index)=>  index!==id);
        setTitleList(titlesDisplayed);

    }
    console.log("SE RENDERIZÓ EL PRINCIPAL");
    console.log(notesList);
    

    return (
     

    // To change the className when there are more than 3 notes
    // so the align content change from left to center
    <div className={notesList.length >=3 ? "multiple-notes": "few-notes"}>

        <NewPostit newNote={newNote}/>
        
        

    {/* to render all the notes created */}
    {notesList.map((element,index) => <Postit 
                                        note={element} 
                                        title={titleList[index]}
                                        id={index}
                                        editNote={editNote}
                                        deleteNote={deleteNote}
                                        />)}

   
   
    </div>
  
    )
};
