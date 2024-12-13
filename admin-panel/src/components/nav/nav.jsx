/* eslint-disable react/prop-types */
import "./nav.css";
// import Queries from "../queries";
// import StudentTable from "../landing/student_table";

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
    "Risabh Sharma",
    "Shivam Gupta",
    "Swati Priya",
    "Uttam Kumar Mahatto",
  ];

  function delToken() {

    localStorage.removeItem('authToken')
 }
   return (
    <>
      <nav>
        <div className="logo">Logo</div>
        <div className="menu">
          <button onClick={() => setcurrComp("student_table")}>Home</button>
          <button onClick={() => setcurrComp("Query")}>Queries</button>
        </div>

        <form className="mentors_list flex">
          <select
            id="mentors"
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
          <button onClick={delToken}>Logout</button>
        </form>

        
      </nav>
    </>
  );
}

export default Nav;
