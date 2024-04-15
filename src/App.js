import { useState } from 'react';

import StickyNotes from './components/StickyNotes'
import './App.css';

function App() {
  const first = Date.now();
  const [notes, setNotes] = useState([
    {
      id : first,
    }
  ]);

  function addNote() {
    setNotes([
      ...notes, 
      {
        id : Date.now(),
      }
    ]);
  }

  function removeNote(NoteId) {
    console.log("Removed", NoteId);
    setNotes(notes.filter((item) => item.id !== NoteId));
  }

  return (
    <div className="App">
      <button className="add-sticky" onClick={() => addNote()}>Spawn Sticky</button>

      {notes.map((item) => (
        <StickyNotes 
          key={item.id} 
          onAdd = {() => addNote()} 
          onClose = {() => removeNote(item.id)} 
        />
      ))}
    </div>
  );
}

export default App;
