/* eslint-disable react/prop-types */
import "./nav.css";
<<<<<<< HEAD
import Queries from "../queries";
import StudentTable from "../landing/student_table";
=======
>>>>>>> refs/remotes/origin/main


function Nav({  setselectedMentor,selectedMentor,setcurcompName }) {
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
  return (
    <>
      <nav>
        <div className="logo">Logo</div>
        <div className="menu">
<<<<<<< HEAD
          <button onClick={() => setcurrComp(<StudentTable />)}>Home</button>
          <button onClick={() => setcurrComp(<Queries />)}>Queries</button>
=======
          <button onClick={() => setcurcompName("student_table")}>Home</button>
          <button onClick={() => setcurcompName("queries_table")}>Queries</button>
>>>>>>> refs/remotes/origin/main
        </div>

        <form className="mentors_list">
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
        </form>
      </nav>
    </>
  );
}

export default Nav;
