import React from 'react'

export default function CommonPage(props) {

const {text} = props
  return (
    <div className="container py-5">
        <div className="row">
            <div className="col">
                <h1>{ text ? text : 'CommonPage'}</h1>
            </div>
        </div>
    </div>
  )
}
