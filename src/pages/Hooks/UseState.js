import React ,{useState}from 'react'
import { Link } from 'react-router-dom'




const initialState = 0

export default function UseState() {
 const [count, setCount ]= useState(initialState)

 const handleIncrement = () => {
    setCount(c => c + 1)
 }
 const handleDecrement = () => {
   count > 0 && setCount(c => c - 1)

//    if(count>0){
//     setCount(c => c - 1)
//    }
 }
 const handleReset = () => {
    setCount(initialState)
 }




  return (
    <div className="container text-center p-5">
        <div className="row">
            <div className="col">
                <h1>UseState Hook</h1>
                <button className='btn btn-danger' onClick={handleIncrement}>Increment</button>
                 <h4 className='my-3'>{count}</h4>
                <button className='btn btn-success' onClick={handleDecrement}>Decrement</button>
                <hr />
                <button className='btn btn-info' onClick={handleReset}>Reset</button>
                <hr />
                <Link to='/' className='btn btn-warning'>Go to Home</Link>
            </div>
        </div>
    </div>
  )
}
