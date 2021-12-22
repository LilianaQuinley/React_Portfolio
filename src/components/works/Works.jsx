import './works.scss';
import {EmojiTransportationTwoTone} from '@material-ui/icons';
import { useState } from 'react';


export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      iconImg: 'Assets/globe.png',
      Icon2:'',
      title:'Weather App',
      desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      img:'https://image.shutterstock.com/image-vector/weather-widget-forecast-app-vector-600w-748545040.jpg'
    },
    {
      id: 2,
      iconImg: 'assets/mobile.png',
      Icon2:'',
      title:'Mobile App',
      desc:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quo autem culpa.',
      img:'https://image.shutterstock.com/image-vector/young-men-women-standing-near-600w-450838672.jpg'
    },
    {
      id: 3,
      iconImg: '',
      Icon: <EmojiTransportationTwoTone/>,
      icon2:'local_taxi',
      title:'Transportation App',
      desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img:'https://image.shutterstock.com/image-vector/online-ordering-taxi-car-rent-600w-1490646893.jpg'
    },
  ];

  const handleClick = (way)=>{
    way === 'left' 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
    : setCurrentSlide(currentSlide<data.length -1 ? currentSlide +1 : 0)
  };

  return (
    <div className ='works' id='works'>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map(d=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.iconImg} className ='iconImg' alt="" />
                <span class="material-icons">
                {d.icon2}
                </span>
                  <div className="icon">
                  {d.icon}
                  </div>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}
                </p>
                <a href="#portfolio" className='projects'>Projects</a>
              </div>

            </div>
            <div className="right">
              <img src={d.img} alt="" />

            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" className='arrow left' alt="" onClick ={()=>handleClick('left')}/>
      <img src="assets/arrow.png" className='arrow right' alt="" onClick ={()=>handleClick()} />
    </div>
  )
}
