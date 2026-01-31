import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

function AdminDashboard() {
  const [sensorStatus, setSensorStatus] = useState('Healthy');
  const [indicatorTrends, setIndicatorTrends] = useState([]);

  useEffect(() => {
    // Simulate fetching indicator trends
    setIndicatorTrends([
      { name: 'NDVI', value: 0.8 },
      { name: 'NDWI', value: 0.6 },
      { name: 'Temperature', value: 25 },
    ]);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>System overview, indicator trends, and sensor health status will be displayed here.</p>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">System Overview</h2>
        <p>Sensor Status: {sensorStatus}</p>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Indicator Trends</h2>
        <ul>
          {indicatorTrends.map((trend, index) => (
            <li key={index}>
              {trend.name}: {trend.value}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdminDashboard;