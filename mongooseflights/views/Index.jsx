import React from 'react';

const FlightsList = ({ flights }) => {
  return (
    <div>
      
      <nav>
        <ul>
          <li><a href="/">ALL FLIGHTS</a></li>
          <li><a href="/flights/new">ADD FLIGHT</a></li>
        </ul>
      </nav>

      
      <h1>All Flights</h1>
      <ul>
        {flights.map((flight) => (
          <li key={flight._id} className={flightIsDeparted(flight) ? 'departed' : ''}>
            Airline: {flight.airline}, Flight No: {flight.flightNo}, Departure: {flight.departs}
          </li>
        ))}
      </ul>

      
      <style>
        
        .departed {
          color: red;
        {'}'}
      </style>
    </div>
  );
};

export default FlightsList;
