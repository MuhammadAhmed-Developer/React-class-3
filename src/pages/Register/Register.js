import React, { useState, useEffect } from 'react'

const initialState = {
    firstName:'',
    lastName:'',
    email:'',
    passward:'',
}

export default function Register() {

    const [state, setState] = useState(initialState)

    useEffect(()=>{
        console.log('working')
    },[state])


    
    const handleChange = e => {
        // console.log(state)
        // console.log(e.target.name)
        // console.log(e.target.value)

        // sapreading
        setState({...state, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e) => {
    e.preventDefault()
    const {firstName} = state
   if(firstName.length<3){
      alert('Enter Your name')
      return
   }

        console.log(state )
        // console.log(passward)
    }

  return (
    <div className="container py-5">
    <div className="row text-center">
        <div className="col-12 col-md-8 offset-md-2  col-lg-6 offset-lg-3">
           <div className="card border border-info  p-2 p-md-3 p-lg-3">
            <form onSubmit={handleSubmit}>
            <div className="mb-3"><h2>Register form</h2></div>
            <div className="row">
                <div className="col-12 col-md-6 mb-3">
            <input type="text" name='firstName' placeholder='Enter Your First Name' className='form-control' onChange={handleChange}/>
             </div>
            <div className="col-12 col-md-6 mb-3">
            <input type="text" name='lastName' placeholder='Enter Your Last Name' className='form-control' onChange={handleChange}/>
             </div>
             </div>
            <div className="row">
                <div className="col mb-3">
            <input type="email" name='email' placeholder='Enter Your Email' className='form-control' onChange={handleChange}/>
             </div>
        </div>
        <div className="row mb-3">
                <div className="col">
            <input type='password' name='passward' placeholder='Enter Your Pasward' className='form-control' onChange={handleChange}/>
             </div>
        </div>
        <button className='btn btn-info w-50'>Register</button>
            </form>
            
           </div>
        </div>
    </div>
   </div>


  )
}
