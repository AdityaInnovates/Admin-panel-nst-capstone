import { useState } from "react";
import { useNavigate } from "react-router-dom";
import link from '../../assets/link.png'

function Evaluation() {

    const tableData = [
        {
          id: 1,
          Name: "Aditya",
          Email: "aditya.2024@nst.rishihood.edu.in",
          Github: "https://github.com/orgs/capston-review-nst-ru/repositories",
          Hosted: "https://nxtup.in/",
          Query: "Sir, html css sikhado please!",
          Video: "https://www.youtube.com/",
          Report: "No",
          
        },
        {
            id: 2,
            Name: "Shreyansh Agrawal",
            Email: "aditya.2024@nst.rishihood.edu.in",
            Github: "https://github.com/orgs/capston-review-nst-ru/repositories",
            Hosted: "https://nxtup.in/",
            Query: "Sir, html css sikhado please!Sir, html css sikhado please!Sir, html css sikhado please!Sir, html css sikhado please!Sir, html css sikhado please!Sir, html css sikhado please!Sir, html css sikhado please!Sir, html css sikhado please!Sir, html css sikhado please!",
            Video: "https://www.youtube.com/",
            Report: "No",
            
          },
          {
            id: 3,
            Name: "Aditya",
            Email: "aditya.2024@nst.rishihood.edu.in",
            Github: "https://github.com/orgs/capston-review-nst-ru/repositories",
            Hosted: "https://nxtup.in/",
            Query: "Sir, html css sikhado please!",
            Video: "https://www.youtube.com/",
            Report: "Yes",
            
          },

          {
            id: 4,
            Name: "Aditya",
            Email: "aditya.2024@nst.rishihood.edu.in",
            Github: "https://github.com/orgs/capston-review-nst-ru/repositories",
            Hosted: "https://nxtup.in/",
            Query: "Sir, html css sikhado please!",
            Video: "https://www.youtube.com/",
            Report: "Yes",
            
          },
        
      ];

      const [showTooltipId, setShowTooltipId] = useState(null);
      const navigate = useNavigate();
    




    return (
        <>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-[80px]">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='text-[15px]'>               
                        <th scope="col" className="px-6 py-3">Main topic</th>
                        <th scope="col" className="px-6 py-3 ">Sub-topic</th>
                        <th scope="col" className="px-6 py-3 text-center">Marks</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            HTML
                        </th>
                        <td className="px-2 py-2">
                            <tr>
                                <td>Semantic HTML</td>
                                
                            </tr>
                            <tr>
                                <td>Semantic HTML</td>
                                
                            </tr>
                        </td>
                        <td className="px-2 py-2">
                            
                        </td>
             
                        <td className="px-2 py-2">
                        </td>
                        <td className="px-2 py-2">
                        
                        </td>
                        <td className="px-2 py-2">
            
                        </td>
                        <td className="px-2 py-2 ">
                            
                        </td>
                        <td className="px-2 py-2">
                            
                        </td>
                        <td className="px-2 py-2">
                            
                        </td>
                        </tr>
                  
                    </tbody>
                </table>
                </div>
        </>
    )
}

export default Evaluation;