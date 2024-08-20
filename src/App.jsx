import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage";
import BlogPage from './components/BlogPage';
import ABlogPage from './components/ABlogPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// src/assets/css3-alt.svg --> path for geting icons
export default function App() {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/blogs" element={<BlogPage />}></Route>
        <Route path="/aBlog" element={<ABlogPage />}></Route>
      </Routes>
    </Router>
  </>
}