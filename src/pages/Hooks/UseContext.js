import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CountContext } from '../../Context/CountContext'

export default function UseContext() {
 
  const {count, handleIncrement, handleDecrement, handleReset} = useContext(CountContext)

 return (
    <div className="container text-center p-5">
        <div className="row">
            <div className="col">
                <h1>Usecontext Hook</h1>
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
