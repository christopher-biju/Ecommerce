import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function Products() {
  return (
    <div className='m-5' style={{ height: '100vh' }}>
      <div className="row">
        {/* duplicate columns */}
        <div className="col-lg-3">
          {/* card */}
          <Card className='my-4' style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)' }}>
            <Card.Img style={{ height: '250px' }} variant="top" src="https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/2026/APRIL/13/Gvy7LE4A_fd805ce141f84359806ba9ab1cb2c54b.jpg" />
            <Card.Body className='text-center'>
              <Card.Title>Card Title</Card.Title>
              <Link to={`/products/:id`} className='btn btn-warning'>View More</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
