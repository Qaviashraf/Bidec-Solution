import { useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import Footer from './components/Footer'
import { NavBar } from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App
