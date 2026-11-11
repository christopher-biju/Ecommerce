import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';


export default function Whishlist() {

  const dispatch = useDispatch()

  const userWishlist = useSelector(state => state.wishlistReducer)
  console.log(userWishlist);

  const userCart = useSelector(state => state.cartReducer)

  const handleCart = (product) => {
      dispatch(addToCart(product))
      dispatch(removeFromWishlist(product.id))
      Swal.fire({
        title: "Good",
        text: 'Product Add To Your Cart',
        icon: "success",
        confirmButtonText: "ok"
      })
    }

  return (
    <>
      <Header />
      <div className='container mx-5'>
        <h2 className='fw-bold text-info pt-4'>Wishlist</h2>
        <div className="row">
          {
            userWishlist.length > 0 ?
              userWishlist.map((item) => (
                < div key={item?.id} className="col-lg-3" >
                  <Card Card className='mt-3 mb-5' style={{ height: '380px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)' }}>
                    <Card.Img style={{ height: '250px' }} variant="top" src={item.thumbnail} />
                    <Card.Body className='text-center'>
                      <Card.Title className='mb-3 text-center'>{item.title}</Card.Title>
                      <div className="d-flex justify-content-evenly">
                        <button onClick={() => dispatch(removeFromWishlist(item.id))} className='btn btn-danger me-1'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                        <button onClick={()=>handleCart(item)} className='btn btn-success me-1'><FontAwesomeIcon icon={faCartPlus} /></button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))
              :
              <div className='d-flex justify-content-center align-items-center flex-column'>
                <img src="" alt="no image" />
                <h2>Your Wishlist Is Empty</h2>
                <Link to={'/'} className='btn btn-primary'>Add More</Link>
              </div>
          }
        </div >
      </div >
    </>
  )
}