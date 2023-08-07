
'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Card = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true); // Add a loading state


    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Filter data based on the searchTerm
        const filtered = data.filter(user =>
            user.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm, data]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setData(data.products);
            setLoading(false); // Set loading to false even in case of an error
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false); // Set loading to false even in case of an error
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    if (loading) {
        return <div class="loader_globle"></div>;
    }

    return (
        <>
            <br />
            <br />
            <div className='mobile_card'>
                <h3 className='text-center py-6 text-xl font-bold'>Calling Api In Card</h3>
                <div className="px-4 py-7 m-auto w-2/6  ">
                    <input
                        type="text"
                        className="w-full p-2 border rounded-md border-solid border-1 border-indigo-500 focus-visible:"
                        placeholder="Search by title..."
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w_m">
                    {filteredData.map((user) => (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={user.id}>
                            <Image src={user.thumbnail} width={400} height={300} alt="Mobile" className="object-cover object-center" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{user.title}</div>
                                <p className="text-indigo-700 text-base">{user.description}</p>
                                <div className="text-xl mb-2">₹{user.price} </div>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Buy</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Card;
