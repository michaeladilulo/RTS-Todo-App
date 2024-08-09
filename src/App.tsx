import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './App.css'
import RootLayout from "./Layouts/RootLayout";
import CompleteLists from "./Pages/CompleteLists";

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
    </>
    
    
  )
}

export default App
