import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Cities from './components/Cities/Cities';
import Cars from './components/Cars/Cars';
import Brands from './components/Brands/Brands';
import Categories from './components/Categories/Categories';
import Models from './components/Models/Models';
import Login from './components/Login/Login';
import "./App.css"

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <div className="app">
                {!isAuthenticated ? (
                    <Routes>
                        <Route path="/*" element={<Login onLogin={handleLogin} />} />
                    </Routes>
                ) : (
                    <>
                        <Sidebar onLogout={handleLogout} />
                        <div className="content">
                            <Routes>
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/cities" element={<Cities />} />
                                <Route path="/cars" element={<Cars />} />
                                <Route path="/brands" element={<Brands />} />
                                <Route path="/categories" element={<Categories />} />
                                <Route path="/models" element={<Models />} />
                                <Route path="*" element={<Navigate to="/dashboard" />} />
                            </Routes>
                        </div>
                    </>
                )}
            </div>
        </Router>
    );
}

export default App;
