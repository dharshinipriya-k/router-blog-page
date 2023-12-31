import React from 'react'
import TopBar from './components/TopBar'
import All from './components/All'
import FSD from './components/FSD'
import CyberSecurity from './components/CyberSecurity'
import DataScience from './components/DataScience'
import Career from './components/Career'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'


function App() {
  return <div id="container">

    <BrowserRouter>
    <TopBar/>
    <Routes>

  <Route path='/all' element={<All/>}/>
  <Route path='/fsd' element={<FSD/>}/>
  <Route path='/cybersecurity' element={<CyberSecurity/>}/>
  <Route path='/datascience' element={<DataScience/>}/>
  <Route path='/career' element={<Career/>}/>
  <Route path='*' element={<Navigate to='all/'/>}/>

    </Routes>
    
    </BrowserRouter>

  </div>
}

export default App