import React from 'react'

function App()
{
  const calculator={
  header:"Calculator Design",
  }
  console.log(calculator.header);

  return (
    <div><h1><span>{calculator.header}</span></h1></div>
  );
}
export default App;