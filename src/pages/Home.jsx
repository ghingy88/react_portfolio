import React from 'react';
import Title from '../components/Title';

const Home = () => {
    return (
        <>
        <Title title="&lt;Welcome /&gt;">
            {/* <p>&lt;Home /&gt;</p>
            <p>hi</p> */}
        </Title>
        <section className='h-full font-mono'>
        {/* <div className='container mx-auto h-full max-w-7xl'> */}
        <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between pt-8 xl:pb-24'>
        <div className='text-center xl:text-left max-w-[600px] flex flex-col'> 
            <h1 className="text-4xl font-bold">Hi</h1>
            <h1 className='text-4xl font-bold'>I'm <span className='text-indigo-600'>Ghingmo Luk <br></br></span>Information Systems Graduate</h1>
            <p className='pt-2'>Recent RMIT graduate with over a year of experience in professional IT environments. I am eager to contribute my skills
across various industries while continuously learning and embracing new opportunities. Passionate about applying my
expertise in a professional setting whilst learning new skills.</p>              
        </div>
        <div><p className=''>hidsdaaaaaaaaaaaaaaaaaaaaaaaa</p></div>
        </div>
        </div>
        </section>
</>
    );
};


export default Home;

