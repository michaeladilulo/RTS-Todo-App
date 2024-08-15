import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompletedLists from './Pages/CompleteLists'
import Home from "./Pages/Home";
import './App.css'
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/completed' element={<CompletedLists />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
