import Home from "./components/Home";
import DeletedNotes from "./components/DeletedNotes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import { useState } from "react";

const App = () => {
  // const [tasksItems, setTasksItems] = useState([""]);
  // const deletedPostits_p = localStorage.getItem("deletedPostits");
  // setTasksItems(JSON.parse(deletedPostits_p));
  // console.log(deletedPostits_p);
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/trash" element={<DeletedNotes />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
