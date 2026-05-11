import './App.css'
import Contact from './views/Contact'
import Dashboard from './views/Dashboard'
import { BrowserRouter, Route, Routes } from  'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App