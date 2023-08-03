'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
const Card = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setData(data.products);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <br />
            <br />
            <hr />
            <table>
                <thead>
                    <tr>
                        <th colspan="4">Calling the API Get data</th>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <th>Images</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.title}</td>
                            <td> <Image src={user.thumbnail} height={50} width={50} alt="image" /> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Card;
