import React from 'react';
import avatar from '../assets/avatar.webp';

const Photo = () => {
    return(
        <div className='w-full h-full relative'>
            <div>
                <img className='w-[300px]' src={avatar} alt="avatar"></img>
            </div>
        </div>
    )
};

export default Photo;