import React from 'react';
import Logo from '../Assets/footer-removebg-preview.png';

const Footer = () => {
    return (
       <React.Fragment>
           <div className='container-fluid bg-red mt-3'>
              <div className='row'>
                  <div className='col-md-12'>
                     <div className='row'>
                         <div className='col-md-4'></div>
                         <div className='col-md-4 text-center'>
                            <img src={Logo} className="img-responsive w-100 mt-2" alt="Header-logo-here" />
                            <div className='row'>
                                <div className='col-md-12'>
                                    <h3 className='font-25 font-700 colorWhite'>NIKE</h3>
                                    <p className='font-20 font-400 colorWhite'>&copy;Copyright, All Right Reserved by 2021</p>
                                </div>
                            </div>
                         </div>
                         <div className='col-md-4'></div>
                     </div>
                  </div>
              </div>
           </div>
       </React.Fragment>
    )
}

export default Footer;