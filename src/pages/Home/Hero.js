import React, { useState, useEffect} from 'react'
import CommonPage from '../../component/CommonPage'

export default function Hero() {

  const [color, setColor] = useState('secondary')
   useEffect(()=>{
    // alert('Are u sure you chnage color with '+'"' + color+ '"')
    // return
   },[color])

  return (
    
    <div className='text-center'>
       <CommonPage  text = 'Hero/Home Section'/>
    <h1>My favorite Button color is {color}!</h1>
    <button
      type="button"
      onClick={() => setColor("primary")}
    >Primary</button>
    <button
      type="button"
      onClick={() => setColor("danger")}
    >Danger</button>
    <button
      type="button"
      onClick={() => setColor("info")}
    >Info</button>
    <button
      type="button"
      onClick={() => setColor("success")}
    >Success</button>
     <br/>
     <br/>
    <button className={`btn btn-${color}` }>I am a button</button>
  </div>
    
    
    
  )
}
