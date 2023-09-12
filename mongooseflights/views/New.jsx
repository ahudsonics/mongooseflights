import React from 'react';

const NewFlightForm = () => {
  return (
    <div>
      {/* Navigation bar */}
      <nav>
        <ul>
          <li><a href="/">ALL FLIGHTS</a></li>
          <li><a href="/flights/new">ADD FLIGHT</a></li>
        </ul>
      </nav>

      {/* New flight form */}
      <h1>Add New Flight</h1>
      <form action="/flights" method="POST">
        <label htmlFor="airline">Airline:</label>
        <select name="airline" id="airline">
          <option value="American">American</option>
          <option value="Southwest">Southwest</option>
          <option value="United">United</option>
        </select>
        <br />
        <label htmlFor="flightNo">Flight No:</label>
        <input type="number" name="flightNo" id="flightNo" required />
        <br />
        <label htmlFor="departs">Departure:</label>
        <input type="datetime-local" name="departs" id="departs" required />
        <br />
        <input type="submit" value="Create Flight" />
      </form>

      {/* Add CSS styles here */}
      <style>
        {/* Add your CSS for styling here */}
      </style>
    </div>
  );
};

export default NewFlightForm;
