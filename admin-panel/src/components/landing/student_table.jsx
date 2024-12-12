
import link from '../../assets/link.png'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Stable() {


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
    



    return(
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-[80px]">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='text-[15px]'>               
                        <th scope="col" className="px-6 py-3">Student name</th>
                        <th scope="col" className="px-6 py-3 ">Email</th>
                        <th scope="col" className="px-6 py-3 text-center">Github</th>
                        <th scope="col" className="px-6 py-3 text-center">Hosted Link</th>
                        <th scope="col" className="px-6 py-3">Query</th>
                        <th scope="col" className="px-6 py-3">Video</th>
                        <th scope="col" className="px-6 py-3 text-center">Report</th>
                        <th scope="col" className="px-6 py-3 text-center">Evaluated</th>
                        <th scope="col" className="px-6 py-3 text-center">Send Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map(item => (
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.Name}
                        </th>
                        <td className="px-2 py-2">{item.Email}</td>
                        <td className="px-2 py-2">
                            <div className='flex items-center justify-center'>
                                <a href={item.Github} target='blank'><img src={link} className='h-5'/></a>
                            </div>
                        </td>
             
                        <td className="px-2 py-2">
                            <div className='flex items-center justify-center'>
                                <a href={item.Hosted} target='blank'><img src={link} className='h-5'/></a>
                            </div>
                        </td>
                        <td className="px-2 py-2">
                        <div className="flex justify-center items-center">
                                        <div className="relative inline-block" >
                                            <div
                                                className="text-blue-600 cursor-pointer"
                                                onMouseEnter={() => setShowTooltipId(item.id)}
                                                onMouseLeave={() => setShowTooltipId(null)}
                                            >
                                                Show Query
                                            </div>
                                            {showTooltipId === item.id && (
                                                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-[350px] bg-black text-white text-center rounded p-2 z-10 ml-2">
                                                    <span className="absolute top-1/2 right-full transform -translate-y-1/2 border-transparent border-5 border-r-black"></span>
                                                    {item.Query}
                                                </div>
                                            )}
                                        </div>
                                  
                            </div>
                        </td>
                        <td className="px-2 py-2">
                            <div className='cursor-pointer flex items-center justify-center'>
                                <a href={item.Video} target='blank'><img src={link} className='h-5'/></a>
                            </div>
                        </td>
                        <td className="px-2 py-2 ">
                            <div className='flex justify-center items-center'>{item.Report}</div>
                        </td>
                        <td className="px-2 py-2">
                            <div className='flex justify-center items-center'>
                            <button disabled={item.Report === "Yes"} 
                                    onClick={() => navigate('/evaluate')}>Go</button>

                            </div>
                        </td>
                        <td className="px-2 py-2">
                            <div className='flex items-center justify-center'><button>Send</button></div>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
        </>
    )
}

export default Stable;