import React, { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Notes = ({ videoId, player }) => {
  const [notes, setNotes] = useState([]);
  const [noteContent, setNoteContent] = useState("");

  useEffect(() => {
    const savedNotes = localStorage.getItem(`notes-${videoId}`);
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, [videoId]);

  const saveNotes = (updatedNotes) => {
    setNotes(updatedNotes);
    localStorage.setItem(`notes-${videoId}`, JSON.stringify(updatedNotes));
  };

  const addNote = () => {
    const timestamp = player.getCurrentTime();
    const newNote = {
      id: Date.now(),
      timestamp,
      date: new Date().toLocaleString(),
      content: noteContent,
    };
    const updatedNotes = [...notes, newNote];
    saveNotes(updatedNotes);
    setNoteContent("");
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    saveNotes(updatedNotes);
  };

  return (
    <div className="mt-4">
      <ReactQuill
        value={noteContent}
        onChange={setNoteContent}
        placeholder="Add your note here..."
        className="mb-4"
      />
      <button
        onClick={addNote}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Note
      </button>
      <div className="mt-4">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            player={player}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
