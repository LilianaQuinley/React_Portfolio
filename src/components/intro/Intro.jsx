import './intro.scss'
import { init } from 'ityped';  
import { useEffect, useRef } from 'react';

export default function Intro() {

  const textRef = useRef()

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true, 
      backDelay:  1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer', "Colaboration", "Teaching" ] 
    });
  },[])

  return (
    <div className ='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/lilianaJirafe.jpeg" alt="" />
        </div>

      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Liliana Quinley</h1>
          <h3>UI Designer <span ref={textRef}> React, HTML, SCSS  </span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/arrowDown.png" alt="" />
        </a>

      </div>
    </div>
  )
}
