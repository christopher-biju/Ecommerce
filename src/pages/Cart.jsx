import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <div className='container m-5 '>
      <h2 className='fw-bold text-info mt-2'>User's Cart</h2>
      <div className="row">

        <div className="col-lg-8 border shadow">
          <table className="table m-2">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th> Quantity</th>
                <th>Price</th>
                <th>..</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td className='my-auto'>perfume</td>
                <td><img width={'50px'} height={'50px'} src="https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/2026/APRIL/13/Gvy7LE4A_fd805ce141f84359806ba9ab1cb2c54b.jpg" alt="" /></td>

                <td>
                  <div className="d-flex">
                    <button style={{ height: '40px' }} className='btn fs-1 d-inline-flex align-items-center justify-content-center'>-</button>
                    <input style={{ width: '50px', height: '40px' }} type="text" value={10} className='form-control' readOnly />
                    <button style={{ height: '40px' }} className='btn fs-1 d-inline-flex align-items-center justify-content-center'>+</button>
                  </div>
                </td>

                <td>$ 450</td>

                <td><FontAwesomeIcon className='text-danger fs-5' icon={faTrashCan} /></td>
              </tr>
            </tbody>

          </table>
          <div className='float-end p3 my-2'>
            <Button className='btn mx-2'>Empty Cart</Button>
            <Link to={`/`} className='btn btn-warning'>Shop More</Link>
          </div>

        </div>

        <div className="col-lg-4">
          <div className='border shadow rounded p-5 text-center'>
            <h3>Total Amount : <span className='text-danger'>$ 300</span></h3>
            <hr />
            <button className='btn btn-success w-75 '>CHECKOUT</button>

          </div>

        </div>



      </div>

    </div>
  )
}
