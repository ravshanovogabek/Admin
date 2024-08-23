import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './dashboard.css';

// Register the components
ChartJS.register(
    ArcElement,    // For Pie chart
    CategoryScale, // For X-axis in Bar and Line charts
    LinearScale,   // For Y-axis in Bar and Line charts
    BarElement,    // For Bar chart
    PointElement,  // For Line chart points
    LineElement,   // For Line chart line
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const pieData = {
        labels: ['Tesla', 'Ferrari', 'Lamborghini', 'Chevrolet', 'Rolls-Royce'],
        datasets: [{
            data: [30, 25, 20, 15, 10],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
        }]
    };

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Cars Sold',
                backgroundColor: '#36A2EB',
                borderColor: '#36A2EB',
                borderWidth: 1,
                hoverBackgroundColor: '#36A2EB',
                hoverBorderColor: '#36A2EB',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Revenue ($)',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#FF6384',
                borderColor: '#FF6384',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#FF6384',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#FF6384',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65000, 59000, 80000, 81000, 56000, 55000, 40000]
            }
        ]
    };

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="stats">
                <div className="stat-item">
                    <h3>Total Cities</h3>
                    <p>15</p>
                </div>
                <div className="stat-item">
                    <h3>Total Cars</h3>
                    <p>120</p>
                </div>
                <div className="stat-item">
                    <h3>Total Brands</h3>
                    <p>30</p>
                </div>
                <div className="stat-item">
                    <h3>Total Categories</h3>
                    <p>8</p>
                </div>
            </div>

            <div className="charts">
                <div className="chart-item">
                    <h3>Car Brands Distribution</h3>
                    <Pie data={pieData} />
                </div>
                <div className="chart-item">
                    <h3>Cars Sold Over Time</h3>
                    <Bar data={barData} />
                </div>
                <div className="chart-item">
                    <h3>Revenue Over Time</h3>
                    <Line data={lineData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
