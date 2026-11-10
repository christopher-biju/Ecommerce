import React from 'react'
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { faCartPlus, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';

export default function Header({ insideproduct }) {
  const dispatch = useDispatch()
  return (
    <div>
      <Navbar expand="lg" className="bg-secondary fixed-tpo">
        <Container>
          <Navbar.Brand><Link className='text-body text-decoration-none fs-3 fw-bold' to={'/'}><FontAwesomeIcon className='me-1' icon={faTruckFast} />Ecart</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                insideproduct &&
                <Nav.Item>
                  <input onChange={e => dispatch(searchProduct(e.target.value))} type="text" className='form-control' placeholder='Search Your Product' />
                </Nav.Item>
              }
              <Link to={"/wishlist"} className='text-body text-decoration-none d-inline-flex align-items-center ms-5'><FontAwesomeIcon className='btn btn-danger me-1' icon={faHeart} /> <span className='fs-5 me-1'>Wishlist</span> <Badge bg="dark" >10</Badge></Link>
              <Link to={"/cart"} className='text-body text-decoration-none d-inline-flex align-items-center ms-5'><FontAwesomeIcon className='btn btn-success me-1' icon={faCartPlus} /> <span className='fs-5 me-1'>Cart</span> <Badge bg="dark" >10</Badge></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
