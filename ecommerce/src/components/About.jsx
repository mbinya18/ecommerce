import React from 'react'
import './About.css'
import image26Free from '../assets/image26-free.png';


const About = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg mx-auto text-center py-5 background-grey">
                <p className='fs-1 fw-bold'>About Us</p>
                <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Ut elit tellus, <br/>luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>

    </div>
    <div className="container-fluid">
        <div className="row py-5">
            <div className="col-lg-6 px-5">
                <p className='fs-1 fw-medium'>We Are Your Favourite, Online Store.</p>
                <p>Dui habitasse provident eu etiam praesent placeat maiores 
                    temporibus, accumsan parturient autem, mi animi ipsa. Lobortis maxime quos, pellentesq.</p>
<p>
Ee platea animi commodo tincidunt ridiculus tempora, ornare lorem quam sit possimus? 
Quam cras facilisi officia fusce. Ac, excepteur excepteur fusce? Sunt minim expedita magnis!</p>
            </div>
            <div className="col-lg">
                <p><span className='fs-4 fw-bold'>Eros Imperdie</span><br/>
                We’ll generate a sitemap for your site,<br/> submit it to search engine is and track.</p><br/>
                <p><span className='fs-4 fw-bold'>Eros Imperdie</span><br/>
                We’ll generate a sitemap for your site,<br/> submit it to search engine is and track.</p>
            </div>
            <div className="col-lg">
            <p><span className='fs-4 fw-bold'>Eros Imperdie</span><br/>
                We’ll generate a sitemap for your site,<br/> submit it to search engine is and track.</p><br/>
                <p><span className='fs-4 fw-bold'>Eros Imperdie</span><br/>
                We’ll generate a sitemap for your site,<br/> submit it to search engine is and track.</p>
            </div>
        </div>
    </div>
    <div className="container-fluid background-orange">
        <div className="row ">
            <div className="col-8 my-5 mx-auto text-center">
                <p className='color-white get-best-offers'>Get Best Offers On Customized Designs!</p>
            </div>
            <div className="col-4 my-5">
                <button className='gt-button px-5 py-2'>GET STARTED</button>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <p className='mx-auto text-center meet-our-team my-5'> Meet Our Creative Team</p>
        <hr className='horizontal-line mx-auto text-center'/>
        <div className="row mx-5">
            <div className="col"><img src={image26Free} alt="" className='img-fluid'/>
            <p className='mx-auto text-center'>John Smith</p>
            <p className='mx-auto text-center'>Creatives</p>
            </div>
            <div className="col"><img src={image26Free} alt="" className='img-fluid'/>
            <p className='mx-auto text-center'>John Smith</p>
            <p className='mx-auto text-center'>Creatives</p></div>
            <div className="col"><img src={image26Free} alt="" className='img-fluid'/>
            <p className='mx-auto text-center'>John Smith</p>
            <p className='mx-auto text-center'>Creatives</p></div>

            
        </div>
    </div>
    <div className="container-fluid my-5">
        <div className="row">
            <div className="col mx-auto text-center">
                <p className='best-quality-printed'>Best Quality Printed T-Shirts & Mugs At Affordable Price!</p>
                <div className="row">
                    <div className="col">
                        <p>Personal Gifts</p>
                        <p>Personal Gifts</p>
                        <p>Personal Gifts</p>
                    </div>
                    <div className="col">
                    <p>Personal Gifts</p>
                    <p>Personal Gifts</p>
                    <p>Personal Gifts</p>
                    </div>
                </div>
            </div>
            <div className="col">
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    </div>
    <div className="container-fluid background-grey">
        <div className="row py-5">
            <div className="col mx-auto text-center">
                <p>Worldwide Shipping</p>
                <p>Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit. <br/>Explicabo quod eius officiis.</p>
            </div>
            <div className="col mx-auto text-center">
                <p>Worldwide Shipping</p>
                <p>Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit. <br/>Explicabo quod eius officiis.</p>
            </div>
            <div className="col mx-auto text-center">
                <p>Worldwide Shipping</p>
                <p>Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit. <br/>Explicabo quod eius officiis.</p>
            </div>
            <div className="col mx-auto text-center">
                <p>Worldwide Shipping</p>
                <p>Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit. <br/>Explicabo quod eius officiis.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default About