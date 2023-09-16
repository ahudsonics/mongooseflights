import React from 'react';

const New = ({ departsDate }) => {
  return (
    <div>
      <h1>Create a New Flight</h1>
      <form action="/flights" method="POST">
        <label htmlFor="airline">Airline:</label>
        <input type="text" id="airline" name="airline" required />
        <br />
        <label htmlFor="flightNo">Flight No:</label>
        <input type="number" id="flightNo" name="flightNo" required min="10" max="9999" />
        <br />
        <label htmlFor="departs">Departure:</label>
        <input type="datetime-local" id="departs" name="departs" defaultValue={departsDate} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default New;

