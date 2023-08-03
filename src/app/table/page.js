'use client'
import React, { useState, useEffect } from 'react';

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setData(data);
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
                        <th colspan="5">Calling the API Get data</th>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Street</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.address.city}</td>
                            <td>{user.address.street}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;
