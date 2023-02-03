import React, {useContext} from 'react'
import CommonPage from '../../component/CommonPage'
import { CountContext } from '../../Context/CountContext'


export default function About() {
  
 const {myName, count} = useContext(CountContext)
  
  return (
    <>
    <CommonPage text = 'About page'/>
    {myName},
    { count}
    
    </>
    
    
  )
}
