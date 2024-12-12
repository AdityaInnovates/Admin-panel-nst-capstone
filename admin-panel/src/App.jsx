import Nav from './components/nav/nav'
import './App.css'
import Stable from './components/landing/student_table'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useState } from 'react'
import Evaluation from './components/evalutation/evaluation'

function App() {

  const [currComp, setcurrComp] = useState(<Stable/>)


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' 
              element={
              <>
                <Nav setcurrComp= {setcurrComp} />
                  {currComp}
              </>
            }
        />
        <Route path='/evaluate'
              element = {
                <Evaluation/>
              }
        />
      </Routes>  
    </BrowserRouter>
    </>
  )
}

export default App
