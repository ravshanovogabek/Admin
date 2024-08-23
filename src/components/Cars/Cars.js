import React, { useState } from 'react';
import './cars.css';

const Cars = () => {
    const [cars, setCars] = useState([
        { id: 1, name: 'Tesla Model S', logo: 'https://purepng.com/public/uploads/large/purepng.com-tesla-model-s-red-carcarvehicletransporttesla-961524657832miq7l.png', brand: { name: 'Tesla', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png' }, speed: '200 mph' },
        { id: 2, name: 'Ferrari F8', logo: 'https://i.pinimg.com/originals/66/56/99/665699c57132275881af397e299abdc2.png', brand: { name: 'Ferrari', image: 'https://www.cdnlogo.com/logos/f/89/ferrari-ges.svg' }, speed: '211 mph' },
        { id: 3, name: 'Lamborghini Aventador', logo: 'https://freepngimg.com/save/162562-lamborghini-yellow-free-transparent-image-hq/957x397', brand: { name: 'Lamborghini', image: 'https://www.freepnglogos.com/uploads/lamborghini-logo-png/lamborghini-lamborghini-logo-drive-6.png' }, speed: '217 mph' },
        { id: 4, name: 'Chevrolet Malibu', logo: 'https://images.carprices.com/pricebooks_data/usa/colorized/2024/Chevrolet/View2/Malibu/2LT/1ZF69_GXP.png', brand: { name: 'Chevrolet', image: 'https://1000logos.net/wp-content/uploads/2019/12/Chevrolet-logo.png' }, speed: '160 mph' },
        { id: 5, name: 'Rolls-Royce Phantom', logo: 'https://pngimg.com/d/rolls_royce_PNG21.png', brand: { name: 'Rolls-Royce', image: 'https://pngimg.com/d/rolls_royce_PNG27.png' }, speed: '155 mph' }
    ]);

    const handleEdit = (id) => {
        alert(`Edit car with ID: ${id}`);
    };

    const handleDelete = (id) => {
        setCars(cars.filter(car => car.id !== id));
    };

    const handleAdd = () => {
        const newCar = { id: cars.length + 1, name: 'New Car', logo: 'https://example.com/default-logo.png', brand: { name: 'New Brand', image: 'https://example.com/default-brand-logo.png' }, speed: '0 mph' };
        setCars([...cars, newCar]);
    };

    return (
        <div className="cars">
            <div className="cars-header">
                <h1>Car Management</h1>
                <button className="add-car" onClick={handleAdd}>+ Add New Car</button>
            </div>
            <table className="cars-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Logo</th>
                        <th>Brand</th>
                        <th>Speed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map(car => (
                        <tr key={car.id}>
                            <td>{car.name}</td>
                            <td><img src={car.logo} alt={car.name} className="car-logo" /></td>
                            <td className="car-brand">
                                <img src={car.brand.image} alt={car.brand.name} className="brand-logo" />
                                {car.brand.name}
                            </td>
                            <td>{car.speed}</td>
                            <td>
                                <button className="edit-btn" onClick={() => handleEdit(car.id)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(car.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cars;
