import { useEffect, useState } from 'react'
import { FaBars, FaEllipsisH, FaEllipsisV, FaTimes } from 'react-icons/fa'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  const [isShowing, setIsShowing] = useState(true);
  return (
    <>

      <Router>
        <div>
          <button onClick={() => setIsShowing(!isShowing)} className='absolute top-3 left-3 z-10'>
            {isShowing ? <FaBars color='#fff' size={25} /> : <FaTimes color='#fff' size={25} />}
          </button>
          <Sidebar hideControl={isShowing} />
          <Main setIsShowing={setIsShowing} />
        </div>
      </Router>
    </>
  )
}

export default App
