import Home from './components/Home'
import DeletedNotes from './components/DeltedNotes'
import {BrowserRouter, Route, Routes} from "react-router-dom"


const App =()=>{
  
  return (
    <>    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/trash" element={<DeletedNotes/>}/>

        
    </Routes>
    </BrowserRouter>
    
    
    
    </>
  )
};

export default App;