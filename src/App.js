import Home from "./components/Home";
import DeletedNotes from "./components/DeletedNotes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
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
