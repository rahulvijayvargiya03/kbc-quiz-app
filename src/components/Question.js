import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import play from "../additionals/play.mp3"
import correct from "../additionals/correct.mp3"
import wrong from "../additionals/wrong.mp3"
export default function Question({
  data,
  setStop,
  setQuestionNumber,
  questionNumber})
   {
  const [question,setQuestion]=useState(null);
  const [selectedAnswer,setSelectedAnswer]=useState(null);
  const [className,setClassName]=useState("answer");
  const[letsPlay]=useSound(play);
  const[correctAnswer]=useSound(correct);
  const[wrongAnswer]=useSound(wrong);

  const delay =(duration,callback)=>{
    setTimeout(()=>{
      callback();
    },duration)
  }
  useEffect(()=>{
    letsPlay();
  },[letsPlay])
  useEffect(()=>{
    setQuestion(data[questionNumber-1]);
  },[data,questionNumber])
  const handleClick =(a)=>{
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(1000,()=>
    setClassName(a.correct?"answer correct":"answer wrong")
    )
    delay(3000,()=>{
    if(a.correct){
      correctAnswer();
      delay(1000,()=>{
        setQuestionNumber((prev)=>prev+1);
        setSelectedAnswer(null);

      })
    }else{
      wrongAnswer();
      delay(1000,()=>{
        setStop(true);

      })
    }
  }
    )
    // setTimeout(() => {
    //   setClassName(a.correct?"answer correct":"answer wrong");
    // }, 1000);
  }
  return (

    <div className='trivia'>
      <div className="question">{question?.question}</div>
      <div className="answers">
          {question?.answers.map(a=>(

         <div className={selectedAnswer===a?className:"answer"} onClick={()=>handleClick(a)}>{a.text}</div>
          ))}
      </div>
    </div>
  )
}
