import React from 'react'
import './App.css'

function App() {
//colege management system :
const teacher=[
  {
    listOfTeacher:"The List of teacher in this Univirsity are :",

    tid_002:[
      "Name = Surajan Shrestha",
      "Age = 22",
      "Gender = Male",
      "ph:no = +977 9816413787",
      "Address = Shankhamul -lalitpur",
      "Email = Surajansth2061@gmail.com",
      "subject = DSA"

    ],
    tid_417: [
      "Name = Anisha Khadka",
      "Age = 29",
      "Gender = Female",
      "ph:no = +977 9841234567",
      "Address = Koteshwor - Kathmandu",
      "Email = anisha.k@college.edu.np",
      "subject = Web Development"
    ],

    tid_782: [
      "Name = Ramesh Bhandari",
      "Age = 35",
      "Gender = Male",
      "ph:no = +977 9801122334",
      "Address = Baneshwor - Kathmandu",
      "Email = rameshb@univmail.com",
      "subject = Operating System"
    ],

    tid_653: [
      "Name = Sneha Adhikari",
      "Age = 31",
      "Gender = Female",
      "ph:no = +977 9812345678",
      "Address = Gwarko - Lalitpur",
      "Email = sneha.adhikari@tech.edu.np",
      "subject = Computer Networks"
    ],

    tid_909: [
      "Name = Deepak Joshi",
      "Age = 28",
      "Gender = Male",
      "ph:no = +977 9823456789",
      "Address = Satdobato - Lalitpur",
      "Email = djoshi@gmail.com",
      "subject = Machine Learning"
    ],

    tid_341: [
      "Name = Priyanka Shrestha",
      "Age = 26",
      "Gender = Female",
      "ph:no = +977 9845678912",
      "Address = Kalanki - Kathmandu",
      "Email = priyanka.s@eduportal.com",
      "subject = Database Systems"
    ],

    tid_587: [
      "Name = Bishal Karki",
      "Age = 34",
      "Gender = Male",
      "ph:no = +977 9809876543",
      "Address = Imadol - Lalitpur",
      "Email = bishalk@csfaculty.org",
      "subject = Computer Architecture"
    ],

    tid_726: [
      "Name = Reema Thapa",
      "Age = 30",
      "Gender = Female",
      "ph:no = +977 9811122233",
      "Address = Balkot - Bhaktapur",
      "Email = reema.t@learninghub.edu",
      "subject = Software Engineering"
    ],

    tid_392: [
      "Name = Nirajan Lama",
      "Age = 27",
      "Gender = Male",
      "ph:no = +977 9848098765",
      "Address = New Baneshwor - Kathmandu",
      "Email = nirajan.lama@teachmail.com",
      "subject = Artificial Intelligence"
    ],

    tid_619: [
      "Name = Sweta Rajbhandari",
      "Age = 33",
      "Gender = Female",
      "ph:no = +977 9801234432",
      "Address = Dhobighat - Lalitpur",
      "Email = swetar@compuni.edu.np",
      "subject = Data Science"
    ]

  }

];

const student=[
  {
    listOfStudent:"The list of Students Are : ",

    csc022:[
      "Name = Surajan Shrestha",
      "Age = 22",
      "faculty = Bsc.Csit",
      "Gender = Male",
      "Ph.no = +977 9816413787",
      "Email = Surajanshrestha201@gmail.com",
      "Address= shankhamul-lalitpur",
    ],
    csc105: [
      "Name = Anjali Rai",
      "Age = 21",
      "faculty = BBA",
      "Gender = Female",
      "Ph.no = +977 9801234567",
      "Email = anjali.rai@example.com",
      "Address= Maharajgunj - Kathmandu"
    ],

    csc209: [
      "Name = Bikash Thapa",
      "Age = 23",
      "faculty = Bsc.Csit",
      "Gender = Male",
      "Ph.no = +977 9812345678",
      "Email = bikash.thapa@example.com",
      "Address= Jawalakhel - Lalitpur"
    ],

    csc312: [
      "Name = Sita Gurung",
      "Age = 22",
      "faculty = BSW",
      "Gender = Female",
      "Ph.no = +977 9845678901",
      "Email = sita.gurung@example.com",
      "Address= Patan - Lalitpur"
    ],

    csc417: [
      "Name = Ramesh Koirala",
      "Age = 24",
      "faculty = Bsc.Microbiology",
      "Gender = Male",
      "Ph.no = +977 9809876543",
      "Email = ramesh.koirala@example.com",
      "Address= New Baneshwor - Kathmandu"
    ],

    csc523: [
      "Name = Nisha Lama",
      "Age = 20",
      "faculty = BBS",
      "Gender = Female",
      "Ph.no = +977 9811223344",
      "Email = nisha.lama@example.com",
      "Address= Bhaktapur"
    ],

    csc634: [
      "Name = Prakash Adhikari",
      "Age = 22",
      "faculty = Bsc.Physics",
      "Gender = Male",
      "Ph.no = +977 9822334455",
      "Email = prakash.adhikari@example.com",
      "Address= Lalitpur"
    ],

    csc745: [
      "Name = Sunita Shrestha",
      "Age = 21",
      "faculty = BSW",
      "Gender = Female",
      "Ph.no = +977 9844556677",
      "Email = sunita.shrestha@example.com",
      "Address= Kirtipur"
    ],

    csc856: [
      "Name = Rajesh Bista",
      "Age = 23",
      "faculty = Bsc.Csit",
      "Gender = Male",
      "Ph.no = +977 9807766554",
      "Email = rajesh.bista@example.com",
      "Address= Thamel - Kathmandu"
    ]

  }

];


//console section starts from here
//console for teachers details

const teacherData=teacher[0];
console.log(teacher[0].listOfTeacher);
console.log("-----------------------------------------------\n");

Object.keys(teacherData).forEach((tid)=>
{
  if(tid !=="listOfTeacher")
  {
    console.log( `Teacher ID : ${tid}`);
    console.log(teacherData[tid].join("\n"));
    console.log("--------------------------------------------")
  }

});


//console logs for students
const studentData=student[0];
console.log(student[0].listOfStudent);
console.log("----------------------------------------------\n");

Object.keys(studentData).forEach((s_id)=>
{
  if(s_id !=="listOfStudent"){
    console.log(`Student ID : ${s_id}`);
    console.log(studentData[s_id].join("\n"));
    console.log("--------------------------------------------");
  }

});




  return (
    <div className="main">


      <div className="header-main">
        <header className="header">
        <h1>Welcome To Himalaya College Of Engineering :</h1>

        <div className="description-header">
        <p>This page represents a well-structured College Management System that displays detailed information about both teachers and students. It includes a categorized list of all teachers with their personal details like name, age, gender, contact, and subjects they teach. Similarly, the student section provides a list of enrolled students along with their academic details such as faculty, contact info, and address. The data is neatly organized and displayed in a readable format, making it easy to manage and review institutional records at a glance. </p>
        </div>
        </header>
      </div>

      <div className="teacherDetails"> 
      <h2>{teacher[0].listOfTeacher}</h2>

      <h3>Teacher ID : tid_002</h3>
      <ul>
        <li>{teacher[0].tid_002[0]}</li>
        <li>{teacher[0].tid_002[1]}</li>
        <li>{teacher[0].tid_002[2]}</li>
        <li>{teacher[0].tid_002[3]}</li>
        <li>{teacher[0].tid_002[4]}</li>
        <li>{teacher[0].tid_002[5]}</li>
        <li>{teacher[0].tid_002[6]}</li>
      </ul>

      <h3>Teacher ID : tid_417</h3>
      <ul>
        <li>{teacher[0].tid_417[0]}</li>
        <li>{teacher[0].tid_417[1]}</li>
        <li>{teacher[0].tid_417[2]}</li>
        <li>{teacher[0].tid_417[3]}</li>
        <li>{teacher[0].tid_417[4]}</li>
        <li>{teacher[0].tid_417[5]}</li>
        <li>{teacher[0].tid_417[6]}</li>
      </ul>

      <h3>Teacher ID : tid_782</h3>
      <ul>
        <li>{teacher[0].tid_782[0]}</li>
        <li>{teacher[0].tid_782[1]}</li>
        <li>{teacher[0].tid_782[2]}</li>
        <li>{teacher[0].tid_782[3]}</li>
        <li>{teacher[0].tid_782[4]}</li>
        <li>{teacher[0].tid_782[5]}</li>
        <li>{teacher[0].tid_782[6]}</li>
      </ul>

      <h3>Teacher ID : tid_653</h3>
      <ul>
        <li>{teacher[0].tid_653[0]}</li>
        <li>{teacher[0].tid_653[1]}</li>
        <li>{teacher[0].tid_653[2]}</li>
        <li>{teacher[0].tid_653[3]}</li>
        <li>{teacher[0].tid_653[4]}</li>
        <li>{teacher[0].tid_653[5]}</li>
        <li>{teacher[0].tid_653[6]}</li>
      </ul>

      <h3>Teacher ID : tid_909</h3>
      <ul>
        <li>{teacher[0].tid_909[0]}</li>
        <li>{teacher[0].tid_909[1]}</li>
        <li>{teacher[0].tid_909[2]}</li>
        <li>{teacher[0].tid_909[3]}</li>
        <li>{teacher[0].tid_909[4]}</li>
        <li>{teacher[0].tid_909[5]}</li>
        <li>{teacher[0].tid_909[6]}</li>
      </ul>

      <h3>Teacher ID : tid_341</h3>
      <ul>
        <li>{teacher[0].tid_341[0]}</li>
        <li>{teacher[0].tid_341[1]}</li>
        <li>{teacher[0].tid_341[2]}</li>
        <li>{teacher[0].tid_341[3]}</li>
        <li>{teacher[0].tid_341[4]}</li>
        <li>{teacher[0].tid_341[5]}</li>
        <li>{teacher[0].tid_341[6]}</li>
      </ul>

      <h3>Teacher ID : tid_587</h3>
      <ul>
        <li>{teacher[0].tid_587[0]}</li>
        <li>{teacher[0].tid_587[1]}</li>
        <li>{teacher[0].tid_587[2]}</li>
        <li>{teacher[0].tid_587[3]}</li>
        <li>{teacher[0].tid_587[4]}</li>
        <li>{teacher[0].tid_587[5]}</li>
        <li>{teacher[0].tid_587[6]}</li>
      </ul>

      <h3>Teacher ID : tid_726</h3>
      <ul>
        <li>{teacher[0].tid_726[0]}</li>
        <li>{teacher[0].tid_726[1]}</li>
        <li>{teacher[0].tid_726[2]}</li>
        <li>{teacher[0].tid_726[3]}</li>
        <li>{teacher[0].tid_726[4]}</li>
        <li>{teacher[0].tid_726[5]}</li>
        <li>{teacher[0].tid_726[6]}</li>
      </ul>

      <h3>Teacher ID : tid_392</h3>
      <ul>
        <li>{teacher[0].tid_392[0]}</li>
        <li>{teacher[0].tid_392[1]}</li>
        <li>{teacher[0].tid_392[2]}</li>
        <li>{teacher[0].tid_392[3]}</li>
        <li>{teacher[0].tid_392[4]}</li>
        <li>{teacher[0].tid_392[5]}</li>
        <li>{teacher[0].tid_392[6]}</li>
      </ul>

      <h3>Teacher ID : tid_619</h3>
      <ul>
        <li>{teacher[0].tid_619[0]}</li>
        <li>{teacher[0].tid_619[1]}</li>
        <li>{teacher[0].tid_619[2]}</li>
        <li>{teacher[0].tid_619[3]}</li>
        <li>{teacher[0].tid_619[4]}</li>
        <li>{teacher[0].tid_619[5]}</li>
        <li>{teacher[0].tid_619[6]}</li>
      </ul>
    </div>


    <div className="studentDetails">
    <h2>{student[0].listOfStudent}</h2>

    <h3>Student ID : csc022</h3>
    <ul>
      <li>{student[0].csc022[0]}</li>
      <li>{student[0].csc022[1]}</li>
      <li>{student[0].csc022[2]}</li>
      <li>{student[0].csc022[3]}</li>
      <li>{student[0].csc022[4]}</li>
      <li>{student[0].csc022[5]}</li>
      <li>{student[0].csc022[6]}</li>
    </ul>

    <h3>Student ID : csc105</h3>
    <ul>
      <li>{student[0].csc105[0]}</li>
      <li>{student[0].csc105[1]}</li>
      <li>{student[0].csc105[2]}</li>
      <li>{student[0].csc105[3]}</li>
      <li>{student[0].csc105[4]}</li>
      <li>{student[0].csc105[5]}</li>
      <li>{student[0].csc105[6]}</li>
    </ul>

    <h3>Student ID : csc209</h3>
    <ul>
      <li>{student[0].csc209[0]}</li>
      <li>{student[0].csc209[1]}</li>
      <li>{student[0].csc209[2]}</li>
      <li>{student[0].csc209[3]}</li>
      <li>{student[0].csc209[4]}</li>
      <li>{student[0].csc209[5]}</li>
      <li>{student[0].csc209[6]}</li>
    </ul>

    <h3>Student ID : csc312</h3>
    <ul>
      <li>{student[0].csc312[0]}</li>
      <li>{student[0].csc312[1]}</li>
      <li>{student[0].csc312[2]}</li>
      <li>{student[0].csc312[3]}</li>
      <li>{student[0].csc312[4]}</li>
      <li>{student[0].csc312[5]}</li>
      <li>{student[0].csc312[6]}</li>
    </ul>

    <h3>Student ID : csc417</h3>
    <ul>
      <li>{student[0].csc417[0]}</li>
      <li>{student[0].csc417[1]}</li>
      <li>{student[0].csc417[2]}</li>
      <li>{student[0].csc417[3]}</li>
      <li>{student[0].csc417[4]}</li>
      <li>{student[0].csc417[5]}</li>
      <li>{student[0].csc417[6]}</li>
    </ul>

    <h3>Student ID : csc523</h3>
    <ul>
      <li>{student[0].csc523[0]}</li>
      <li>{student[0].csc523[1]}</li>
      <li>{student[0].csc523[2]}</li>
      <li>{student[0].csc523[3]}</li>
      <li>{student[0].csc523[4]}</li>
      <li>{student[0].csc523[5]}</li>
      <li>{student[0].csc523[6]}</li>
    </ul>

    <h3>Student ID : csc634</h3>
    <ul>
      <li>{student[0].csc634[0]}</li>
      <li>{student[0].csc634[1]}</li>
      <li>{student[0].csc634[2]}</li>
      <li>{student[0].csc634[3]}</li>
      <li>{student[0].csc634[4]}</li>
      <li>{student[0].csc634[5]}</li>
      <li>{student[0].csc634[6]}</li>
    </ul>

    <h3>Student ID : csc745</h3>
    <ul>
      <li>{student[0].csc745[0]}</li>
      <li>{student[0].csc745[1]}</li>
      <li>{student[0].csc745[2]}</li>
      <li>{student[0].csc745[3]}</li>
      <li>{student[0].csc745[4]}</li>
      <li>{student[0].csc745[5]}</li>
      <li>{student[0].csc745[6]}</li>
    </ul>

    <h3>Student ID : csc856</h3>
    <ul>
      <li>{student[0].csc856[0]}</li>
      <li>{student[0].csc856[1]}</li>
      <li>{student[0].csc856[2]}</li>
      <li>{student[0].csc856[3]}</li>
      <li>{student[0].csc856[4]}</li>
      <li>{student[0].csc856[5]}</li>
      <li>{student[0].csc856[6]}</li>
    </ul>
  </div>
</div>
  )
}

export default App