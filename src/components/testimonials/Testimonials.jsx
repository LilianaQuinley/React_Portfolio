import { LocalPharmacyRounded, ModeCommentOutlined } from '@material-ui/icons'
import './testimonials.scss'

export default function Testimonials() {
  const data=[
    {
      id: 1,
      name: "Carlos Cuellar",
      title: 'Founder of QueBerraquera!',
      img: "assets/carlosj1.jpeg",
      icon: 'psychology',
      desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      id: 2,
      name: "John Quinley",
      title: 'Software Manager',
      img: "assets/johnQ.jpeg",
      icon: 'computer',
      desc:
      'Lorem ipsum dolor sit amet, doloribus est necessitatibus rerum ullam.',
      feature: 'true',
    },
    {
      id: 3,
      name: "Diana Cuellar",
      title: 'CEO of Caro Designer!',
      img: "assets/DianaC.jpg",
      icon: 'house',
      desc:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, ut fugit.',
    }
  ]

  return (
    <div className  ='testimonials' id='testimonials'>
      <h1>Testimonials</h1>

      <div className="container">
      {data.map ((d)=>(    
        <div className= {d.feature ? 'card feature' : 'card'}>
          <div className="top">
            <span class ='material-icons'>
              refresh
            </span>
            <img src={d.img} alt="" className ='user'/>
            <span class="material-icons">
            {d.icon}
            </span>
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))};
      </div>
    </div>
  )
}
