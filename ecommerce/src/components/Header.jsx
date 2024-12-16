import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="col-lg-4 mx-auto">
    <a className="navbar-brand" href="#">Navbar</a>
    </div>
    <div className="col-lg-8">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to={"/"} aria-current="page" href="#">Home</ Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/about"} href="#">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/allproducts"} href="#">All Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/contact"} href="#">Contact</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#" to={"/action"}>Action</Link></li>
            <li><Link className="dropdown-item" href="#" to={"another"}>Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="#" to={"something"}>Something else here</Link></li>
          </ul>
        </li>
        </ul>
      <form className="d-flex">
      <button className="btn btn-outline-success m-3" >Ksh 0.00</button>
        <button className="btn btn-outline-success m-3" ><i class="fa-solid fa-cart-shopping"></i></button>
        

      </form>
    </div>
    </div>
  </div>
</nav>



    </>
  )
}

export default Header