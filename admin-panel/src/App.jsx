import Nav from "./components/nav/nav";
import "./App.css";
import StudentTable from "./components/landing/student_table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Evaluation from "./components/evalutation/evaluation";
import Queries from "./components/queries";
import Login from "./components/login";

function App() {
  const [selectedMentor, setselectedMentor] = useState("Vishal Sharma");
  const [functocall, setfunctocall] = useState(() => { })
  const [curcompName, setcurcompName] = useState("student_table")


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login"
                  element = {<Login/>}
          />
          <Route
            path="/"
            element={
              <>
                <Nav
                  selectedMentor={selectedMentor}
                  
                  setcurrComp={setcurcompName}
                  setselectedMentor={setselectedMentor}
                  
                  functocall={functocall}
                />
                {curcompName == "student_table" ? 
                <StudentTable selectedMentor={selectedMentor} setfunctocall={setfunctocall} /> : <Queries />}
              </>
            }
          />
          <Route path="/evaluate" element={<Evaluation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
