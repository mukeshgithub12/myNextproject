'use client'
import React, { useState, useEffect } from 'react';

const Table = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Add a loading state
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setData(data);
            setLoading(false); // Set loading to false when data is fetched
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false); // Set loading to false even in case of an error
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    if (loading) {
        return <div class="loader_globle"></div>;
    }

    // Filter the data based on the search query
    const filteredData = data.filter((user) => {
        const values = Object.values(user).map((value) =>
            typeof value === 'string' ? value.toLowerCase() : ''
        );
        return values.some((value) => value.includes(searchQuery.toLowerCase()));
    });

    return (
        <>
            <br />
            <br />
            {/* <hr /> */}
            <input
                className="float-right px-4 mb-[10px] py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
            />
            <table>
                <thead>
                    <tr>
                        <th colSpan="5">Calling the API Get data</th>
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
                    {filteredData.map((user) => (
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
