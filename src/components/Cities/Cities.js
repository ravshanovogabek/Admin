import React, { useState } from 'react';
import './cities.css';

const Cities = () => {
    const [citiesData, setCitiesData] = useState([
        { id: 1, name: "New York", data: "Population: 8.4M", image: "https://www.state.gov/wp-content/uploads/2022/01/shutterstock_248799484-scaled.jpg" },
        { id: 2, name: "Los Angeles", data: "Population: 4M", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/derco7e-a639a508-4013-49a0-9952-136943e5a719.png/v1/fill/w_1280,h_1304,q_80,strp/los_angeles_2077_by_eiskalterengel18_derco7e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMwNCIsInBhdGgiOiJcL2ZcL2JjNDcxOTRjLTQzODktNDBiMi1iMTMwLWUzZGU3NmRiNGVhMFwvZGVyY283ZS1hNjM5YTUwOC00MDEzLTQ5YTAtOTk1Mi0xMzY5NDNlNWE3MTkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.b91L9MTCwDsnwz1zcNvXzBQuZRY14eqmaE-o1vcqTz4" },
        { id: 3, name: "Chicago", data: "Population: 2.7M", image: "https://img.freepik.com/premium-photo/chicago-skyline-illustration-free-photo-hd-8k-wallpaper_915071-86030.jpg" },
    ]);

    const handleEdit = (id) => {
        // Logic to handle edit action (e.g., open a form to edit city details)
        const cityToEdit = citiesData.find(city => city.id === id);
        alert(`Edit city: ${cityToEdit.name}`);
    };

    const handleDelete = (id) => {
        // Logic to handle delete action
        const updatedCities = citiesData.filter(city => city.id !== id);
        setCitiesData(updatedCities);
        alert(`City with id ${id} has been deleted`);
    };

    return (
        <div className="cities">
            <h1>Cities</h1>
            <table className="cities-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Data</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {citiesData.map(city => (
                        <tr key={city.id}>
                            <td>{city.name}</td>
                            <td>{city.data}</td>
                            <td><img src={city.image} alt={city.name} className="city-image" /></td>
                            <td>
                                <button className="edit-btn" onClick={() => handleEdit(city.id)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(city.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cities;
