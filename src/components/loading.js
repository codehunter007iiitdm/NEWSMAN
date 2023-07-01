import React from 'react'
import spinner from './spinner.gif'
const loading=()=> {
  return (
    <div className="text-center">
      <img src={spinner} alt="loading" />
    </div>
  )
}

export default loading
