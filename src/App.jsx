import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Commits from './pages/Commits'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/repositories/:owner/:repository/commit/:commitSHA" element={<Commits/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
