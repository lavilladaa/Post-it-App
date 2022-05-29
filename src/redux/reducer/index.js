import { addNote, deleteNote, editNote } from "../actions/types";

const notesReducer = (state, action) => {
  switch (action.type) {
    case addNote:
      return {
        ...state,
        postits: [state.postits, action.payload],
      };

    case deleteNote:
      return {
        ...state,
        postits: state.postits.filter((note) => note.id !== action.payload),
      };

    case editNote:
      return {
        ...state,
        postits: state.postits.map((element, index) => {
          //
          if (index === action.payload.id) {
            element.note = action.payload.editedText;
            element.title = action.payload.editedTitle;
          }
          // to return all the elements the return has to be outside the if
          return element;
        }),
      };
    default:
      return state;
  }
};

export default notesReducer;
