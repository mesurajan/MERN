import React from "react";

function App() {
  const detailsOfMyself = {
    name: "Surajan Shrestha",
    Study: "Bachelors in Communication Science and Technology",
    skill: [
      "Full-stack development",
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "C/C++",
      "Python",
    ],
    interests: [
      "Software development",
      "Open source",
      "Machine Learning",
      "Cryptoarithmetic problems",
      "Operating Systems",
      "Database Management Systems",
    ],
    email: "surajansth2061@gmail.com",
  };

  console.log(detailsOfMyself.name);
  console.log(detailsOfMyself.Study);
  console.log(detailsOfMyself.skill);
  console.log(detailsOfMyself.interests);
  console.log(detailsOfMyself.email);

  return (
    <div>
      <p>
        <span style={{ fontSize: "30px" }}>Name :</span> {detailsOfMyself.name}
      </p>
      <p>Study: {detailsOfMyself.Study}</p>

      <p>Skills:</p>
      <ul>
        {detailsOfMyself.skill.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <p>Interests:</p>
      <ul>
        {detailsOfMyself.interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>

      <p>Email: {detailsOfMyself.email}</p>
    </div>
  );
}

export default App;
