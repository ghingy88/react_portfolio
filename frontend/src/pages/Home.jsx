import React from 'react';
import Title from '../components/Title';
import Photo from '../components/Photo';

const Home = () => {
    return (
        <>
        <Title className="" title="&lt;Welcome /&gt;" />
            {/* <p>&lt;Home /&gt;</p>
            <p>hi</p> */}
      
        <section className='h-full'>
        {/* <div className='container mx-auto h-full max-w-7xl'> */}
        <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between pt-4 xl:pb-24'>
        <div className='text-center xl:text-left max-w-[600px] flex flex-col'> 
            <h1 className="text-2xl font-bold">Hello World</h1>
            <h1 className='text-4xl font-bold'>I'm <span className='text-indigo-600'>Ghingmo Luk <br></br></span>Information Systems Graduate</h1>
            <p className='pt-2'>Recent RMIT graduate with over a year of experience in professional IT environments. I am eager to contribute my skills
across various industries while continuously learning and embracing new opportunities. Passionate about applying my
expertise in a professional setting.</p>              
        </div>
        <div>
            <Photo />
        </div>
        </div>
        </div>
        </section>
        <hr className='w-full border-t border-gray-300 my-8'/>
        <section className='flex flex-col items-center'>
            {/* <button className='text-white bg-indigo-600 rounded-lg px-5 py-2 hover:scale-105 transition-transform duration-300' onClick={() => alert('it works')}>Explore<span>.</span></button> */}
            <button className='text-white bg-indigo-600 rounded-lg px-5 py-2 hover:scale-105 transition-transform duration-300' onClick={() => window.location.href ="https://ghingy88.netlify.app/"}>View old portfolio<span>.</span></button>

        </section>

</>
    );
};


export default Home;

