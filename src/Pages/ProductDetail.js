import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import product from '../Components/shoes.json';

const ProductDetail = () => {
    const {id} = useParams();
    const getProduct = product[id];
    console.log('Data is here',getProduct);
    return (
       <div className='container-fluid p-l-r-0'>
            <Header hide={true}/>
        <div className='container'>
            <div className="row">
                <div className='col-md-12'>
                    <div className='row'>
                        <div className="col-md-5 mt-3">
                         {/* <ImageGallery items={images} lazyLoad={true} /> */}
                         <img src={getProduct.imageURL} className="img-responsive w-100 have-height" alt="Main Image" />
                        </div>
                        <div className="col-md-7 mt-3">
                            <h1 className="font-700 font-color">{getProduct.name} <span className="font-20 font-500">(BRAND: {getProduct.brand})</span></h1>
                            <h4 className="font-500 color-red mt-2">${getProduct.price}</h4>
                            <h2 className="font-600 mt-2">DESCRIPTION</h2>
                            <span className="font-20 font-color font-400">{getProduct.description}</span>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                           <h3 className="font-22 font-700 mt-2">CATEGORY:   <span className="font-20 font-color font-400">({getProduct.category})</span></h3>
                                        </div>
                                        <div className='col-md-6'>
                                           <h3 className="font-22 font-700 mt-2">GENDER:   <span className="font-20 font-color font-400">({getProduct.gender})</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                  <div className='row'>
                                      <div className='col-md-6'>
                                      <h3 className="font-22 font-700 mt-2">QUANTITY:   <span className="font-20 font-color font-400">({getProduct.items_left})</span></h3>
                                      </div>
                                      <div className='col-md-6 mt-3'>
                                          <button className='btn btn-xs btn-sm btn-md btn-lg w-100 btn-custom'>BUY NOW</button>
                                      </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
             <Footer />
       </div>
    )
}

export default ProductDetail;