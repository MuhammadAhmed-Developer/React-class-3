import { type } from '@testing-library/user-event/dist/type'
import React ,{useState, useReducer}from 'react'
import { Link } from 'react-router-dom'




const initialState = 0

const reducer = (state, action) => {
   console.log(action)
   switch(action.type){
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
    return state - 1
    case "RESET":
      return initialState
      default:
        return state
    
   }





  //  return state
}

export default function UseReducer() {

 const [state, dispatch] = useReducer(reducer, initialState)





  return (
    <div className="container text-center p-5">
        <div className="row">
            <div className="col">
                <h1>UseReducer Hook</h1>
                <button className='btn btn-danger' onClick={()=> {dispatch({type: "INCREMENT"})}}>RouterIncrement</button>
                 <h4 className='my-3'>{state}</h4>
                
                
                <button className='btn btn-success' onClick={()=> {dispatch({type: "DECREMENT"})}}>RouterDecrement</button>
                <hr />
                
                <button className='btn btn-info' onClick={() => {dispatch({type: "RESET"})}}>Router Reset</button>
                <hr />
                <Link to='/' className='btn btn-warning'>Go to Home</Link>
            </div>
        </div>
    </div>
  )
}
