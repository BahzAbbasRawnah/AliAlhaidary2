import Page1 from './page1/page'
import Page2 from './page2/page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
  <div className='bg-primary-background'>
   <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />  
        <Route path="/page2" element={<Page2 />} /> 
      </Routes>
    </Router>
  </div>  
  )
}
