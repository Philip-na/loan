import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashbaord/Dashboard';
import Home from './components/Pages/Home/Home';
import Loan from './components/Pages/Loan/Loan'
import Pagelayout from './components/Pagelayout/Pagelayout';


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes >
      <Route element={<Pagelayout/>}>
      <Route  index element={<Dashboard/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/loan' element={<Loan/>}/>
      </Route>
      
    </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App
