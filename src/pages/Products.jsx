import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../redux/slices/productSlice'

export default function Products() {

  const { loading, allProducts, error } = useSelector(state => state.productReducer)
  console.log(allProducts);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  return (
    <div className='m-5'>
      {
        loading ?
          <div className='text-center py-5 fw-bold'>
            Loading...
          </div>
          :
          <div className="row">
            {/* duplicate columns */}
            {
              allProducts.length > 0 ?
                allProducts.map(item => (
                  <div key={item?.id} className="col-lg-3">
                    {/* card */}
                    <Card className='my-4' style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)' }}>
                      <Card.Img style={{ height: '250px' }} variant="top" src={item?.thumbnail} />
                      <Card.Body className='text-center'>
                        <Card.Title>{item?.title}</Card.Title>
                        <Link to={`/products/:id`} className='btn btn-warning'>View More</Link>
                      </Card.Body>
                    </Card>
                  </div>
                ))
                :
                <div className='text-center py-5 fw-bold'>
                  No Product Found
                </div>
            }
          </div>
      }
    </div>
  )
}
