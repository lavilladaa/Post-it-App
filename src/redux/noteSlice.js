import { createSlice } from "@reduxjs/toolkit";

const getInitialPostit = () => {
  const localNotesList = window.localStorage.getItem("notesList");
  if (localNotesList) {
    return JSON.parse(localNotesList);
  }
  window.localStorage.setItem("notesList", JSON.stringify([]));
  return [];
};

const initialList = {
  notesList: getInitialPostit(),
};

export const notesSlice = createSlice({
  name: "note",
  initialState: initialList,
  reducers: {
    addNote: (state, action) => {
      state.notesList.push(action.payload);
      const notesList = window.localStorage.getItem("notesList");
      if (notesList) {
        const postitsList = JSON.parse(notesList);
        postitsList.push({ ...action.payload });
        window.localStorage.setItem("notesList", JSON.stringify(postitsList));
      } else {
        window.localStorage.setItem(
          "notesList",
          JSON.stringify([...action.payload])
        );
      }
    },
    deleteNote: (state, action) => {
      const notesList = window.localStorage.getItem("notesList");
      if (notesList) {
        const postitsList = JSON.parse(notesList);
        postitsList.forEach((element, index) => {
          if (element.id === action.payload) {
            postitsList.splice(index, 1);
          }
        });
        window.localStorage.setItem("notesList", JSON.stringify(postitsList));
        state.notesList = postitsList;
      }
    },
    editNote: (state, action) => {
      const noteList = window.localStorage.getItem("notesList");
      if (noteList) {
        const postitsList = JSON.parse(noteList);
        postitsList.forEach((element, index) => {
          if (element.id === action.payload.id) {
            element.note = action.payload.note;
            element.title = action.payload.title;
          }
        });
        window.localStorage.setItem("notesList", JSON.stringify(postitsList));
        state.notesList = postitsList;
      }
    },
  },
});

export const { addNote, deleteNote, editNote } = notesSlice.actions;
export default notesSlice.reducer;
