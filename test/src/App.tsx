import { FrappeProvider } from 'frappe-react-sdk' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Home} from "./pages/Home" 

function App() { 

  return ( 
      <FrappeProvider> 
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home /> } /> 
        </Routes>
        </BrowserRouter>
      </FrappeProvider> 
  )
}

export default App
