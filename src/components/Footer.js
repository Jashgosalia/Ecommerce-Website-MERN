import React from 'react'
import { icons } from 'react-icons'
import { BsSearch } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { BsLinkedin, BsYoutube, BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs'


const Footer = () => {
  return (
    <>
   
    <footer className='py-3'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex align-items-center gap-30'>
              <img src="images/images/newsletter.png" alt='newsletter image'/>
              <h2 className='text-white mb-0 '>Sign in for newletter</h2>
            </div>
          </div>
          <div className='col-7'>
              <div class="input-group mb-3">
                <input type="text" class="form-control py-2" placeholder="Enter your email address" aria-label="Enter your email address" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                  <span class="input-group-text p-3" id="basic-addon2">
                    Subscribe here
                  </span>
                </div>
              </div>

          </div>

        </div>
      </div>
    </footer>
    <footer className='py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact us</h4>
            <div className='d-flex flex-column'>
              <address className='text-white'>Mumbai, Maharashtra</address>
              <a href='tel:' className='text-white'>Phone number</a>
              <a href='mailto:' className='text-white'>Email Id</a>
              <div className='social-icons d-flex gap-30'>
                <a href='' alt='Instagram' className='text-white fs-4'>
                  <BsInstagram/>
                </a>
                <a href='' alt='Facebook' className='text-white fs-4'>
                  <BsFacebook/>
                </a>
                <a href='' alt='Github' className='text-white fs-4'>
                  <BsGithub/>
                </a>  
                <a href='' alt='Youtube' className='text-white fs-4'>
                  <BsYoutube/>
                </a>
                <a href='' alt='Linkedin' className='text-white fs-4'>
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2'>Privacy Policy</Link>
              <Link className='text-white py-2'>Refund Policy</Link>
              <Link className='text-white py-2'>Shipping policy</Link>
              <Link className='text-white py-2'>Terms and conditions</Link>
              <Link className='text-white py-2'>Blog</Link>

            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2'>About us</Link>
              <Link className='text-white py-2'>FAQ</Link>
              <Link className='text-white py-2'>Contact</Link>
              <Link className='text-white py-2'>Watch</Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2'>Laptops</Link>
              <Link className='text-white py-2'>Headphones</Link>
              <Link className='text-white py-2'>Tablets</Link>
              <Link className='text-white py-2'>Watch</Link>
              <Link className='text-white py-2'>Mobile</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4 footer-bottom'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-white text-center'> &copy; {new Date().getFullYear()} powered by developers</p>
          </div>
        </div>
      </div>
    </footer>
    </>





  )
}

export default Footer