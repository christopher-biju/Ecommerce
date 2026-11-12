import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteItem, emptyCart, removeFromCart } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'

export default function Cart() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userCart = useSelector(state => state.cartReducer)
  console.log(userCart);
  const handleCheckout = () => {
    dispatch(emptyCart())
    Swal.fire({
      title: "Order placed successfully",
      text: "Thank you for purchasing with us",
      icon: 'success',
      confirmButtonText: 'OK'
    })
    navigate('/')
  }
  const [totalPrc, setTotalPrc] = useState(0)
  useEffect(() => {
    setTotalPrc(userCart.reduce((acc, current) => acc + current.totalPrice, 0))
  }, [userCart])
  return (
    <>
      <Header />
      <div style={{ height: 'auto' }} className='container mt-4'>
        {
          userCart.length > 0 ?
            <div className="row mb-5">
              <h2 className='fw-bold text-info mb-4'>User's Cart</h2>
              <div className="col-lg-8 border shadow">
                <table className="table m-2 ">
                  <thead className='align-middle'>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Image</th>
                      <th className='ps-5'> Quantity</th>
                      <th>Price</th>
                      <th>..</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {
                      userCart.map((item, index) => (
                        <tr key={item?.id}>
                          <td>{index + 1}</td>
                          <td>{item?.title}</td>
                          <td>
                            <img width={'50px'} height={'50px'} src={item?.thumbnail} alt="perfume" />
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <button onClick={() => dispatch(removeFromCart(item))} style={{ height: '40px' }} className='btn fs-1 d-inline-flex align-items-center justify-content-center'>-</button>
                              <input style={{ width: '50px', height: '40px' }} type="text" value={item?.quantity} className='form-control text-center' readOnly />
                              <button onClick={() => dispatch(addToCart(item))} style={{ height: '40px' }} className='btn fs-1 d-inline-flex align-items-center justify-content-center'>+</button>
                            </div>
                          </td>
                          <td>$ {item?.totalPrice}</td>
                          <td>
                            <button onClick={() => dispatch(deleteItem(item?.id))} className='btn btn-link p-0 border-0'>
                              <FontAwesomeIcon className='text-danger fs-5' icon={faTrashCan} />
                            </button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                <div className='float-end p3 my-2'>
                  <Button onClick={() => dispatch(emptyCart())} className='btn mx-2'>Empty Cart</Button>
                  <Link to={`/`} className='btn btn-warning'>Shop More</Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className='border shadow rounded p-5 text-center'>
                  <h3>Total Amount : <span className='text-danger'>$ {totalPrc}</span></h3>
                  <hr />
                  <button onClick={handleCheckout} className='btn btn-success w-75 '>CHECKOUT</button>
                </div>
              </div>
            </div>

            :

            <div className='d-flex justify-content-center align-items-center flex-column'>
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" alt="no image" />
              <h2>Your Cart Is Empty</h2>
              <Link to={'/'} className='btn btn-primary mb-5 mt-2'>Add More</Link>
            </div>
        }
      </div>
    </>
  )
}