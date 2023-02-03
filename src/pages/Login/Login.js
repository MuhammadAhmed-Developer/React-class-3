import React, {useContext, useState} from 'react';
import { AuthContext } from '../../Context/AuthContext';

export default function Login() {

    const {myName, setmyName} = useContext(AuthContext)
    const [userName, setUserName] = useState('')
    const [passward, setPassward] = useState('')

 const handleSubmit = (e) => {
  e.preventDefault()

  console.log(userName)
  console.log(passward)
 }


  return (
   <div className="container py-5">
    <div className="row">
                <div className="col mb-3">
            <input type="text"  placeholder='Enter Your Name' className='form-control' value={myName} onChange={(e)=>{setmyName(e.target.value)}}/>
             </div>
        </div>
    <div className="row text-center">
        <div className="col-12 col-md-8 offset-md-2  col-lg-6 offset-lg-3">
           <div className="card p-2 p-md-3 p-lg-3">
            <form onSubmit={handleSubmit}>
            <div className="mb-3"><h2>Login form</h2></div>
            <div className="row">
                <div className="col mb-3">
            <input type="text"  placeholder='Enter Your UserName' className='form-control' onChange={(e)=>{setUserName(e.target.value)}}/>
             </div>
        </div>
        <div className="row mb-3">
                <div className="col">
            <input type='password'  placeholder='Enter Your Pasward' className='form-control' onChange={(e)=>{setPassward(e.target.value)}}/>
             </div>
        </div>
        <button className='btn btn-success w-50'>Login</button>
            </form>
            
           </div>
        </div>
    </div>
   </div>


  )
}
