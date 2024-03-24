import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { useState } from 'react'
import uuid from "react-uuid"

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  }

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  }

  return (
      <div className='App'>
        <Sidebar 
          onAddNote={onAddNote} 
          onDeleteNote={onDeleteNote} 
          activeNote={activeNote} 
          setActiveNote={setActiveNote} 
          notes={notes} 
        />
        <Main />
      </div>
  )
}

export default App
