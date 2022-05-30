import { createSlice } from "@reduxjs/toolkit";

const getInitialPostits = () => {
  const localNotesList = window.localStorage.getItem("notesList");

  // to verify if there are already notes created
  // it is necessary to check the length after parse it
  if (JSON.parse(localNotesList).length > 0) {
    // to parse the notes list if there is one in the localStorage
    return JSON.parse(localNotesList);
  }
  // If there are no notes so it has to be created a empty array
  window.localStorage.setItem("notesList", JSON.stringify([]));
  return [];
};

const initialList = {
  // creating a function to obtain the initial postits from the local storage.
  notesList: getInitialPostits(),
};

export const notesSlice = createSlice({
  name: "note",
  initialState: initialList,
  reducers: {
    addNote: (state, action) => {
      // taking the notes created:
      const notesList = window.localStorage.getItem("notesList");
      state.notesList.push(action.payload);
      const postitsList = JSON.parse(notesList);
      // to take all the notes already created
      postitsList.push({ ...action.payload });
      // to update the localStorage
      window.localStorage.setItem("notesList", JSON.stringify(postitsList));
    },

    deleteNote: (state, action) => {
      const notesList = window.localStorage.getItem("notesList");
      const postitsList = JSON.parse(notesList);
      postitsList.forEach((element, index) => {
        if (element.id === action.payload) {
          // to take the note out of the array.
          //the second argument is the amount of elements to take out.
          postitsList.splice(index, 1);
        }
      });
      // to update the localStorage
      window.localStorage.setItem("notesList", JSON.stringify(postitsList));
      //to update the state
      state.notesList = postitsList;
    },

    editNote: (state, action) => {
      const noteList = window.localStorage.getItem("notesList");
      const postitsList = JSON.parse(noteList);
      postitsList.forEach((element) => {
        if (element.id === action.payload.id) {
          element.note = action.payload.note;
          element.title = action.payload.title;
        }
      });
      // to update the localStorage
      window.localStorage.setItem("notesList", JSON.stringify(postitsList));
      //to update the state
      state.notesList = postitsList;
    },
  },
});

export const { addNote, deleteNote, editNote } = notesSlice.actions;
export default notesSlice.reducer;
