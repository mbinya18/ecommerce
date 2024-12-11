import React from 'react'
import "./banner.css"
import image26Free from './assets/image26-free.png';
import image1 from './assets/image-01.jpg'
import image2 from './assets/image-02.jpg'
import image3 from './assets/image-03.jpg'
import mug from './assets/mug-white-300x300.jpg'
import tshirt from './assets/tshirt.jpg'



const Banner = () => {
  return (
    <>
    <div className="container-fluid p-4 background-grey">
        <div className="row ">
            <div className="col-lg-6 py-4 px-5">
                <hr className='orange-red'/>
                <p className='fs-4'> Best Quality Products</p>
                <p>We Print What You Want</p>
                <p>Click edit button to change this text.
                     Lorem ipsum dolor 
                    sit amet, consectetur adipiscing elit. Sapien.</p>
                <button className='background-orange-red text-light gs-button'> Get Started</button>
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
                <p className='text-center'>Pick from the best</p>
            </div>
            <div className="col-lg-4 mx-auto py-4">
                <p className='text-center'>The Best Tshirts</p>
                <p className='text-center'>Pick from the best</p>
                <img src={image2} alt="" className='design-of-the-week-images img-fluid' />

            </div>
            <div className="col-lg-4 mx-auto  py-4" >
                <img src={image3} alt="" className='design-of-the-week-images img-fluid'/>
                <p className='text-center'>The Best Tshirts</p>
                <p className='text-center'>Pick from the best</p>
            </div>
        </div>
    </div>

    <div className="container my-5">
        <div className="row">
            <p className='text-center'>Our Featured Products</p>
            <hr className='orange-red'/>
            <div className="col-lg-3 text-center">
                <img src={mug} alt="" className='img-fluid'/>
                <p>Mug</p>
                <p>Black Printed Coffee Mug</p>
                <p>KSH 200</p>
            </div>
            <div className="col-lg-3 text-center">
                <img src={mug} alt="" className='img-fluid' />
                <p>Mug</p>
                <p>Black Printed Coffee Mug</p>
                <p>KSH 200</p>
            </div>
            <div className="col-lg-3 text-center">
                <img src={mug} alt="" className='img-fluid'/>
                <p>Mug</p>
                <p>Black Printed Coffee Mug</p>
                <p>KSH 200</p>
            </div>
            <div className="col-lg-3 text-center">
                <img src={mug} alt="" className='img-fluid'/>
                <p>Mug</p>
                <p>Black Printed Coffee Mug</p>
                <p>KSH 200</p>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6">
                <p>Hurry Up!</p>
                <p>Deal of the Day</p>
                <p>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Similique, odit?</p>
                <button className='background-orange-red btn-shop-now'>SHOP NOW</button>

            </div>
            <div className="col-lg-6">
                <img src={image26Free} alt=""  className='img-fluid'/>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <p className='text-center'>Most Loved Products</p>
            <hr className='orange-red'/>
            <div className="col-lg-3 text-center mx-auto">
                <img src={tshirt} alt="" className='img-fluid'/>
                <p>Tshirts</p>
                <p>Printed Green</p>
                <p>KSH. 400</p>
            </div>
            <div className="col-lg-3 text-center mx-auto">
                <img src={tshirt} alt="" className='img-fluid'/>
                <p>Tshirts</p>
                <p>Printed Green</p>
                <p>KSH. 400</p>
            </div>
            
            <div className="col-lg-3 text-center mx-auto">
                <img src={tshirt} alt="" className='img-fluid'/>
                <p>Tshirts</p>
                <p>Printed Green</p>
                <p>KSH. 400</p>
            </div>

            <div className="col-lg-3 text-center mx-auto">
                <img src={tshirt} alt="" className='img-fluid'/>
                <p>Tshirts</p>
                <p>Printed Green</p>
                <p>KSH. 400</p>
            </div>
            
        </div>
    </div>

    <div className="container">
        <div className="row">
            <p className='text-center'>Our Happy Clients</p>
            <hr  className='orange-red'/>
            <div className="col-lg-4 ">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quasi in saepe hic aperiam animi excepturi provident 
                    debitis quo vel nobis?</p>

                <div className='d-flex'>
                <div className="col">
                    <p>hello</p>
                </div>
                <div className="col">
                    <p>hello2</p>
                </div>
                </div>
            </div>

            <div className="col-lg-4 ">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quasi in saepe hic aperiam animi excepturi provident 
                    debitis quo vel nobis?</p>

                <div className='d-flex'>
                <div className="col">
                    <p>hello</p>
                </div>
                <div className="col">
                    <p>hello2</p>
                </div>
                </div>
            </div>

            <div className="col-lg-4 ">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quasi in saepe hic aperiam animi excepturi provident 
                    debitis quo vel nobis?</p>

                <div className='d-flex'>
                <div className="col">
                    <p>hello</p>
                </div>
                <div className="col">
                    <p>hello2</p>
                </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container text-center my-5">
        <div className="row">
            <div className="col-lg">Featured</div>
            <div className="col-lg">Featured</div>
            <div className="col-lg">Featured</div>
            <div className="col-lg">Featured</div>
            <div className="col-lg">Featured</div>
        </div>
    </div>

    <div className="container-fluid footer background-dark-grey text-light">
        <div className="row py-5">
            <div className="col-lg">
              Footer  
            </div>
            <div className="col-lg">
              Footer  
            </div>
            <div className="col-lg">
              Footer  
            </div>
            <div className="col-lg">
              Footer  
            </div>
        </div>
        <hr className='orange-red'/>
        <div className="row text-center py-5">
            <div className="col-lg">2024</div>
            <div className="col-lg">2024</div>
        </div>
    </div>
    </>
  )
}

export default Banner