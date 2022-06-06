/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

const getInitialPostits = () => {
  const localNotesList = window.localStorage.getItem('notesList');
  if (localNotesList) {
    // to parse the notes list if there is one in the localStorage
    return JSON.parse(localNotesList);
  }
  // If there are no notes so it has to be created a empty array
  window.localStorage.setItem('notesList', JSON.stringify([]));
  return [];
};

const getDeletedPostits = () => {
  const localDeletedList = window.localStorage.getItem('deletedList');
  if (localDeletedList) {
    // to parse the notes list if there is one in the localStorage

    return JSON.parse(localDeletedList);
  }
  // If there are no notes so it has to be created a empty array
  window.localStorage.setItem('deletedList', JSON.stringify([]));
  return [];
};

const getColorPostit = () => {
  const localColorList = window.localStorage.getItem('colorList');
  if (localColorList) {
    // to parse the notes list if there is one in the localStorage

    return JSON.parse(localColorList);
  }
  // If there are no notes so it has to be created a empty array
  window.localStorage.setItem('colorList', JSON.stringify([]));
  return [];
};

const getBackState = () => {
 const localBackState=window.localStorage.getItem('backState');
 if (localBackState) {

  return JSON.parse(localBackState);

  
}

window.localStorage.setItem('backState', JSON.stringify(false));
return false;

}

const initialList = {
  // creating a function to obtain the initial postits from the local storage.
  notesList: getInitialPostits(),
  deletedList: getDeletedPostits(),
  colorList: getColorPostit(),
  backState:getBackState(),
};

export const notesSlice = createSlice({
  name: 'note',
  initialState: initialList,
  reducers: {
    addNote: (state, action) => {
      
      // eslint-disable-next-line quotes
      // taking the notes created from the local storage:
      const notesList = window.localStorage.getItem('notesList');

      const postitsList = JSON.parse(notesList);

      // to take all the notes already created
      postitsList.push({ ...action.payload });

      state.notesList.push(action.payload);
      // to update the localStorage
      window.localStorage.setItem('notesList', JSON.stringify(postitsList));

    },

    deleteNote: (state, action) => {
      const notesList = window.localStorage.getItem('notesList');
      const postitsList = JSON.parse(notesList);
      const deletedList = window.localStorage.getItem('deletedList');
      const postitsDeleted = JSON.parse(deletedList);

      postitsList.forEach((element, index) => {
        if (element.id === action.payload) {
          // to take the note out of the array.
          // the second argument is the amount of elements to take out.
          postitsList.splice(index, 1);

          // to save the deleted postit and render it in the trash page.
          postitsDeleted.push({
            note: element.note,
            title: element.title,
            id: element.id,
          });
        }
      });
      // to update the localStorage
      window.localStorage.setItem('notesList', JSON.stringify(postitsList));
      window.localStorage.setItem(
        'deletedList',
        JSON.stringify(postitsDeleted)
      );

      // to update the state
      state.notesList = postitsList;
      state.deletedList = postitsDeleted;
    },

    editNote: (state, action) => {
      const noteList = window.localStorage.getItem('notesList');
      const postitsList = JSON.parse(noteList);
      postitsList.forEach((element) => {
        if (element.id === action.payload.id) {
          element.note = action.payload.note;
          element.title = action.payload.title;
        }
      });
      // to update the localStorage
      window.localStorage.setItem('notesList', JSON.stringify(postitsList));
      // to update the state
      state.notesList = postitsList;
    },

    deleteNoteDef: (state, action) => {
      const deletedList = window.localStorage.getItem('deletedList');
      const postitsDeleted = JSON.parse(deletedList);

      postitsDeleted.forEach((element, index) => {
        if (element.id === action.payload) {
          // to take the note out of the array.
          // the second argument is the amount of elements to take out.
          postitsDeleted.splice(index, 1);
        }
      });
      // to update the localStorage
      window.localStorage.setItem(
        'deletedList',
        JSON.stringify(postitsDeleted)
      );

      // to update the state

      state.deletedList = postitsDeleted;
    },

    createColorsId: (state, action) => {
      // taking the notes created:
      const colorList = window.localStorage.getItem('colorList');
      const colorPostits = JSON.parse(colorList);

      colorPostits.push({ ...action.payload });
      state.colorList.push(action.payload);

      // state.colorList = colorPostits;

      // to update the localStorage
      window.localStorage.setItem('colorList', JSON.stringify(colorPostits));
    },

    colorChange: (state, action) => {
      // taking the notes created:
      const colorList = window.localStorage.getItem('colorList');
      const colorPostits = JSON.parse(colorList);

      colorPostits.forEach((element) => {
        if (element.id === action.payload.id) {
          element.color = action.payload.color;
        }
      });

      state.colorList = colorPostits;

      // to update the localStorage
      window.localStorage.setItem('colorList', JSON.stringify(colorPostits));
    },

    changeBackground: (state, action) => {
      
     const backgroundState = action.payload;

      state.backState=!backgroundState;
      // to update the localStorage
      
      window.localStorage.setItem('backState',JSON.stringify(!backgroundState));

    },
  },
});

export const {
  addNote,
  deleteNote,
  editNote,
  deleteNoteDef,
  colorChange,
  createColorsId,
  changeBackground
} = notesSlice.actions;
export default notesSlice.reducer;
