import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'

export default function View() {
  return (
    <div className='container my-5'>
      <div style={{ height: '100vh' }} className="row">

        <div className="col-lg-6">
          <img className='img-fluid mx-auto d-block mb-5' style={{height:'550px',width:'600px'}} src="https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/2026/APRIL/13/Gvy7LE4A_fd805ce141f84359806ba9ab1cb2c54b.jpg" alt="no image" />
          <div className='d-flex justify-content-evenly '>
            <Button className='btn btn-info' variant="success">Add to wishlist</Button>
            <Button className='btn btn-success' variant="success">Add to cart</Button>
          </div>
        </div>

        <div className="col-lg-6">
          <h3 className='fw-bold'>Title</h3>
          <h2 className='fw-bold'>$ 45</h2>
          <h4 className='fw-bold'>Brand</h4>
          <h4 className='fw-bold'>Category</h4>
          <h4 className='fw-bold'>Discription</h4>
          <h5 className='fw-bold'>Client Reviews</h5>


          <div className='border rounded p-2 shadow my-5'>
            <p><span className='fw-bold'>Name : </span><span>Message</span></p>
            <p>Rating : 5 <FontAwesomeIcon icon={faStar} className='text-warning'/></p>

          </div>
        </div>

      </div>

    </div>
  )
}
