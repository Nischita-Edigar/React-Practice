import React from 'react'
import ComponentH from './ComponentH'

export default function ComponentG() {
    let number=10;
    let even =[2,4,6,8,10]
  return (
    <div><h2>This is ComponentG</h2>
    <ComponentH Message={'List of Even Numbers'} Number={number} Even_Numbers={even}/>
      
    </div>
  )
}
