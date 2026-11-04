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

          <Card >
            <Card.Img style={{height:'250px'}} variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSMBjX7sHVzDOwS9b0rgcsjOaXnRr8iwpTuZ7QvwjqPJnojB14tLxmPSB1NpQTVPPrh_pP8ZHIBzh9x_dNjHuGNdZju0UzZmriWD2mOYHVm5Y1w0-FPKVOgDrZWENHRhFpIUQd2oMUk&usqp=CAc" />
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
