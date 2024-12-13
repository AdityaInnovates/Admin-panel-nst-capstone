/* eslint-disable react/prop-types */
import "./nav.css";
import { useState } from "react";


function Nav({  setselectedMentor,selectedMentor,setcurrComp }) {
  const mentors = [
    "Vishal Sharma",
    "Ajay Sharma",
    "Aryan Singhal",
    "Jay Gupta",
    "Kartik Katiyar",
    "Narendra Kumar",
    "Neeraj Rawat",
    "Nischal Gupta",
    "Rahul Kumar",
    "Rashmi Kumari",
    "Rishabh Sharma",
    "Shivam Gupta",
    "Swati Priya",
    "Uttam Kumar Mahatto",
  ];

  function delToken() {
    localStorage.removeItem('authToken')
 }

    const [activeTab, setActiveTab] = useState("home");

    const handleClick = (tab) => {
      setActiveTab(tab); // Update the active tab state
    };


   return (
    <>
      <nav>
        <div className="logo">Logo</div>
        <div className="menu">
          <button onClick={() => {setcurrComp("student_table");handleClick("home")}}
                  className={activeTab === "home" ? "active" : ""}>Home</button>
          <button onClick={() => {setcurrComp("Query");handleClick("query")}} 
                  className={activeTab === "query" ? "active" : ""}>Queries</button>
        </div>

        <form className="mentors_list flex">
          <select
            id="mentors"
            className="mr-5"
            value={selectedMentor}
            onChange={async (e) => {
              setselectedMentor(e.target.value)
            }
            }
              
          >
            {mentors.map((name, index) => (
              <option key={index} value={name.toLowerCase()}>
                {name}
              </option>
            ))}
          </select>
          <button onClick={delToken} className="mr-10">Logout</button>
        </form>

        
      </nav>
    </>
  );
}

export default Nav;
