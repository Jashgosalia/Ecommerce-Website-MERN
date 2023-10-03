import React from 'react'
import {Link} from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <>
    <section className="home-wrapper-1 py-5">
      <div className='container-xxl'>
        <div className='row px-6'>
          <div className='col-6'>
            <div className='main-banner position-relative p-3'>
              <img src='images/images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner'></img>
              <div className='main-banner-content position-absolute'>
                <h4>Supercharged for PRO</h4>
                <h5>iPad Pro</h5>
                <p>From $1999.00 or $82.62 per month</p>
                <Link className='button'>Buy now</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap justify-content-between align-items-center gap-10'>
              <div className='small-banner position-relative p-3'>
                <img src='images/images/catbanner-01.jpg' className='img-fluid rounded-3' alt='small banner'></img>
                <div className='small-banner-content position-absolute'>
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>From $1699.00 or <br/> $64.62 per month</p>
                </div>
              </div>
              <div className='small-banner position-relative p-3'>
                <img src='images/images/catbanner-03.jpg' className='img-fluid rounded-3' alt='small banner'></img>
                <div className='small-banner-content position-absolute'>
                  <h4>New Arrival</h4>
                  <h5>Buy iPad Air</h5>
                  <p>From $599.00 or <br/> $49.91 per month</p>
                </div>
              </div>
              <div className='small-banner position-relative p-3'>
                <img src='images/images/catbanner-02.jpg' className='img-fluid rounded-3' alt='small banner'></img>
                <div className='small-banner-content position-absolute'>
                  <h4>15% Off</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest band <br/>styles and colors.</p>
                  
                </div>
              </div>
              <div className='small-banner position-relative p-3'>
                <img src='images/images/catbanner-04.jpg' className='img-fluid rounded-3' alt='small banner'></img>
                <div className='small-banner-content position-absolute'>
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback <br></br> and ultra-low distortion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section className="home-wrapper-2 py-5">
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex justify-content-between align-items-center'>
              <div className="d-flex align-items-center gap-15">
                <img src='images/images/service.png' alt='services'/>
                <div>
                  <h6>Free Shipping</h6>
                  <p>From all orders over $100</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src='images/images/service-02.png' alt='services'/>
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p>Save up to 25% off</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src='images/images/service-03.png' alt='services'/>
                <div >
                  <h6>Support 24/7</h6>
                  <p>Shop with an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src='images/images/service-04.png' alt='services'/>
                <div>
                  <h6>Affordable Prices</h6>
                  <p>Get  Factory direct price</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src='images/images/service-05.png' alt='services'/>
                <div>
                  <h6>Secure Payments</h6>
                  <p>100% Protected Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-3 py-10'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex flex-wrap align-items-center justify-content-between'>
              <div className='d-flex gap-15 align-items-center justify-content-between'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/camera.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-15 align-items-center justify-content-between'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/tv.jpg' alt='camera' />
              </div>
              <div className='d-flex gap-15 align-items-center justify-content-between'>
                <div>
                  <h6>Music and gaming</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/headphone.jpg' alt='camera' />
              </div>
              <div className='d-flex gap-15 align-items-center justify-content-between'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/watch.jpg' alt='camera' width='110px' height='110px' />
              </div>
              <div className='d-flex gap-15 align-items-center justify-content-between'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/camera.jpg' alt='camera' />
              </div>
              <div className='d-flex gap-15 align-items-center justify-content-between'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/tv.jpg' alt='camera' />
              </div>
              <div className='d-flex gap-15 align-items-center justify-content-between'>
                <div>
                  <h6>Music and gaming</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/headphone.jpg' alt='camera' />
              </div>
              <div className='d-flex gap-15 align-items-center justify-content-between'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src='images/images/watch.jpg' alt='camera' width='110px' height='110px' />
              </div>
            
              
            </div>
          </div>
        </div>
      </div>

    </section>

    <section className='marque-wrapper py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marque-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='px-3 mx-3 w-25'><img src='images/images/brand-01.png' alt='brand' /></div>
                <div className='px-3 mx-3 w-25'><img src='images/images/brand-02.png' alt='brand' /></div>
                <div className='px-3 mx-3 w-25'><img src='images/images/brand-03.png' alt='brand' /></div>
                <div className='px-3 mx-3 w-25'><img src='images/images/brand-04.png' alt='brand' /></div>
                <div className='px-3 mx-3 w-25'><img src='images/images/brand-05.png' alt='brand' /></div>
                <div className='px-3 mx-3 w-25'><img src='images/images/brand-06.png' alt='brand' /></div>
                <div className='px-3 mx-3 w-25'><img src='images/images/brand-07.png' alt='brand' /></div>
              </Marquee>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    <section className='blog-wrapper py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our latest blogs</h3>
          </div>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>
      </div>
    </section>


      <section className='product-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collections</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>









    </>
  )
}

export default Home