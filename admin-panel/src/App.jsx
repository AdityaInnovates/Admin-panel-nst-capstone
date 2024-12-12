import Nav from "./components/nav/nav";
import "./App.css";
import StudentTable from "./components/landing/student_table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Evaluation from "./components/evalutation/evaluation";

function App() {
  const [selectedMentor, setselectedMentor] = useState("Vishal Sharma");
  const [currComp, setcurrComp] = useState(
    <StudentTable selectedMentor={selectedMentor} />
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav
                  setcurrComp={setcurrComp}
                  setselectedMentor={setselectedMentor}
                />
                {currComp}
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
