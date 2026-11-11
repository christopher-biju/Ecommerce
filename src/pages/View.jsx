import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'


export default function View() {

  const dispatch = useDispatch()

  const { id } = useParams()
  const { allProducts } = useSelector(state => state.productReducer)

  const userWishlist = useSelector(state => state.wishlistReducer)

  const userCart = useSelector(state => state.cartReducer)

  const [product, setproducts] = useState({})
  useEffect(() => {
    setproducts(allProducts.find(item => item.id == id))
  }, [])
  console.log(id);
  console.log(userWishlist);

  const handleWishlist = () => {
    const existingItem = userWishlist.find(item => item?.id == product?.id)
    if (existingItem) {
      Swal.fire({
        title: "Sorry",
        text: 'Product Alredy In Your Wishlist',
        icon: "error",
        confirmButtonText: "ok"
      })
    }
    else {
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = () => {
    dispatch(addToCart(product))
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
      <div className='container mt-5'>
        <div className="row">
          <div className="col-lg-6">
            <img className='img-fluid mx-auto d-block mb-5'
              style={{ height: '550px', width: '600px', objectFit: 'contain' }}
              src={product?.thumbnail}
              alt="perfume" />
            <div className='d-flex justify-content-evenly mx-auto' style={{ maxWidth: '600px' }}>
              <Button onClick={handleWishlist} className='btn btn-info'>Add to wishlist</Button>
              <Button onClick={handleCart} className='btn btn-success'>Add to cart</Button>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className='fw-bold'>{product?.title}</h2>
            <h2 className='fw-bold my-3'>$ {product?.price}</h2>
            <h3 className='fw-bold'>Brand : <span className='fs-4'>{product?.brand}</span></h3>
            <h3 className='fw-bold my-3'>Category : <span className='fs-4'>{product?.category}</span></h3>
            <h3 className='fw-bold mb-3'>Discription : <span className='fs-5'>{product?.description}</span></h3>
            <h4 className='fw-bold '>Client Reviews :</h4>

            {
              product?.reviews?.map((item, index) => (
                <div key={index} className='border rounded p-2 shadow mt-3 mb-4'>
                  <p><span className='fw-bold'>{item?.reviewerName} : </span><span>{item?.comment}</span></p>
                  <p>Rating : {item.rating} <FontAwesomeIcon icon={faStar} className='text-warning' /></p>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </>
  )
}
