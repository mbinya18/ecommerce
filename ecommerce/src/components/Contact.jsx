import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-lg hello-col">
                <p className='say-hello'>Say Hello.</p>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <p><i class="fa-solid fa-map"></i>Location</p>
                    <p><i class="fa-solid fa-map"></i>Location</p>
                    <p><i class="fa-solid fa-map"></i>Location</p>
            </div>
            <div className="col-lg">
            <form action="POST" className="contact-form">
  <p className='queries'>Ask Your Queries</p>
  <div className='email py-3 '>
    <input type="email" name="email" placeholder="Your Email" />
  </div>
  <div className='subject py-3'>
    <input type="text" name="subject" placeholder="Subject" />
  </div>
  <div className='message py-3'>
    <input type="text" name="message" placeholder="Message" />
  </div>
  <div className='submit py-3'>
    <input type="submit" value="SEND MESSAGE"  className='submit-btn px-4 py-1'/>
  </div>
</form>

            </div>
        </div>
    </div>
    </>
  )
}

export default Contact