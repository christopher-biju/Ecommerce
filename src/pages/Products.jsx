import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../redux/slices/productSlice'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';


export default function Products() {

  const { loading, allProducts, error } = useSelector(state => state.productReducer)
  console.log(allProducts);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  const [currentPage, setcurrentPage] = useState(1)
  const totalproductPerPage = 8
  const totalPages = Math.ceil(allProducts?.length / totalproductPerPage)
  const currentPageLastIndex = currentPage * totalproductPerPage
  const currentPageStartIndex = currentPageLastIndex - totalproductPerPage
  const visibleProducts = allProducts.slice(currentPageStartIndex, currentPageLastIndex)

  const nextPage = () => {
    currentPage != totalPages && setcurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    currentPage != 1 && setcurrentPage(currentPage - 1)
  }


  return (
    <>
      <Header insideproduct />
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
                visibleProducts.length > 0 ?
                  visibleProducts.map(item => (
                    <div key={item?.id} className="col-lg-3">
                      {/* card */}
                      <Card className='my-4' style={{ height: '390px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)' }}>
                        <Card.Img style={{ height: '250px' }} variant="top" src={item?.thumbnail} />
                        <Card.Body className='text-center'>
                          <Card.Title>{item?.title}</Card.Title>
                          <Link to={`/products/${item.id}`} className='btn btn-warning mt-3'>View More</Link>
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
        <div className='text-center my-5 fs-5 fw-bold'>
          <button className='me-2' onClick={prevPage} style={{background: 'none',border: 'none'}}><FontAwesomeIcon icon={faBackward} /></button>
          {currentPage} of {totalPages}
          <button className='ms-2' onClick={nextPage} style={{background: 'none',border: 'none'}}><FontAwesomeIcon icon={faForward} /></button>
        </div>
      </div>
    </>
  )
}
