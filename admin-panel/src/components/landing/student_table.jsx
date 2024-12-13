/* eslint-disable react/prop-types */
import link from "../../assets/link.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StudentTable({ selectedMentor }) {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://backend-newton-capstone-eval.onrender.com/studentlist?mentor=" +
            selectedMentor,
          {
            headers: {
              "ngrok-skip-browser-warning": true,
            },
          }
        );
        console.log(response.data);

        if (response.data && response.data.data) {
          setTableData(response.data.data);
        }
      } catch (error) {
        if (error.response) {
          console.error(error.response.data);
          console.error(error.response.status);
          setError(`Error ${error.response.status}: ${error.response.data}`);
        } else {
          setError("Failed to fetch data.");
        }
        setTableData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedMentor]);

  const [showTooltipId, setShowTooltipId] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-[80px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-[15px]">
              <th scope="col" className="px-6 py-3">
                Student name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Github
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Hosted Link
              </th>
              <th scope="col" className="px-6 py-3">
                Query
              </th>
              <th scope="col" className="px-6 py-3">
                Video
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Report
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Evaluate
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Send Email
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(tableData) &&
              tableData.map((item) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td className="px-2 py-2">{item.email}</td>
                  <td className="px-2 py-2">
                    <div className="flex items-center justify-center">
                      <a
                        href={item.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={link} alt="Github link" className="h-5" />
                      </a>
                    </div>
                  </td>

                  <td className="px-2 py-2">
                    <div className="flex items-center justify-center">
                      <a href={item.hostedList} target="blank">
                        <img src={link} className="h-5" />
                      </a>
                    </div>
                  </td>
                  <td className="px-2 py-2">
                    <div className="flex justify-center items-center">
                      <div className="relative inline-block">
                        <div
                          className="text-blue-600 cursor-pointer"
                          onMouseEnter={() => setShowTooltipId(item._id)}
                          onMouseLeave={() => setShowTooltipId(null)}
                        >
                          Show Query
                        </div>
                        {showTooltipId === item._id && (
                          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-[350px] bg-black text-white text-center rounded p-2 z-10 ml-2">
                            <span className="absolute top-1/2 right-full transform -translate-y-1/2 border-transparent border-5 border-r-black"></span>
                            {item.query}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-2">
                    <div className="cursor-pointer flex items-center justify-center">
                      <a href={item.video} target="blank">
                        <img src={link} className="h-5" />
                      </a>
                    </div>
                  </td>
                  <td className="px-2 py-2 ">
                    <div className="flex justify-center items-center">
                      {item.report?.total > 0 ? (
                        <div>{item.report?.total||0}</div>
                      ) : (
                        <div>0</div>
                      )}
                    </div>
                  </td>
                  <td className="px-2 py-2">
                    <div className="flex justify-center items-center">
                      {item.report?.total ? (
                        <div>Evaluated</div>
                      ) : (
                        <button
                          disabled={item.report?.total > 0}
                          onClick={() => navigate(`/evaluate?id=${item._id}`)}
                        >
                          Go
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="px-2 py-2">
                    <div className="flex items-center justify-center">
                      <button aria-label={`Send email to ${item.email}`}>
                        Send
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentTable;
