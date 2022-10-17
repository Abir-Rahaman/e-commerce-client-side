import React from 'react';
import notFound from '../../images/404.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
        <div className='pt-20 flex justify-center'>
            <img src={notFound} alt="" />
        </div>
        <Link className='my-10 border-none btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:duration-500 px-8 py-2 text-white font-bold hover:rounded-3xl' to ='/'>Back to Home</Link>
        </>
    );
};

export default NotFound; 