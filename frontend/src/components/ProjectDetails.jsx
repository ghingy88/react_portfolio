// import React from "react";


// const ProjectDetails = ({ title, description, image, languages, onButtonclick}) => {

//     return (
//         <div className="flex flex-wrap justify-center items-center border-solid border-2">
//             {image}
//             <div>
//                 <h2>{title}</h2>
//                 <p>{description}</p>
//                 <p>{languages}</p>
//                 <button onClick={onButtonclick}>View</button>
//             </div>
//         </div>
//     )
// };

// export default ProjectDetails;

import React, { useState, useEffect } from 'react';

const ProjectDetails = () => {
    // States for handling repo data, loading state, and errors
    const [repos, setRepos] = useState([]);  // Store repo data
    const [error, setError] = useState(null);  // Handle error state
  
    useEffect(() => {
      // Fetch data from GitHub API
      fetch('https://api.github.com/users/ghingy88/repos')
        .then((response) => response.json())  // Convert response to JSON
        .then((data) => {
          setRepos(data);  // Set the data to repos state
        })
        .catch((error) => {
          setError(error);  // Set error if there's an issue with the fetch

        });
    }, []); // Empty array ensures the effect runs only once after the component mounts

    if (error) {
        return <div className="text-center py-8 text-red-600">Error fetching data: {error.message}</div>;
      }
  

  
    return (
      <div className='container mx-auto py-8'>
        {/* <h2>GitHub Projects</h2> */}
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {repos.map((repo) => (
            <li className='border p-6' key={repo.id}>
              <h3 className='font-bold underline text-2xl pb-[20px]'>{repo.name}</h3>
              <p>{repo.description || "N/A"}</p>
              {/* <p>{repo.languages_url}</p> */}
              <a className="underline hover:bg-indigo-600" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default ProjectDetails;