import React, {useState, useEffect} from 'react'
import {users} from '../../data/Users'


const statuses = ["all", "active", "inactive", "pending"]


export default function Users() {
 
const [documents, setDocuments] = useState([])
const [status, setStatus] = useState('all')
const [limit, setLimit] = useState('1')

useEffect(()=>{

  if(status !== 'all'){
    
    let filterDosc = users.filter((user)=>{
      return user.status === status
    })
    setDocuments(filterDosc)
  }else{
    setDocuments(users.slice(0, limit))
  }
// dependency 1 dafa lazmi execute ho ga 
},[status, limit])




  return (
    <div className='py-5 mt-5 bg-info'>
     <div className="container text-center ">
        <div className="row">
            <div className="col">
          <h1>User with status {status}</h1>

           <select className='form-control w-25 mx-auto mb-3'  onChange={e =>{setStatus(e.target.value)}}>
           
            {/* <option value="all">all</option>
            <option value="active">active</option>
            <option value="inactive">inactive</option>
            <option value="pending">pending</option> */}
            
            
            {statuses.map((status =>{
                return <option  key = {status} value={status}>{status}</option>
            }))}
           </select>
           <input type="number" max='10' min='0' placeholder='Enter limit (Maximum 10)' className='mb-2 form-control w-25 mx-auto' onChange={e => {setLimit(e.target.value)}} />
          <ol> 
         {documents.map((user, i)=>{
              return <li key={i}>Name: <b>{user.name}</b> and status is <b> {user.status}</b></li>
            })}
            </ol>
            </div>
        </div>
     </div>
    </div>
  )
}
