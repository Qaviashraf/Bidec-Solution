import { useState } from 'react'
// Routers
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import { Home } from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
