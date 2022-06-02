import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './components/home/Home';
// import DeletedNotes from "./components/DeletedNotes";
import Trash from './components/trash/Trash';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/trash' element={<Trash />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
