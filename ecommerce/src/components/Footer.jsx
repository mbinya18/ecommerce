import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (

    <>
    <div className="container-fluid footer background-dark-grey text-light">
        <div className="row py-5">
            <div className="col-lg">
            <p className='fs-4 fw-bold'>Custom Print Store  </p>
            <i className="fa-brands fa-instagram px-3"></i>
            <i className="fa-brands fa-linkedin-in px-3"></i>
            <i className="fa-brands fa-facebook-f px-3"></i>
            </div>
            <div className="col-lg">
            <p className='fs-4 fw-bold'>Get in Touch with Us for the Best Quality Custom Prints & Supplies.</p> 
            <p>Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, 
                sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
            </div>
            <div className="col-lg">
            <p className='quick-links fs-4 fw-bold'>Quick Links</p>
            <Link href="#" className='text-decoration-none white' to={"/"}>Home</Link><br/>
            <Link href="#" className='text-decoration-none white' to={"/"}>Home</Link><br/>
            <Link href="#" className='text-decoration-none white' to={"/"}>Home</Link><br/>
            </div>
            <div className="col-lg">
            <p className='important-links fs-4 fw-bold'>Important Links </p> 
            <Link href="#" className='text-decoration-none white' to={"/"}>Home</Link><br/>
            <Link href="#" className='text-decoration-none white' to={"/"}>Home</Link><br/>
            <Link href="#" className='text-decoration-none white' to={"/"}>Home</Link><br/>
            </div>
        </div>
        <hr className='orange-red'/>
        <div className="row text-center py-5">
            <div className="col-lg">
            <p>&copy; {currentYear} Your Name or Company. All rights reserved.</p>
            </div>
            <div className="col-lg">Powered by Mbinya</div>
        </div>
        </div>
    </>
  )
}

export default Footer