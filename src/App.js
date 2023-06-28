import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log("INSIDE TRY");

      const response = await axios.get(
        "https://api.pipedream.com/v1/sources/dc_K0uRXB8/events",
        {
          headers: {
            Authorization: "Bearer f6403fc9787149a433f6dfddffdd794c"
          }
        }
      );
      console.log(response);
      setRequestData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  // const chartData = {
  //   labels: ['Request 1', 'Request 2', 'Request 3'], // Replace with your data labels
  //   datasets: [
  //     {
  //       label: 'Request Count',
  //       data: [10, 5, 8], // Replace with your data values
  //       backgroundColor: 'rgba(75,192,192,0.6)',
  //     },
  //   ],
  // };

  return (
    <div>
      <h1>Request Data Dashboard</h1>
      {/* Header component */}
      {/* Sidebar component */}
      <div>
        {/* Data Table component */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Timestamp</th>
              <th>Details</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requestData.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.timestamp}</td>
                <td>{request.details}</td>
                <td>{request.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div>
        <Bar data={chartData} />
      </div> */}
      {/* Search Bar component */}
      {/* Pagination component */}
      {/* Error Handling and Loading States */}
      {/* Footer component */}
    </div>
  );
};

export default Dashboard;
