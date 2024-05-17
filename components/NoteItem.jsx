import React from "react";

const NoteItem = ({ note, player, onDelete }) => {
  const jumpToTimestamp = () => {
    player.seekTo(note.timestamp);
  };

  return (
    <div className="border p-2 mb-2 rounded shadow-sm">
      <div className="flex justify-between items-center">
        <div onClick={jumpToTimestamp} className="cursor-pointer text-blue-500">
          <strong>{note.timestamp.toFixed(2)}s:</strong> {note.content}
        </div>
        <button onClick={() => onDelete(note.id)} className="text-red-500">
          Delete
        </button>
      </div>
      <p className="text-gray-500 text-sm">{note.date}</p>
    </div>
  );
};

export default NoteItem;
