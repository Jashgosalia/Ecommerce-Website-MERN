import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {BsSearch} from "react-icons/bs"


const Header = () => {
  return (
    <>
      <header className='header-top-band py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white'>Free shipping over $100 & free returns</p>
            </div>
            <div className='col-6'>
              <p className="text-end text-white">
                Hotline: <a href="tel:" className='text-white'>Phone number</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h1>
                <Link className='text-white'>Project</Link>
              </h1>
            </div>
            <div className='col-5'>

            <div class="input-group mb-3">
              <input type="text" class="form-control py-2" placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="basic-addon2"/>
              <div class="input-group-append">
              <span class="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-4'/></span>
              </div>
            </div>
            </div>

            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                  <div>
                      <Link className='d-flex align-items-center gap-10 text-white'>
                        <img src='images/images/compare.svg' alt='compare image' />
                        <p className='mb-0'>Compare<br />products</p>
                      </Link>
                  </div>
                  <div>
                      <Link className='d-flex align-items-center gap-10 text-white'>
                        <img src='images/images/wishlist.svg' alt='wishlist images'/>
                        <p className='mb-0'>Favourite<br/>wishlist</p>
                      </Link>
                  </div>
                  <div>
                      <Link className='d-flex align-items-center gap-10 text-white'>
                      <img src='/images/images/user.svg' alt='user image'/>
                      <p className='mb-0'>Login<br/>my account</p>
                      </Link>
                  </div>
                  <div>
                      <Link className='d-flex align-items-center gap-10 text-white'>
                      <img src='/images/images/cart.svg' alt='cart image'/>
                      <div className='d-flex flex-column gap-10'>
                        <span className='badge bg-white text-dark'>0</span>
                        <p className='mb-0'>$500</p>
                      </div>
                      </Link>
                  </div>
              </div>









            </div>

              

             

            </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-15'>
                <div>
                  <div className="dropdown">
                    {/* In bootstrap dropdown there was error 
                    so add data-bs-toggle="dropdown" in code, it will work */}
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" data-bs-toggle="dropdown"  aria-expanded="false">
                      <div className='shop-btn d-flex gap-15 me-5'>
                        <span><img src="images/images/menu.svg" alt="" /></span>
                        <span>Shop Categories</span>
                      </div>
                      
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <Link className="dropdown-item text-white " to="">Another action</Link>
                      <Link className="dropdown-item text-white " to="">Action</Link>
                      <Link className="dropdown-item text-white " to="">Something else here </Link>
                    </div>
                  </div>

                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to=''>Home</NavLink>
                    <NavLink to=''>Our Store</NavLink>
                    <NavLink to=''>Blog</NavLink>
                    <NavLink to=''>Contacts</NavLink>


                  </div>

                </div>







              </div>
            </div>

          </div>
        </div>
      </header>
    
    </>





  )
}

export default Header