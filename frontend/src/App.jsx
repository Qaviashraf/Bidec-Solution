
import { useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import Footer from './components/Footer'
import { NavBar } from './components/NavBar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-screen'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
