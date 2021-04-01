import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Card, CardImg, CardBody,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import products from './shoes.json';
import '../custom.css';

const items = [
    {
      src: 'https://dealswayshop.co.in/wp-content/uploads/2018/08/banner-114.jpg',
    },
    {
      src: 'https://cdn.dribbble.com/users/3237629/screenshots/12922258/artboard_1_copy_7_4x.jpg',
    },
    {
      src: 'https://cdn.dribbble.com/users/3237629/screenshots/12922293/artboard_1_4x.jpg',
    },
    {
      src: 'https://cdn.dribbble.com/users/3906861/screenshots/10737841/nike_4x.jpg',
    }
  ];
const upcoming = [
  {
    src: 'https://i.pinimg.com/originals/e7/f7/1c/e7f71ce97c56ea47bc78e294a5ab3f3c.jpg',
  },
  {
    src: 'https://arch-usa.com/wp-content/uploads/2017/06/060617_SU17_HP_RN_NIKE_ZOOM_SERIES_1600x600.jpg',
  },
  {
    src: 'https://www.thedropdate.com/wp-content/uploads/2017/09/zoom-zoom-series-feat.jpg',
  },
  {
    src: 'https://www.rene-stichler.de/images/renestichlerde/374-nike-skors-on-sale-types-basketball-skors-sneakers-running-5182.jpg',
  }
]
const inStock = [
  {
    src: 'https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg',
  },
  {
    src: 'https://modatrip.com/wp-content/uploads/2020/04/nike-1.jpg',
  },
  {
    src: 'https://i.pinimg.com/originals/a1/5c/bc/a15cbc46ef421272a227accd9dca6a20.jpg',
  },
  {
    src: 'https://i.pinimg.com/originals/24/7a/0a/247a0a55e5e6aa0cb2215f375b85dc67.png',
  }
]
const newStock = [
  {
    src: 'http://running.totalsports.co.za/wp-content/uploads/2019/09/running-shoes-banner-1.jpg',
  },
  {
    src: 'https://www.sydneyphysiogroup.com/wp-content/uploads/2018/03/Running-Shoes-Banner.jpg',
  },
  {
    src: 'http://2.bp.blogspot.com/-vigVnwstrjM/WcSv8gcNkgI/AAAAAAAAFD4/6H2rvdFRvsgJA--Ag0RmRK7I-MP-R-dqACK4BGAYYCw/s1600/Nike_Air_Zoom_Pegasus_33.jpg',
  },
  {
    src: 'https://i.pinimg.com/originals/24/7a/0a/247a0a55e5e6aa0cb2215f375b85dc67.png',
  }
]
const Body = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="img-responsive w-100 height-custom" />
      </CarouselItem>
    );
  });
  const slidesStock = inStock.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="img-responsive w-100 height-custom" />
      </CarouselItem>
    );
  });
  const slidesUpcoming = upcoming.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="img-responsive w-100 height-custom" />
      </CarouselItem>
    );
  });
  const slidesNew = newStock.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="img-responsive w-100 height-custom" />
      </CarouselItem>
    );
  });
  const value = useSelector(({auth})=>{return auth.viewToShow});
  console.log('====================================',value);
    return (
         <div className='container-fluid p-l-r-0 mt-1'>
         {
           value == 'ALL' ? (
             <>
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Carousel>
              <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='row'>
                        {
                          Object.keys(products).map((index)=>{
                            const shoe = products[index]
                            return(
                              <div className='col-6 col-md-4' key={index}>
                              <Link to={`/product/${index}`} style={{textDecoration: 'none',color:'inherit'}}>
                                    <Card className='padding-custom mt-3 bg-texture'>
                                   
                                            <span className="make-pos-top font-20 font-700">{shoe.brand}</span>
                                            <CardImg top width="100%" src={shoe.imageURL} alt="Card image cap" />
                                            <CardBody>
                                                <h1 className='font-500 text-center'>{shoe.name}</h1>
                                                <h6 className='font-500 text-center font-color'>Category:({shoe.category})</h6>
                                                <p className='font-12 font-400 text-center'>{shoe.description}</p>
                                                <h2 className='font-500 text-center font-color'>${shoe.price}</h2>
                                                <h6 className='font-500 text-center font-color'>QUANTITY:{shoe.items_left}</h6>
                                                <div className='text-center'><button className='btn btn-xs btn-sm btn-md btn-lg w-50 btn-custom'>BUY NOW</button></div>
                                            </CardBody>
                                    </Card>
                                    </Link>
                            </div>
                            )
                          })
                        }
                        </div>
                    </div>
                </div>
           </div>
        </>
           ) : (value == 'STOCK') ? (
            <>
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    <CarouselIndicators items={inStock} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slidesStock}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Carousel>
              <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='row'>
                        {
                          Object.keys(products).map((index)=>{
                            const shoe = products[index]
                            return(
                              <div className='col-6 col-md-4' key={index}>
                              <Link to={`/product/${index}`} style={{textDecoration: 'none',color:'inherit'}}>
                                    <Card className='padding-custom mt-3 bg-texture'>
                                   
                                            <span className="make-pos-top font-20 font-700">{shoe.brand}</span>
                                            <CardImg top width="100%" src={shoe.imageURL} alt="Card image cap" />
                                            <CardBody>
                                                <h1 className='font-500 text-center'>{shoe.name}</h1>
                                                <h6 className='font-500 text-center font-color'>Category:({shoe.category})</h6>
                                                <p className='font-12 font-400 text-center'>{shoe.description}</p>
                                                <h2 className='font-500 text-center font-color'>${shoe.price}</h2>
                                                <h6 className='font-500 text-center font-color'>QUANTITY:{shoe.items_left}</h6>
                                                <div className='text-center'><button className='btn btn-xs btn-sm btn-md btn-lg w-50 btn-custom'>BUY NOW</button></div>
                                            </CardBody>
                                    </Card>
                                    </Link>
                            </div>
                            )
                          })
                        }
                        </div>
                    </div>
                </div>
           </div>
        </>
           ) :(value == 'UPCOMING') ? (
            <>
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    <CarouselIndicators items={upcoming} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slidesUpcoming}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Carousel>
              <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='row'>
                        {
                          Object.keys(products).map((index)=>{
                            const shoe = products[index]
                            return(
                              <div className='col-6 col-md-4' key={index}>
                              <Link to={`/product/${index}`} style={{textDecoration: 'none',color:'inherit'}}>
                                    <Card className='padding-custom mt-3 bg-texture'>
                                   
                                            <span className="make-pos-top font-20 font-700">{shoe.brand}</span>
                                            <CardImg top width="100%" src={shoe.imageURL} alt="Card image cap" />
                                            <CardBody>
                                                <h1 className='font-500 text-center'>{shoe.name}</h1>
                                                <h6 className='font-500 text-center font-color'>Category:({shoe.category})</h6>
                                                <p className='font-12 font-400 text-center'>{shoe.description}</p>
                                                <h2 className='font-500 text-center font-color'>${shoe.price}</h2>
                                                <h6 className='font-500 text-center font-color'>QUANTITY:{shoe.items_left}</h6>
                                                <div className='text-center'><button className='btn btn-xs btn-sm btn-md btn-lg w-50 btn-custom'>BUY NOW</button></div>
                                            </CardBody>
                                    </Card>
                                    </Link>
                            </div>
                            )
                          })
                        }
                        </div>
                    </div>
                </div>
           </div>
        </>
           ) : (value == 'NEW')? (
            <>
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    <CarouselIndicators items={newStock} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slidesNew}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Carousel>
              <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='row'>
                        {
                          Object.keys(products).map((index)=>{
                            const shoe = products[index]
                            return(
                              <div className='col-6 col-md-4' key={index}>
                              <Link to={`/product/${index}`} style={{textDecoration: 'none',color:'inherit'}}>
                                    <Card className='padding-custom mt-3 bg-texture'>
                                   
                                            <span className="make-pos-top font-20 font-700">{shoe.brand}</span>
                                            <CardImg top width="100%" src={shoe.imageURL} alt="Card image cap" />
                                            <CardBody>
                                                <h1 className='font-500 text-center'>{shoe.name}</h1>
                                                <h6 className='font-500 text-center font-color'>Category:({shoe.category})</h6>
                                                <p className='font-12 font-400 text-center'>{shoe.description}</p>
                                                <h2 className='font-500 text-center font-color'>${shoe.price}</h2>
                                                <h6 className='font-500 text-center font-color'>QUANTITY:{shoe.items_left}</h6>
                                                <div className='text-center'><button className='btn btn-xs btn-sm btn-md btn-lg w-50 btn-custom'>BUY NOW</button></div>
                                            </CardBody>
                                    </Card>
                                    </Link>
                            </div>
                            )
                          })
                        }
                        </div>
                    </div>
                </div>
           </div>
        </>
           ) : (value == 'LATEST')? (
            <>
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Carousel>
              <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='row'>
                        {
                          Object.keys(products).map((index)=>{
                            const shoe = products[index]
                            return(
                              <div className='col-6 col-md-4' key={index}>
                              <Link to={`/product/${index}`} style={{textDecoration: 'none',color:'inherit'}}>
                                    <Card className='padding-custom mt-3 bg-texture'>
                                   
                                            <span className="make-pos-top font-20 font-700">{shoe.brand}</span>
                                            <CardImg top width="100%" src={shoe.imageURL} alt="Card image cap" />
                                            <CardBody>
                                                <h1 className='font-500 text-center'>{shoe.name}</h1>
                                                <h6 className='font-500 text-center font-color'>Category:({shoe.category})</h6>
                                                <p className='font-12 font-400 text-center'>{shoe.description}</p>
                                                <h2 className='font-500 text-center font-color'>${shoe.price}</h2>
                                                <h6 className='font-500 text-center font-color'>QUANTITY:{shoe.items_left}</h6>
                                                <div className='text-center'><button className='btn btn-xs btn-sm btn-md btn-lg w-50 btn-custom'>BUY NOW</button></div>
                                            </CardBody>
                                    </Card>
                                    </Link>
                            </div>
                            )
                          })
                        }
                        </div>
                    </div>
                </div>
           </div>
        </>
           ) : (null)
         }
          
        </div>
    )
}

export default Body;