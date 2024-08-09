import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './App.css'
import RootLayout from "./Layouts/RootLayout";
import CompleteLists from "./Pages/CompleteLists";
// NOTE: This is what I will use for font awesome. Will delete once it's been pushed for reference
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

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
    {/* TODO: Delete These 2 Font Awesome Icons - Pushing for Reference */}
    <FontAwesomeIcon icon={faTrash} className='delete-icon'/>
    <FontAwesomeIcon icon={faPencilAlt} className='edit-icon'/>
    </>
    
    
  )
}

export default App
