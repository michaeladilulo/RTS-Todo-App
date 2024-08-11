import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './App.css'
import RootLayout from "./Layouts/RootLayout";
import CompleteLists from "./Pages/CompleteLists";
import ListForm from "./Components/ListForm/ListForm";
import ListCard from "./Components/ListCard/ListCard";
import { useEffect, useState } from "react";
import axios from 'axios';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          <Route path='completed' element={<CompleteLists />}/>
      </Route>
  )
)



function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await axios.get('http://localhost:3000/list');
        console.log(response.data);
      } catch (error) {
        console.error('Error Fetching Items:', error)
      }
    };

    fetchLists();
  })

  return (
    <>
    <RouterProvider router={router} />
    <ListForm />
    <ListCard createdBy={""} completionGoal={null} title={""} completedOn={null} />
    </>
    
    
  )
}

export default App
