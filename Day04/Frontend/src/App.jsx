import React from 'react';

function App() {
  // Correct object declaration:
  // Use '=' to assign, and separate properties with commas, not semicolons
  const Laptop = {
    name: "Lenovo Ideapad Gaming",
    deviceModel: "3124h",
    color : "black ",
    Ram:"32 gb",
    ssd:"1024 GB",
  };

console.log(Laptop.name)


  // Return JSX to render the Laptop details on the page
  return (
    <div>
      <h1>Laptop Details</h1>
      <p><strong>Name:</strong> {Laptop.name}</p>
      <p><strong>Model:</strong> {Laptop.deviceModel}</p>
      <p><strong>Color:</strong> {Laptop.color}</p>
      <p><strong>Ram:</strong> {Laptop.Ram}</p>
      <p><strong>ssd:</strong> {Laptop.ssd}</p>
    </div>
  );
}

export default App;
