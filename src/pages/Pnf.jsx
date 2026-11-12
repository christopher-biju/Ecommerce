import React from 'react'
import { Link } from 'react-router-dom'

export default function Pnf() {
  return (
    <div>
      <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center flex-column'>
        <img className='w-25' src="https://www.innonet.nl/wp-content/uploads/2017/11/Page-not-found.png" alt="page not found" />
        <h2 className='my-5'>WE ARE SORRY, LOOK LIKE YOUR LOST</h2>
        <Link to={'/'} className='btn btn-dark'>BACK TO HOME</Link>
      </div>
    </div>
  )
}