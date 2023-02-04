import { useEffect, useState } from "react";
import Question from "./components/Question.js";
import Timer from "./components/Timer.js";

function App() {
  const[questionNumber,setQuestionNumber]=useState(1);
  const[stop,setStop]=useState(false);
  const[earned,setEarned]=useState("0");
  const data=[
    {
      id:1,
      question:"Ghototkach in Mahabharat was the son of?",
      answers :[
        {
          text:"Duryodhana",
          correct:false,
        },
        {
          text:"Bhima",
          correct:true,
        },
        {
          text:"Duryodhana",
          correct:false,
        },
        {
          text:"Yudhishthir",
          correct:"false",
        },
      ]
    },
    {
      id:2,
      question:"The first month of the Indian national calendar is?",
      answers :[
        {
          text:"Magha",
          correct:false,
        },
        {
          text:"Chaitra",
          correct:true,
        },
        {
          text:"Ashadha",
          correct:false,
        },
        {
          text:"Vaishakha",
          correct:false,
        },
      ]
    },
    {
      id:3,
      question:"Rath Yatra is famous festival at?",
      answers :[
        {
          text:"Ayodhya",
          correct:false,
        },
        {
          text:"Mathura",
          correct:false,
        },
        {
          text:"Dwaraka",
          correct:false,
        },
        {
          text:"Puri",
          correct:true,
        },
      ]
    },
    {
      id:4,
      question:"Ghototkach in Mahabharat was the son of?",
      answers :[
        {
          text:"Duryodhana",
          correct:false,
        },
        {
          text:"Bhima",
          correct:true,
        },
        {
          text:"Dronacharya",
          correct:false,
        },
        {
          text:"Yudhishthir",
          correct:"false",
        },
      ]
    },
    {
      id:5,
      question:"The first month of the Indian national calendar is?",
      answers :[
        {
          text:"Magha",
          correct:false,
        },
        {
          text:"Chaitra",
          correct:true,
        },
        {
          text:"Ashadha",
          correct:false,
        },
        {
          text:"Vaishakha",
          correct:false,
        },
      ]
    },
    {
      id:6,
      question:"Rath Yatra is famous festival at?",
      answers :[
        {
          text:"Ayodhya",
          correct:false,
        },
        {
          text:"Mathura",
          correct:false,
        },
        {
          text:"Dwaraka",
          correct:false,
        },
        {
          text:"Puri",
          correct:true,
        },
      ]
    },
  ];
  const moneyPyramid =[
    {id:1,amount: "1,000"},
    {id:2,amount: "2,000"},
    {id:3,amount: "3,000"},
    {id:4,amount: "5,000"},
    {id:5,amount: "10,000"},
    {id:6,amount: "20,000"},
    {id:7,amount: "40,000"},
    {id:8,amount: "80,000"},
    {id:9,amount: "1,60,000"},
    {id:10,amount: "3,20,000"},
    {id:11,amount: "6,40,000"},
    {id:12,amount: "12,50,0000"},
    {id:13,amount: "25,00,000"},
    {id:14,amount: "50,00,000"},
    {id:15,amount: "Ek Crore"},

  ].reverse();
  useEffect(()=>{
    questionNumber>1 &&
    setEarned(moneyPyramid.find((m)=>m.id===questionNumber-1).amount);
  },[moneyPyramid,questionNumber])
  return (
    <div className="app">
      <div className="main">
      {stop? <h1 className="endText">You earned <b>₹</b> {earned}</h1>:
      <>
        <div className="top">
          <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}></Timer></div>
        </div>
        <div className="bottom">
          <Question data={data} setStop={setStop} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber}></Question>
        </div>
        </>
        }
      </div>
      <div className="pyramid">
        <ul className="moneyList">
        {moneyPyramid.map((m)=>(
          <li className={m.id===questionNumber?"moneyListItem active":"moneyListItem "}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
          </li>
        ))}
         
          
        </ul>
      </div>
    </div>
  );
}

export default App;
