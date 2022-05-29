import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/index";
// import {createStore} from "redux";

const initialList = {
  postits: [
    {
      id: 0,
      note: "",
      title: "",
    },
  ],
};

// export const store = configureStore(reducer, initialList);
export const store = configureStore({
  reducer: reducer,
  preloadedState: initialList,
});
