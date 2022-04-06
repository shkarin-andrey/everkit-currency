import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './style.scss'
import Main from '../../pages/Main';
import Search from './../../pages/Search';
import Token from '../../pages/Token';
import Page404 from '../../pages/Page404';

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="search" element={<Search />} />
          <Route path=":address" element={<Token />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
