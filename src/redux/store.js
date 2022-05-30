import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";
// import reducer from "./reducer/index";
// import {createStore} from "redux";

// const initialList = {
//   postits: [
//     {
//       id: 1,
//       note: "",
//       title: "",
//     },
//   ],
// };

// export const store = configureStore(reducer, initialList);
export const store = configureStore({
  reducer: {
    //   name of the reducer is note
    note: noteReducer,
  },
});
