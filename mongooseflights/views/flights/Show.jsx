import React from 'react';

const Show = ({ flight }) => {
  return (
    <div>
      <h1>Flight Details</h1>
      <p>Airline: {flight.airline}</p>
      <p>Flight No: {flight.flightNo}</p>
      <p>Departure: {flight.departs}</p>
      <p>Airport: {flight.airport}</p>
      <h2>Destinations:</h2>
      <ul>
        {flight.destinations.map((destination, index) => (
          <li key={index}>
            Airport: {destination.airport}, Arrival: {destination.arrival}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Show;
