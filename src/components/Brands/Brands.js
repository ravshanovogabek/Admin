import React, { useState } from 'react';
import './brands.css';

const Brands = () => {
    const [brands, setBrands] = useState([
        { id: 1, name: 'Apple', logo: 'https://purepng.com/public/uploads/large/purepng.com-apple-logologobrand-logoiconslogos-251519938788qhgdl.png', country: 'USA', flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg' },
        { id: 2, name: 'Nike', logo: 'https://pngimg.com/uploads/nike/nike_PNG6.png', country: 'USA', flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg' },
        { id: 3, name: 'Samsung', logo: 'https://i.pinimg.com/originals/dc/36/c1/dc36c1d02dfe2ec192b7ec6d2289cb2d.png', country: 'South Korea', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg' },
        { id: 4, name: 'Louis Vuitton', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Louis_Vuitton_logo_and_wordmark.svg/246px-Louis_Vuitton_logo_and_wordmark.svg.png', country: 'France', flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg' },
        { id: 5, name: 'Coca-Cola', logo: 'https://i.pinimg.com/originals/1e/c1/d2/1ec1d2ce366d1f603b1bde70ae508063.png', country: 'USA', flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg' }
    ]);

    const handleEdit = (id) => {
        alert(`Edit brand with ID: ${id}`);
    };

    const handleDelete = (id) => {
        setBrands(brands.filter(brand => brand.id !== id));
    };

    const handleAdd = () => {
        const newBrand = { id: brands.length + 1, name: 'New Brand', logo: 'https://example.com/default-logo.png', country: 'Country', flag: 'https://example.com/default-flag.png' };
        setBrands([...brands, newBrand]);
    };

    return (
        <div className="brands">
            <div className="brands-header">
                <h1>Brand Management</h1>
                <button className="add-brand" onClick={handleAdd}>+ Add New Brand</button>
            </div>
            <table className="brands-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Logo</th>
                        <th>Country</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {brands.map(brand => (
                        <tr key={brand.id}>
                            <td>{brand.name}</td>
                            <td><img src={brand.logo} alt={brand.name} className="brand-logo" /></td>
                            <td>
                                <div className="country-info">
                                    <img src={brand.flag} alt={brand.country} className="country-flag" />
                                    <span>{brand.country}</span>
                                </div>
                            </td>
                            <td>
                                <button className="edit-btn" onClick={() => handleEdit(brand.id)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(brand.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Brands;
