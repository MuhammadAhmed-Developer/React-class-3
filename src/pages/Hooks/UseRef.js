import React, {useEffect, useRef} from 'react'
import notification from '../../accests/audios/ding-59124.mp3'

export default function UseRef() {

    const notificationPlayer = useRef(null) 

 useEffect(()=>{
     console.log( notificationPlayer.current.play())
     // console.log('working')
 }, [])

  return (
    <div  className='container p-5 my-5 bg-danger'>
        <div className="row"> 
            <div className="col"> 
                <audio ref={notificationPlayer} src={notification}></audio>
            </div>
        </div>
    </div>
  )
}
