import React from 'react'
// import list from '../list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import {usestate, useEffect} from 'react'
import { get } from 'mongoose'
import axios from 'axios'
function Courses() {
    const [book, setBook] = React.useState([])
    React.useEffect(() => {
        const getBook = async () => {
            try {
                const response = await axios.get('http://localhost:4001/Books');
                const data = response.data;
               console.log(response.data);
                setBook(data);
            } catch (error) {
                console.log('Error fetching books:', error);
            }
        };
        getBook();
    }, []);
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl font-bold-[700] font-poppins md:text-4xl'>We're delighting to have you <span className='text-pink-600'>Here:!)</span></h1>
                    <p className='mt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt nisi praesentium odio sint a error delectus totam nemo, voluptatibus minima quas nostrum vitae labore magni officiis laboriosam nam assumenda ducimus.</p>
                   <Link to={"/"}> <button className='bg-pink-500 text-white font-poppins px-4 py-2 mt-6 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
               {book.map((item) => (
                <Cards key={item.id} item={item} />
                ))}
                </div>
            </div>
        </>
    )
}

export default Courses