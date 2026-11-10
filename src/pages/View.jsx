import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function View() {
  const { id } = useParams()
  console.log(id);

  const { allproducts } = useSelector(state => state.productReducer)
  console.log(allproducts);

  return (
    <>
      <Header />
      <div className='container mt-5'>
        <div style={{ height: '100vh' }} className="row">
          <div className="col-lg-6">
            <img className='img-fluid mx-auto d-block mb-5'
              style={{ height: '550px', width: '600px', objectFit: 'contain' }}
              src="https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/2026/APRIL/13/Gvy7LE4A_fd805ce141f84359806ba9ab1cb2c54b.jpg"
              alt="perfume" />
            <div className='d-flex justify-content-evenly mx-auto' style={{ maxWidth: '600px' }}>
              <Button className='btn btn-info'>Add to wishlist</Button>
              <Button className='btn btn-success'>Add to cart</Button>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className='fw-bold'>Title : Perfume</h3>
            <h2 className='fw-bold'>Price : $ 45</h2>
            <h4 className='fw-bold'>Brand :</h4>
            <h4 className='fw-bold'>Category :</h4>
            <h4 className='fw-bold'>Discription :</h4>
            <h5 className='fw-bold'>Client Reviews :</h5>
            <div className='border rounded p-2 shadow mt-3 mb-5'>
              <p><span className='fw-bold'>Name : </span><span>Message</span></p>
              <p>Rating : 5 <FontAwesomeIcon icon={faStar} className='text-warning' /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
