import React from 'react' ;
import card from '../component/card.css' ;

export default function Card(props) {
  return (
    <>
    
    <div  className={props.class}>
        <img className="image" src={props.src} alt={props.title}/>
        <h1 className='heading'>{props.heading}</h1>
        <p className='content'>{props.content}</p>
        
      <button className='button'>Learn More</button>
    </div>
    </>
    
  )
}
