import { addNote } from "./types";
import { deleteNote } from "./types";
import { editNote } from "./types";

export const addNoteAction = (note) => ({
  type: addNote,
  payload: note,
});

export const deleteNoteAction = (id) => ({
  type: deleteNote,
  payload: id,
});

export const editNoteAction = (id, editText, editTitle) => ({
  type: editNote,
  payload: id,
  editText,
  editTitle,
});
