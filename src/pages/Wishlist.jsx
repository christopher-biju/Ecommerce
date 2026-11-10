import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from '../components/Header'


export default function Whishlist() {
  return (
   <>
      <Header/>
      <div className='container mx-5'>
        <h2 className='fw-bold text-info pt-4'>Wishlist</h2>
         <div className="row">
          {/* duplicate columns */}
          <div className="col-lg-3">
            {/* card */}
            <Card className='mt-3 mb-5' style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)' }}>
              <Card.Img style={{ height: '250px' }} variant="top" src="https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/2026/APRIL/13/Gvy7LE4A_fd805ce141f84359806ba9ab1cb2c54b.jpg" />
              <Card.Body className='text-center'>
                <Card.Title className='mb-3 text-center'>Card Title</Card.Title>
                <div className="d-flex justify-content-evenly">
                  <FontAwesomeIcon className='btn btn-danger me-1' icon={faHeartCircleXmark}/>
                  <FontAwesomeIcon className='btn btn-success me-1' icon={faCartPlus}/>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
   </>
  )
}
