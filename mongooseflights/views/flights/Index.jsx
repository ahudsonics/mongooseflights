import React from 'react';

const Index = ({ flights }) => {
  return (
    <div>
      <h1>All Flights</h1>
      <ul>
        {flights.map((flight) => (
          <li key={flight._id}>
            Airline: {flight.airline}, Flight No: {flight.flightNo}, Departure: {flight.departs}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;

