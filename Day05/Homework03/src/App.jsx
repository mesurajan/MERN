import React from 'react'
import './App.css'
import bank from './assets/images/bank.png'



function App() {

  //Banking management System

  const bankDetails=[

    {
      bankName:"Welcome to Kamana sewa Bikash Bank pvt.ltd .",
      details:"Staff Details :",
      
      staff:[
         {
        title: "Managing Director (MD)",
        info: [
          "Name: MR. Surajan Shrestha",
          "Bank: Kamana Sewa Bikas Bank Ltd.",
          "Qualification: MBA in Banking & Finance",
          "Experience: Over 15 years in Nepal's banking and financial sector",
          "Vision: Driving digital transformation and inclusive banking in Nepal",
          "Contact Email: md@ksbbank.com.np",
          "Location: Head Office, Gyaneshwor, Kathmandu, Nepal",
          "Leadership Style: Strategic, Inclusive & Technology-driven"
        ]
      },
      {
        title: "Deputy Chief Executive Officer (DCEO)",
        info: [
          "Name: Ms. Anju Koirala",
          "Qualification: MBS in Finance",
          "Experience: 12+ years in corporate banking and operations",
          "Focus Area: Risk management and compliance"
        ]
      },
      {
        title: "Chief Finance Officer (CFO)",
        info: [
          "Name: Mr. Rajan Bhattarai",
          "Qualification: Chartered Accountant (CA)",
          "Experience: 10+ years in financial planning and auditing",
          "Focus Area: Financial strategy and investment analysis"
        ]
      },
      {
        title: "Chief Information Officer (CIO)",
        info: [
          "Name: Mr. Suman Adhikari",
          "Qualification: MSc. in Information Systems",
          "Experience: 15+ years in IT and digital banking",
          "Focus Area: Digital transformation and cybersecurity"
        ]
      },
      {
        title: "Head of Human Resource Department",
        info: [
          "Name: Mrs. Rekha Shrestha",
          "Qualification: MBA in Human Resource Management",
          "Experience: 9+ years in HR policy, talent development",
          "Focus Area: Employee engagement and organizational culture"
        ]
      },
      {
        title: "Head of Operations",
        info: [
          "Name: Mr. Prabin Lama",
          "Qualification: BBA in Banking and Insurance",
          "Experience: 11+ years in banking operations and customer service",
          "Focus Area: Operational excellence and service delivery"
        ]
      }
    ],  
 
    //users starts from here
    users:[
      {
      title:"premium User ",
      info:[
        "name: Aarav Sharma",
        "address: Lalitpur, Nepal",
        "phone: 9801234567",
        "accNo: KSBB-PRE-001",
        "email: aarav.premium@ksbbank.com",
        ],
      features: [
      "Access to all banking features",
      "Priority customer support",
      "Higher transaction limits",
      "Personal financial advisor",
      "Exclusive loan offers"],
      },

     {
        title: "Standard User",
        info: [
          "name: Nisha Kharel",
          "address: Pokhara, Kaski",
          "phone: 9811122233",
          "accNo: KSBB-STD-045",
          "email: nisha.standard@ksbbank.com"
        ],
        features: [
          "Basic banking features",
          "Standard customer support",
          "Daily transaction limit: NPR 50,000",
          "Eligible for savings & fixed deposit",
          "Mobile banking enabled"
        ],
      },
      {
        title: "Business User",
        info: [
          "name: Binod Maharjan",
          "address: New Road, Kathmandu",
          "phone: 9843344556",
          "accNo: KSBB-BIZ-102",
          "email: binod.business@ksbbank.com"
        ],
        features: [
          "Multi-account management",
          "Corporate loan access",
          "Business analytics dashboard",
          "Bulk payment options",
          "Dedicated relationship manager"
        ],
      },
      {
        title: "Student User",
        info: [
          "name: Saraswati Rai",
          "address: Dharan, Sunsari",
          "phone: 9867788990",
          "accNo: KSBB-STU-078",
          "email: saraswati.student@ksbbank.com"
        ],
        features: [
          "Zero balance savings account",
          "Special educational loan schemes",
          "Scholarship integration support",
          "Mobile banking with spending alerts",
          "ATM/debit card with daily limit"
        ],
      },
      {
        title: "Senior Citizen User",
        info: [
          "name: Hari Bahadur Thapa",
          "address: Butwal, Rupandehi",
          "phone: 9855012345",
          "accNo: KSBB-SNR-090",
          "email: hari.senior@ksbbank.com"
        ],
        features: [
          "Higher interest on savings",
          "Free health insurance coverage",
          "Assisted banking support",
          "Dedicated counters at branches",
          "Pension deposit & management"
        ],
      },
      {
        title: "Gold User",
        info: [
          "name: Ramesh Adhikari",
          "address: Bhaktapur",
          "phone: 9809876543",
          "accNo: KSBB-GLD-011",
          "email: ramesh.gold@ksbbank.com"
        ],
        features: [
          "Gold credit card benefits",
          "Higher cashback offers",
          "Premium lounge access",
          "Concierge services",
          "Investment advisory"
        ],
      },
      {
        title: "Silver User",
        info: [
          "name: Sita Gurung",
          "address: Lalitpur",
          "phone: 9812233445",
          "accNo: KSBB-SLV-019",
          "email: sita.silver@ksbbank.com"
        ],
        features: [
          "Standard credit card benefits",
          "Cashback on groceries",
          "Discounts on partner merchants",
          "Online shopping offers",
          "Mobile banking services"
        ],
      },
      {
        title: "Basic User",
        info: [
          "name: Prakash Shrestha",
          "address: Kathmandu",
          "phone: 9803344556",
          "accNo: KSBB-BSC-003",
          "email: prakash.basic@ksbbank.com"
        ],
        features: [
          "Basic savings account",
          "ATM card issuance",
          "Mobile banking",
          "Online statement access",
          "Customer support"
        ],
      },
      {
        title: "Corporate User",
        info: [
          "name: Sunil Koirala",
          "address: New Baneshwor, Kathmandu",
          "phone: 9844556677",
          "accNo: KSBB-COR-201",
          "email: sunil.corp@ksbbank.com"
        ],
        features: [
          "Corporate banking facilities",
          "Bulk transaction handling",
          "Dedicated account manager",
          "Payroll services",
          "Trade finance options"
        ],
      },
      {
        title: "VIP User",
        info: [
          "name: Anita Thapa",
          "address: Jawalakhel, Lalitpur",
          "phone: 9807766554",
          "accNo: KSBB-VIP-900",
          "email: anita.vip@ksbbank.com"
        ],
        features: [
          "Exclusive VIP banking services",
          "Personal wealth management",
          "Private banking lounge",
          "Priority loan processing",
          "Customized financial products"
        ],
      }
    ],
    },
  ];


  const bankData=bankDetails[0];
  console.log(bankDetails);
  console.log(bankData.bankName);
  console.log("---------------------------------------------");
  console.log(bankData.details);
  console.log("---------------------------------------------");
 
 
 bankData.staff.forEach((member) => {
  console.log(member.title);
  console.log(member.info.join("\n"));
  console.log("------------------------------------------------");
  });

// Loop through users array
  console.log("Users Details:");
  console.log("------------------------------------------------");
  bankData.users.forEach((user) => {
  console.log(user.title);
  console.log(user.info.join("\n"));
  console.log("Features:");
  console.log(user.features.join("\n"));
  console.log("------------------------------------------------");
});


  return (
    <div className='main-body'>
      <div >
        <header><h1>{bankData.bankName}</h1></header>

        <div className='description-content'>
          <div className='bank-logo'>
          <img src={bank} alt="Kamana Sewa Bank" className="bank-logo" />

         </div>
         
          <div className='description'>
          <p>Kamana Sewa Bikash Bank Pvt. Ltd. is a leading financial institution committed to empowering communities across Nepal. With over 15 years of experience, the bank offers comprehensive banking services including savings, loans, digital banking, and investment solutions tailored to meet the diverse needs of individuals and businesses. Driven by a vision of financial inclusion and technological innovation, Kamana Sewa Bikash Bank ensures convenient access to banking through its extensive branch network and advanced digital platforms. The bank prioritizes customer-centric services, focusing on trust, transparency, and sustainable growth. It actively supports economic development by promoting entrepreneurship and providing financial literacy programs. With a team of dedicated professionals, Kamana Sewa Bikash Bank remains at the forefront of Nepal’s banking sector, fostering lasting relationships and contributing to national progress. Whether for personal finance or corporate solutions, the bank strives to deliver excellence with integrity, innovation, and social responsibility.</p>
          </div>

         
        

        </div>
        
      </div>

      <div className='staffDetails'>
        <h1>{bankData.details}</h1>
        <h3>{bankData.staff[0].title}</h3>
        <ul>
          <li>{bankData.staff[0].info[0]}</li>
          <li>{bankData.staff[0].info[1]}</li>
          <li>{bankData.staff[0].info[2]}</li>
          <li>{bankData.staff[0].info[3]}</li>
          <li>{bankData.staff[0].info[4]}</li>
          <li>{bankData.staff[0].info[5]}</li>
          <li>{bankData.staff[0].info[6]}</li>
          <li>{bankData.staff[0].info[7]}</li>
        </ul>

        <h3>{bankData.staff[1].title}</h3>
        <ul>
          <li>{bankData.staff[1].info[0]}</li>
          <li>{bankData.staff[1].info[1]}</li>
          <li>{bankData.staff[1].info[2]}</li>
          <li>{bankData.staff[1].info[3]}</li>       
        </ul>

         <h3>{bankData.staff[2].title}</h3>
        <ul>
          <li>{bankData.staff[2].info[0]}</li>
          <li>{bankData.staff[2].info[1]}</li>
          <li>{bankData.staff[2].info[2]}</li>
          <li>{bankData.staff[2].info[3]}</li>       
        </ul>

         <h3>{bankData.staff[3].title}</h3>
        <ul>
          <li>{bankData.staff[3].info[0]}</li>
          <li>{bankData.staff[3].info[1]}</li>
          <li>{bankData.staff[3].info[2]}</li>
          <li>{bankData.staff[3].info[3]}</li>       
        </ul>


         <h3>{bankData.staff[4].title}</h3>
        <ul>
          <li>{bankData.staff[4].info[0]}</li>
          <li>{bankData.staff[4].info[1]}</li>
          <li>{bankData.staff[4].info[2]}</li>
          <li>{bankData.staff[4].info[3]}</li>       
        </ul>

         <h3>{bankData.staff[5].title}</h3>
        <ul>
          <li>{bankData.staff[5].info[0]}</li>
          <li>{bankData.staff[5].info[1]}</li>
          <li>{bankData.staff[5].info[2]}</li>
          <li>{bankData.staff[5].info[3]}</li>       
        </ul>
      </div>

      <div className='userDetails'>
        <div>
          <h1>User and There Types :</h1>
        <h3>{bankData.users[0].title}</h3>
        <h3>Info :</h3>
        <ul>
          <li>{bankData.users[0].info[0]}</li>
          <li>{bankData.users[0].info[1]}</li>
          <li>{bankData.users[0].info[2]}</li>
          <li>{bankData.users[0].info[3]}</li>
          <li>{bankData.users[0].info[4]}</li> 
        </ul>
        <h3>Features :</h3>
        <ul>
          <li>{bankData.users[0].features[0]}</li>
          <li>{bankData.users[0].features[1]}</li>
          <li>{bankData.users[0].features[2]}</li>
          <li>{bankData.users[0].features[3]}</li>
          <li>{bankData.users[0].features[4]}</li> 
        </ul>
        </div>


        <div><br></br>
        <h3>{bankData.users[1].title}</h3>
        <h3>Info :</h3>
        <ul>
          <li>{bankData.users[1].info[0]}</li>
          <li>{bankData.users[1].info[1]}</li>
          <li>{bankData.users[1].info[2]}</li>
          <li>{bankData.users[1].info[3]}</li>
          <li>{bankData.users[1].info[4]}</li> 
        </ul>
        <h3>Features :</h3>
        <ul>
          <li>{bankData.users[1].features[0]}</li>
          <li>{bankData.users[1].features[1]}</li>
          <li>{bankData.users[1].features[2]}</li>
          <li>{bankData.users[1].features[3]}</li>
          <li>{bankData.users[1].features[4]}</li> 
        </ul>
        </div>
        
        <div><br></br>
        <h3>{bankData.users[2].title}</h3>
        <h3>Info :</h3>
        <ul>
          <li>{bankData.users[2].info[0]}</li>
          <li>{bankData.users[2].info[1]}</li>
          <li>{bankData.users[2].info[2]}</li>
          <li>{bankData.users[2].info[3]}</li>
          <li>{bankData.users[2].info[4]}</li> 
        </ul>
        <h3>Features :</h3>
        <ul>
          <li>{bankData.users[2].features[0]}</li>
          <li>{bankData.users[2].features[1]}</li>
          <li>{bankData.users[2].features[2]}</li>
          <li>{bankData.users[2].features[3]}</li>
          <li>{bankData.users[2].features[4]}</li> 
        </ul>
        </div>
        
          <div><br></br>
        <h3>{bankData.users[3].title}</h3>
        <h3>Info :</h3>
        <ul>
          <li>{bankData.users[3].info[0]}</li>
          <li>{bankData.users[3].info[1]}</li>
          <li>{bankData.users[3].info[2]}</li>
          <li>{bankData.users[3].info[3]}</li>
          <li>{bankData.users[3].info[4]}</li> 
        </ul>
        <h3>Features :</h3>
        <ul>
          <li>{bankData.users[3].features[0]}</li>
          <li>{bankData.users[3].features[1]}</li>
          <li>{bankData.users[3].features[2]}</li>
          <li>{bankData.users[3].features[3]}</li>
          <li>{bankData.users[3].features[4]}</li> 
        </ul>
        </div>
        
        

      </div>
      
    </div>
  )
}

export default App