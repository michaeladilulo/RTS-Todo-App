import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompletedLists from './Pages/CompleteLists'
import Home from "./Pages/Home";
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Task from './Components/Task/Task';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/completed' element={<CompletedLists />}/>
          {/* POST = /task, where this is /list/:listId/task => what is happening here? */}
          <Route path='/list/:listId/task' element={<Task title = '' />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
