import React from 'react';

function App() {
  const menu = [
    {
      category: "Breakfast",
      foodList: [
        { name: "Coffee", price: 'Rs.100' },
        { name: "Biscuits", price: 'Rs.200' },
        { name: "Milk Tea", price: 'Rs.50' },
      ],
    },
    {
      category: "Lunch",
      foodList: [
        { name: "Dalbhaat", price: 'Rs.500' },
        { name: "Masu-dahi", price: 'Rs.800' },
        { name: "Khashi masu", price: 'Rs.2000' },
      ],
    },
  ];

  return (
    <div className="restaurant-menu">
      <header>
        <h1>Restaurant Menu</h1>
      </header>
      {menu.map((item, index) => (
        <div key={index}>
          <h2>{item.category}</h2>
          <ul>
            {item.foodList.map((food, i) => (
              <li key={i}>
                {food.name} - {food.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
