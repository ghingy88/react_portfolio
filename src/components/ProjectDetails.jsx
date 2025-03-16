import React from "react";


const ProjectDetails = ({ title, description, image, languages, onButtonclick}) => {

    return (
        <div className="flex flex-wrap justify-center items-center border-solid border-2">
            {image}
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{languages}</p>
                <button onClick={onButtonclick}>View</button>
            </div>
        </div>
    )
};

export default ProjectDetails;