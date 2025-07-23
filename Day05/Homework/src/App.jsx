import React from 'react'

function App() {

  const schoolLibrary=[
    //starting of system
    {
      library:"List of books Present in library :",

      artificialintelligence:[
        "author = surajan shrestha",
        "cost=Rs.3580",
        "date of publish = 15 july 2022",
        "edition = 2nd edition",
        "quantity = 300 piece"
      ],

      physics:[
         "author = siddhartha bajcharya",
        "cost=Rs.1880",
        "date of publish = 25 mar 2021",
        "vedition = 1st edition",
        "quantity = 200 pieces"
      ],

      dsa:[
        "author = Arjun Lama",
        "cost=Rs.2500",
        "date of publish = 08 jul 2024",
        "edition = 3rd edition",
        "quantity = 400 pieces"
      ],

      math:[
        "author = Sagar Lama",
        "cost=Rs.1200",
        "date of publish = 18 Aug 2025",
        "edition = 5th edition",
        "quantity = 220 pieces"

      ],
      biology:[
        "author = Ramesh Koirala",
        "cost=Rs.2100",
        "date of publish = 12 Feb 2023",
        "edition = 4th edition",
        "quantity = 180 pieces"
      ],

      chemistry:[
        "author = Anjali Thapa",
        "cost=Rs.2750",
        "date of publish = 05 May 2024",
        "edition = 2nd edition",
        "quantity = 150 pieces"
      ],

      history:[
        "author = Binod Shrestha",
        "cost=Rs.1600",
        "date of publish = 19 Sep 2021",
        "edition = 3rd edition",
        "quantity = 230 pieces"
      ],

      geography:[
        "author = Sita Gurung",
        "cost=Rs.2000",
        "date of publish = 10 Nov 2022",
        "edition = 1st edition",
        "quantity = 190 pieces"
      ],

      economics:[
        "author = Prakash Lama",
        "cost=Rs.1800",
        "date of publish = 22 Jan 2023",
        "edition = 2nd edition",
        "quantity = 210 pieces"
      ],

      english:[
        "author = Sabina Rai",
        "cost=Rs.1400",
        "date of publish = 30 Mar 2020",
        "edition = 5th edition",
        "quantity = 250 pieces"
      ],   
    },


    //Student details 
    {
      s_id:"Name Of Student Who borrowed books from schoolLibrary :",
      csc_11: [
      "name of student = Surajan Shrestha",
      "bookBorrowed = Dsa",
      "edition = 3rd edition",
      "dateOfBorrow = 25 Jul 2025",
      "dateToReturn = 04 Aug 2025"
      ],

      mgmt_03: [
        "name of student = Anjali Thapa",
        "bookBorrowed = Economics",
        "edition = 2nd edition",
        "dateOfBorrow = 12 Aug 2025",
        "dateToReturn = 22 Aug 2025"
      ],

      er_07: [
        "name of student = Ramesh Koirala",
        "bookBorrowed = Biology",
        "edition = 4th edition",
        "dateOfBorrow = 01 Sep 2025",
        "dateToReturn = 11 Sep 2025"
      ],

      csc_29: [
        "name of student = Binod Shrestha",
        "bookBorrowed = History",
        "edition = 3rd edition",
        "dateOfBorrow = 15 Jul 2025",
        "dateToReturn = 25 Jul 2025"
      ],

      mgmt_17: [
        "name of student = Sita Gurung",
        "bookBorrowed = Geography",
        "edition = 1st edition",
        "dateOfBorrow = 18 Jul 2025",
        "dateToReturn = 28 Jul 2025"
      ],

      er_02: [
        "name of student = Prakash Lama",
        "bookBorrowed = Physics",
        "edition = 1st edition",
        "dateOfBorrow = 20 Jul 2025",
        "dateToReturn = 30 Jul 2025"
      ],

      csc_05: [
        "name of student = Sabina Rai",
        "bookBorrowed = English",
        "edition = 5th edition",
        "dateOfBorrow = 22 Jul 2025",
        "dateToReturn = 01 Aug 2025"
      ],

      mgmt_08: [
        "name of student = Arjun Lama",
        "bookBorrowed = Math",
        "edition = 5th edition",
        "dateOfBorrow = 24 Jul 2025",
        "dateToReturn = 03 Aug 2025"
      ],

      er_21: [
        "name of student = Siddhartha Bajcharya",
        "bookBorrowed = Dsa",
        "edition = 3rd edition",
        "dateOfBorrow = 26 Jul 2025",
        "dateToReturn = 05 Aug 2025"
      ],

      csc_14: [
        "name of student = Sagar Lama",
        "bookBorrowed = Physics",
        "edition = 1st edition",
        "dateOfBorrow = 28 Jul 2025",
        "dateToReturn = 07 Aug 2025"
      ],

     

    }
  ];


  //console section

  //book details
  console.log(schoolLibrary[0].library)
  console.log("Artificialintelligence",schoolLibrary[0].artificialintelligence)
  console.log("Physics",schoolLibrary[0].physics)
  console.log("Dsa",schoolLibrary[0].dsa)
  console.log("Math",schoolLibrary[0].math)
  console.log("Biology:", schoolLibrary[0].biology);
  console.log("Chemistry:", schoolLibrary[0].chemistry);
  console.log("History:", schoolLibrary[0].history);
  console.log("Geography:", schoolLibrary[0].geography);
  console.log("Economics:", schoolLibrary[0].economics);
  console.log("English:", schoolLibrary[0].english);


 //student details who took books 
  console.log(schoolLibrary[1].s_id)
  console.log("student_id: csc_11", schoolLibrary[1].csc_11);
  console.log("student_id: mgmt_03", schoolLibrary[1].mgmt_03);
  console.log("student_id: er_07", schoolLibrary[1].er_07);
  console.log("student_id: csc_29", schoolLibrary[1].csc_29);
  console.log("student_id: mgmt_17", schoolLibrary[1].mgmt_17);
  console.log("student_id: er_02", schoolLibrary[1].er_02);
  console.log("student_id: csc_05", schoolLibrary[1].csc_05);
  console.log("student_id: mgmt_08", schoolLibrary[1].mgmt_08);
  console.log("student_id: er_21", schoolLibrary[1].er_21);
  console.log("student_id: csc_14", schoolLibrary[1].csc_14);

   
 return (
  <div style={{ padding: 20 }}>
    <h1>{schoolLibrary[0].library}</h1>

    <h3>Artificial Intelligence :</h3>
    <ul>
      <li>{schoolLibrary[0].artificialintelligence[0]}</li>
      <li>{schoolLibrary[0].artificialintelligence[1]}</li>
      <li>{schoolLibrary[0].artificialintelligence[2]}</li>
      <li>{schoolLibrary[0].artificialintelligence[3]}</li>
      <li>{schoolLibrary[0].artificialintelligence[4]}</li>
    </ul>

    <h3>Physics</h3>
    <ul>
      <li>{schoolLibrary[0].physics[0]}</li>
      <li>{schoolLibrary[0].physics[1]}</li>
      <li>{schoolLibrary[0].physics[2]}</li>
      <li>{schoolLibrary[0].physics[3]}</li>
      <li>{schoolLibrary[0].physics[4]}</li>
    </ul>

    <h3>DSA</h3>
    <ul>
      <li>{schoolLibrary[0].dsa[0]}</li>
      <li>{schoolLibrary[0].dsa[1]}</li>
      <li>{schoolLibrary[0].dsa[2]}</li>
      <li>{schoolLibrary[0].dsa[3]}</li>
      <li>{schoolLibrary[0].dsa[4]}</li>
    </ul>

    <h3>Math</h3>
    <ul>
      <li>{schoolLibrary[0].math[0]}</li>
      <li>{schoolLibrary[0].math[1]}</li>
      <li>{schoolLibrary[0].math[2]}</li>
      <li>{schoolLibrary[0].math[3]}</li>
      <li>{schoolLibrary[0].math[4]}</li>
    </ul>

    <h3>Biology</h3>
    <ul>
      <li>{schoolLibrary[0].biology[0]}</li>
      <li>{schoolLibrary[0].biology[1]}</li>
      <li>{schoolLibrary[0].biology[2]}</li>
      <li>{schoolLibrary[0].biology[3]}</li>
      <li>{schoolLibrary[0].biology[4]}</li>
    </ul>

    <h3>Chemistry</h3>
    <ul>
      <li>{schoolLibrary[0].chemistry[0]}</li>
      <li>{schoolLibrary[0].chemistry[1]}</li>
      <li>{schoolLibrary[0].chemistry[2]}</li>
      <li>{schoolLibrary[0].chemistry[3]}</li>
      <li>{schoolLibrary[0].chemistry[4]}</li>
    </ul>

    <h3>History</h3>
    <ul>
      <li>{schoolLibrary[0].history[0]}</li>
      <li>{schoolLibrary[0].history[1]}</li>
      <li>{schoolLibrary[0].history[2]}</li>
      <li>{schoolLibrary[0].history[3]}</li>
      <li>{schoolLibrary[0].history[4]}</li>
    </ul>

    <h3>Geography</h3>
    <ul>
      <li>{schoolLibrary[0].geography[0]}</li>
      <li>{schoolLibrary[0].geography[1]}</li>
      <li>{schoolLibrary[0].geography[2]}</li>
      <li>{schoolLibrary[0].geography[3]}</li>
      <li>{schoolLibrary[0].geography[4]}</li>
    </ul>

    <h3>Economics</h3>
    <ul>
      <li>{schoolLibrary[0].economics[0]}</li>
      <li>{schoolLibrary[0].economics[1]}</li>
      <li>{schoolLibrary[0].economics[2]}</li>
      <li>{schoolLibrary[0].economics[3]}</li>
      <li>{schoolLibrary[0].economics[4]}</li>
    </ul>

    <h3>English</h3>
    <ul>
      <li>{schoolLibrary[0].english[0]}</li>
      <li>{schoolLibrary[0].english[1]}</li>
      <li>{schoolLibrary[0].english[2]}</li>
      <li>{schoolLibrary[0].english[3]}</li>
      <li>{schoolLibrary[0].english[4]}</li>
    </ul>

    <hr />

    <h1>{schoolLibrary[1].s_id}</h1>

    <h4>Student csc_11</h4>
    <ul>
      <li>{schoolLibrary[1].csc_11[0]}</li>
      <li>{schoolLibrary[1].csc_11[1]}</li>
      <li>{schoolLibrary[1].csc_11[2]}</li>
      <li>{schoolLibrary[1].csc_11[3]}</li>
      <li>{schoolLibrary[1].csc_11[4]}</li>
    </ul>

    <h4>Student mgmt_03</h4>
    <ul>
      <li>{schoolLibrary[1].mgmt_03[0]}</li>
      <li>{schoolLibrary[1].mgmt_03[1]}</li>
      <li>{schoolLibrary[1].mgmt_03[2]}</li>
      <li>{schoolLibrary[1].mgmt_03[3]}</li>
      <li>{schoolLibrary[1].mgmt_03[4]}</li>
    </ul>

    <h4>Student er_07</h4>
    <ul>
      <li>{schoolLibrary[1].er_07[0]}</li>
      <li>{schoolLibrary[1].er_07[1]}</li>
      <li>{schoolLibrary[1].er_07[2]}</li>
      <li>{schoolLibrary[1].er_07[3]}</li>
      <li>{schoolLibrary[1].er_07[4]}</li>
    </ul>

    <h4>Student csc_29</h4>
    <ul>
      <li>{schoolLibrary[1].csc_29[0]}</li>
      <li>{schoolLibrary[1].csc_29[1]}</li>
      <li>{schoolLibrary[1].csc_29[2]}</li>
      <li>{schoolLibrary[1].csc_29[3]}</li>
      <li>{schoolLibrary[1].csc_29[4]}</li>
    </ul>

    <h4>Student mgmt_17</h4>
    <ul>
      <li>{schoolLibrary[1].mgmt_17[0]}</li>
      <li>{schoolLibrary[1].mgmt_17[1]}</li>
      <li>{schoolLibrary[1].mgmt_17[2]}</li>
      <li>{schoolLibrary[1].mgmt_17[3]}</li>
      <li>{schoolLibrary[1].mgmt_17[4]}</li>
    </ul>

    <h4>Student er_02</h4>
    <ul>
      <li>{schoolLibrary[1].er_02[0]}</li>
      <li>{schoolLibrary[1].er_02[1]}</li>
      <li>{schoolLibrary[1].er_02[2]}</li>
      <li>{schoolLibrary[1].er_02[3]}</li>
      <li>{schoolLibrary[1].er_02[4]}</li>
    </ul>

    <h4>Student csc_05</h4>
    <ul>
      <li>{schoolLibrary[1].csc_05[0]}</li>
      <li>{schoolLibrary[1].csc_05[1]}</li>
      <li>{schoolLibrary[1].csc_05[2]}</li>
      <li>{schoolLibrary[1].csc_05[3]}</li>
      <li>{schoolLibrary[1].csc_05[4]}</li>
    </ul>

    <h4>Student mgmt_08</h4>
    <ul>
      <li>{schoolLibrary[1].mgmt_08[0]}</li>
      <li>{schoolLibrary[1].mgmt_08[1]}</li>
      <li>{schoolLibrary[1].mgmt_08[2]}</li>
      <li>{schoolLibrary[1].mgmt_08[3]}</li>
      <li>{schoolLibrary[1].mgmt_08[4]}</li>
    </ul>

    <h4>Student er_21</h4>
    <ul>
      <li>{schoolLibrary[1].er_21[0]}</li>
      <li>{schoolLibrary[1].er_21[1]}</li>
      <li>{schoolLibrary[1].er_21[2]}</li>
      <li>{schoolLibrary[1].er_21[3]}</li>
      <li>{schoolLibrary[1].er_21[4]}</li>
    </ul>

    <h4>Student csc_14</h4>
    <ul>
      <li>{schoolLibrary[1].csc_14[0]}</li>
      <li>{schoolLibrary[1].csc_14[1]}</li>
      <li>{schoolLibrary[1].csc_14[2]}</li>
      <li>{schoolLibrary[1].csc_14[3]}</li>
      <li>{schoolLibrary[1].csc_14[4]}</li>
    </ul>
  </div>
);


}

export default App
