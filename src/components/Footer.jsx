import React from 'react'


export default function Footer() {
  return (
    <div className='text-body bg-secondary container-fluid text-light'>
      <div className='row p-4'>

        {/* 1 */}
        <div className="col-lg-3">
          <h2>DailyCart</h2>
          <p className='textAlign:"justify-content"'>
            Designed and built with all the love in the world by the Luminar team with the help of our contributors.
          </p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>

        <div className="col-lg-1"></div>

        {/* 2 */}
        <div className="col-lg-2">
          <h2>Links</h2>
          <ul className='list-unstyled'>
            <li>Home</li>
            <li>Wishlist</li>
            <li>Cart</li>
          </ul>
        </div>

        <div className="col-lg-1"></div>

        {/* 3 */}
        <div className="col-lg-2">
          <h2>Guides</h2>
          <ul className='list-unstyled'>
            <li>React</li>
            <li>React Bootstrap</li>
            <li>React Router</li>
          </ul>
        </div>

        {/* 4 */}
        <div className="col-lg-3 text-end">
          <h2 className='me-4'>Contact Us</h2>
          <input className='' type="email" />
        </div>
        <h6 className='text-center pt-2 ps-5'>Copyright © August 2025 Batch, Daily Cart. Built with React Redux.</h6>

      </div>
    </div>
  )
}
