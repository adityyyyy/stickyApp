import { useState, useRef } from "react"

export default function StickyNote({onAdd, onClose}) {
   const [allowMove, setAllowMove] = useState(false);
   const [dx, setDx] = useState(0);
   const [dy, setDy] = useState(0);

   const stickyNoteRef = useRef();
   
   function handleMouseDown(e) {
      setAllowMove(true);
      const dimensions = stickyNoteRef.current.getBoundingClientRect();
      setDx(e.clientX - dimensions.left);
      setDy(e.clientY - dimensions.top);
   }

   function handleMouseMove(e) {
      if (allowMove) {
         console.log("allowing");
         stickyNoteRef.current.style.left = e.clientX - dx + "px";
         stickyNoteRef.current.style.top = e.clientY - dy + "px"; 
      }
   }

   function handleMouseUp() {
      setAllowMove(false);
      setDx(0);
      setDy(0);
   }

   return <div className="sticky-note" ref={stickyNoteRef}>
      <div className="sticky-note-header"
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
      >
         Sticky Note
         <button className="add" onClick={onAdd}>&#43;</button>
         <button className="close" onClick={onClose}>&times;</button>
      </div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
   </div>
}