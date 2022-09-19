
import React from 'react'

export default function ComponentF(props) {
  return (
    <div>
        <h2>This is ComponentF</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h4>{props.Message}</h4>
        <h4>Product Brand : {props.Brand}</h4>
        <h4>Required size : {props.Size[1]}</h4>
      
    </div>
  )
}

