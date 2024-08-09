import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './App.css'
import RootLayout from "./Layouts/RootLayout";
import CompleteLists from "./Pages/CompleteLists";
import ListForm from "./Components/ListForm/ListForm";
import ListCard from "./Components/ListCard/ListCard";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          <Route path='completed' element={<CompleteLists />}/>
      </Route>
  )
)

function App() {

  return (
    <>
    <RouterProvider router={router} />
    <ListForm />
    <ListCard />
    </>
    
    
  )
}

export default App
