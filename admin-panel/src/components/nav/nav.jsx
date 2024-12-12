/* eslint-disable react/prop-types */
import "./nav.css";
import Queries from "../queries";
import Stable from "../landing/student_table";

function Nav({ setcurrComp, setselectedMentor }) {
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
          <button onClick={() => setcurrComp(<Stable />)}>Home</button>
          <button onClick={() => setcurrComp(<Queries />)}>Queries</button>
        </div>

        <form className="mentors_list">
          <select
            id="mentors"
            onChange={(e) => setselectedMentor(e.target.value)}
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
