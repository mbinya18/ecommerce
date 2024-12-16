import React from 'react'
import "./allproduct.css"
import mugred from "../assets/mug-red.jpg"

const Allproducts = () => {
  return (
<>
<div className="container">
  <div className="row">
    <div className="col-lg-4 filters-col"> 
      <p className='fs-3 fw-bold'>Filter By Price</p>
    <hr className='orange hr-filter background-orange'/>
    <div className="row pb-3">
    <div className="col">Ksh 100</div>
    <div className="col">Ksh 400</div>
    </div>    
    <button className='apply-btn px-3'>APPLY</button>
    <p className='fs-3 fw-bold py-3'>Categories</p>
    <div className="row">
      <div className="col-lg">Mugs 
      </div>
      <div className="col-lg">(5)</div>
    </div><br/>
    <div className="row">
      <div className="col-lg">Mugs 
      </div>
      <div className="col-lg">(5)</div>
    </div>

    <p className='py-4 fw-bold fs-3'>Hottest Deals</p>
    <div className="row">
    <div className="col-lg-6 "> <img src={mugred} alt=""  className='img-fluid'/> <p>Red Printed</p>
    <p>Ksh 100</p></div>
    <div className="col-lg-6"> <img src={mugred} alt=""  className='img-fluid'/> <p>Red Printed</p>
    <p>Ksh 100</p></div>
    
    </div>
    <div className="row">
    <div className="col-lg-6"> <img src={mugred} alt=""  className='img-fluid'/> <p>Red Printed</p>
    <p>Ksh 100</p></div>
    <div className="col-lg-6"> <img src={mugred} alt=""  className='img-fluid'/> <p>Red Printed</p>
    <p>Ksh 100</p></div>
    
    </div>
    <div className="row">
    <div className="col-lg-6"> <img src={mugred} alt=""  className='img-fluid'/> <p>Red Printed</p>
    <p>Ksh 100</p></div>
    <div className="col-lg-6"> <img src={mugred} alt=""  className='img-fluid'/> <p>Red Printed</p>
    <p>Ksh 100</p></div>
    
    </div>
    <div className="row">
    <div className="col-lg-6"> <img src={mugred} alt=""  className='img-fluid'/> <p>Red Printed</p>
    <p>Ksh 100</p></div>
    <div className="col-lg-6"> <img src={mugred} alt=""  className='img-fluid'/> <p>Red Printed</p>
    <p>Ksh 100</p></div>
    
    </div>

    </div>
    <div className="col-lg-8 p-5">
      <p className='fs-4 '>Home/Shop</p>
    <p className='fs-1 fw-bold orange'>Shop</p>
    <div className="row">
      <div className="col-lg "><p>Showing 1–9 of 11 results</p></div>
      <div className="col-lg pb-4 ">
<div class="dropdown">
  <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    id="triggerId"
    data-bs-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="triggerId">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item disabled" href="#">Disabled action</a>
    <h6 class="dropdown-header">Section header</h6>
    <a class="dropdown-item" href="#">Action</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">After divider action</a>
  </div>
</div></div>
    </div>


<div className="row">
  <div className="col-lg"><img src={mugred} alt="" className='img-fluid' /> <p>Mugs</p> <p>Printed Red</p><p>Ksh 300</p></div>
  <div className="col-lg"><img src={mugred} alt="" className='img-fluid' /> <p>Mugs</p> <p>Printed Red</p><p>Ksh 300</p></div>
  <div className="col-lg"><img src={mugred} alt="" className='img-fluid' /> <p>Mugs</p> <p>Printed Red</p><p>Ksh 300</p></div>

  
</div>
<div className="row">
  <div className="col-lg"><img src={mugred} alt="" className='img-fluid' /> <p>Mugs</p> <p>Printed Red</p><p>Ksh 300</p></div>
  <div className="col-lg"><img src={mugred} alt="" className='img-fluid' /> <p>Mugs</p> <p>Printed Red</p><p>Ksh 300</p></div>
  <div className="col-lg"><img src={mugred} alt="" className='img-fluid' /> <p>Mugs</p> <p>Printed Red</p><p>Ksh 300</p></div>

  
</div>
<div className="row">
  <div className="col-lg"><img src={mugred} alt="" className='img-fluid' /> <p>Mugs</p> <p>Printed Red</p><p>Ksh 300</p></div>
  <div className="col-lg"><img src={mugred} alt="" className='img-fluid' /> <p>Mugs</p> <p>Printed Red</p><p>Ksh 300</p></div>
  <div className="col-lg"><img src={mugred} alt="" className='img-fluid' /> <p>Mugs</p> <p>Printed Red</p><p>Ksh 300</p></div>

  
</div>
<div className="row">
  <div className="col-lg"><img src={mugred} alt="" className='img-fluid' /> <p>Mugs</p> <p>Printed Red</p><p>Ksh 300</p></div>
  <div className="col-lg"><img src={mugred} alt="" className='img-fluid' /> <p>Mugs</p> <p>Printed Red</p><p>Ksh 300</p></div>
  <div className="col-lg"><img src={mugred} alt="" className='img-fluid' /> <p>Mugs</p> <p>Printed Red</p><p>Ksh 300</p></div>

  
</div>

    </div>
  </div>
</div>
</>  
)
}

export default Allproducts