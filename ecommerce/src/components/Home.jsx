import React from 'react'
import "./home.css"
import image26Free from '../assets/image26-free.png';
import image1 from '../assets/image-01.jpg'
import image2 from '../assets/image-02.jpg'
import image3 from '../assets/image-03.jpg'
import mug from '../assets/mug-white-300x300.jpg'
import tshirt from '../assets/tshirt.jpg'
import client from '../assets/client.jpg'
import featured from '../assets/featured.png'


const Home = () => {
  return (
    <>
    <div className="container-fluid p-4 background-grey">
        <div className="row ">
            <div className="col-lg-6 py-4 px-5">
                <hr className='orange-red horizontal-line'/>
                <p className='fs-4'> Best Quality Products</p>
                <p className='we-print-what-you-want'>We Print What You Want</p>
                <p className='click-edit-button'>Click edit button to change this text.
                     Lorem ipsum dolor 
                    sit amet, consectetur adipiscing elit. Sapien.</p>
                <button className='background-orange-red text-light gs-button'>
                <i class="fa-solid fa-chevron-right"></i> Get Started</button>
            </div>
            <div className="col-lg-6 text-center mx-auto">
                <img src={image26Free} alt="" className='img-fluid'/>
            </div>
        </div>
    </div>

    <div className=" container-fluid design-of-the-week">
        <div className="row">
            <div className="col-lg-4 mx-auto py-4">
                <img src={image1} alt="" className='design-of-the-week-images img-fluid' />
                <p className='text-center'>The Best Tshirts</p>
                <p className='text-center pick-from-the-best'>Pick from the best</p>
            </div>
            <div className="col-lg-4 mx-auto py-4">
                <p className='text-center'>The Best Tshirts</p>
                <p className='text-center pick-from-the-best'>Pick from the best</p>
                <img src={image2} alt="" className='design-of-the-week-images img-fluid' />

            </div>
            <div className="col-lg-4 mx-auto  py-4" >
                <img src={image3} alt="" className='design-of-the-week-images img-fluid'/>
                <p className='text-center'>The Best Tshirts</p>
                <p className='text-center pick-from-the-best'>Pick from the best</p>
            </div>
        </div>
    </div>

    <div className="container my-5">
    <p className='text-center fs-2 fw-bold'>Our Featured Products</p>
    <hr className='orange-red horizontal-line mx-auto'/>
        <div className="row">
            
            <div className="col-lg-3 text-center">
                <img src={mug} alt="" className='img-fluid'/>
                <p className= ''>Mug</p>
                <p className='fw-bold'>Black Printed Coffee Mug</p>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p className='fw-bold'>KSH 200</p>
            </div>
            <div className="col-lg-3 text-center">
                <img src={mug} alt="" className='img-fluid' />
                <p className= ''>Mug</p>
                <p className='fw-bold'>Black Printed Coffee Mug</p>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p className='fw-bold'>KSH 200</p>
            </div>
            <div className="col-lg-3 text-center">
                <img src={mug} alt="" className='img-fluid'/>
                <p className= ''>Mug</p>
                <p className='fw-bold'>Black Printed Coffee Mug</p>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p className='fw-bold'>KSH 200</p>
            </div>
            <div className="col-lg-3 text-center">
                <img src={mug} alt="" className='img-fluid'/>
                <p className= ''>Mug</p>
                <p className='fw-bold'>Black Printed Coffee Mug</p>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p className='fw-bold'>KSH 200</p>
            </div>
        </div>
    </div>

    <div className="container-fluid background-grey">
        <div className="row">
            <div className="col-lg-6 px-5">
                <p className='fw-bold hurry-up'>Hurry Up!</p>
                <p className='fw-bold deal-of-the-day'>Deal of the Day</p>
                <p className='fw-bold'>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Similique, odit?</p>
                <button className='background-orange-red btn-shop-now'>SHOP NOW</button>

            </div>
            <div className="col-lg-6">
                <img src={image26Free} alt=""  className='img-fluid'/>
            </div>
        </div>
    </div>

    <div className="container">
    <p className='text-center pt-5 fw-bold fs-2'>Most Loved Products</p>
    <hr className=' mx-auto horizontal-line'/>
        <div className="row">
           
            <div className="col-lg-3 text-center mx-auto">
                <img src={tshirt} alt="" className='img-fluid'/>
                <p>Tshirts</p>
                <p className='fw-bold'>Printed Green</p>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p className='fw-bold'>KSH. 400</p>
            </div>
            <div className="col-lg-3 text-center mx-auto">
                <img src={tshirt} alt="" className='img-fluid'/>
                <p>Tshirts</p>
                <p className='fw-bold'>Printed Green</p>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p className='fw-bold'>KSH. 400</p>
            </div>
            
            <div className="col-lg-3 text-center mx-auto">
                <img src={tshirt} alt="" className='img-fluid'/>
                <p>Tshirts</p>
                <p className='fw-bold'>Printed Green</p>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p className='fw-bold'>KSH. 400</p>
            </div>

            <div className="col-lg-3 text-center mx-auto">
                <img src={tshirt} alt="" className='img-fluid'/>
                <p>Tshirts</p>
                <p className='fw-bold'>Printed Green</p>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p className='fw-bold'>KSH. 400</p>
            </div>
            
        </div>
    </div>

    <div className="container">
    <p className='text-center pt-5 fw-bold fs-2'>Our Happy Clients</p>
    <hr  className='horizontal-line mx-auto'/>
        <div className="row">
            
            <div className="col-lg-4 ">
                <div className='mx-2 client'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quasi in saepe hic aperiam animi excepturi provident 
                    debitis quo vel nobis?</p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                <div className='d-flex py-3'>
                <div className="col">
                    <img src={client}></img>
                </div>
                <div className="col py-2">
                    <p>John Doe</p>
                </div>
                </div>
                </div>
            </div>

            <div className="col-lg-4 ">
                <div className='mx-2 client'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quasi in saepe hic aperiam animi excepturi provident 
                    debitis quo vel nobis?</p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                <div className='d-flex py-3'>
                <div className="col">
                <img src={client}></img>
                </div>
                <div className="col py-2">
                    <p>John Smith</p>
                </div>
                </div>
                </div>
            </div>

            <div className="col-lg-4 ">
                <div className='mx-2 client'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quasi in saepe hic aperiam animi excepturi provident 
                    debitis quo vel nobis?</p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                <div className='d-flex py-3'>
                <div className="col">
                <img src={client}></img>
                </div>
                <div className="col py-2">
                    <p>Jane Smith</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container text-center py-5">
        <div className="row ">
            <div className="col-lg fw-bold">Featured In:</div>
            <div className="col-lg"><img src={featured} alt="" /></div>
            <div className="col-lg"><img src={featured} alt="" /></div>
            <div className="col-lg"><img src={featured} alt="" /></div>
            <div className="col-lg"><img src={featured} alt="" /></div>

        </div>
    </div>

    
    </>
  )
}

export default Home