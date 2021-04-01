import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card, CardImg, CardBody,
} from 'reactstrap';
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
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
    return (
         <div className='container-fluid p-l-r-0 mt-1'>
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
                            <div className='col-6 col-md-4'>
                                    <Card className='padding-custom mt-3 bg-texture'>
                                            <span className="make-pos-top font-20 font-700">MAR, 15</span>
                                            <CardImg top width="100%" src="https://www.pinclipart.com/picdir/big/142-1425977_nike-red-shoes-fabulous-nike-zoom-tra8n-command.png" alt="Card image cap" />
                                            <CardBody>
                                                <h1 className='font-500 text-center'>Hello World</h1>
                                                <p className='font-12 font-400 text-center'>lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum</p>
                                                <div className='text-center'><button className='btn btn-xs btn-sm btn-md btn-lg w-50 btn-custom'>BUY NOW</button></div>
                                            </CardBody>
                                    </Card>
                            </div>
                            <div className='col-6 col-md-4'>
                                    <Card className='padding-custom mt-3'>
                                            <span className="make-pos-top font-20 font-700">MAR, 15</span>
                                            <CardImg top width="100%" src="https://www.pinclipart.com/picdir/big/142-1425977_nike-red-shoes-fabulous-nike-zoom-tra8n-command.png" alt="Card image cap" />
                                            <CardBody>
                                                <h1 className='font-500 text-center'>Hello World</h1>
                                                <p className='font-12 font-400 text-center'>lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum</p>
                                                <div className='text-center'><button className='btn btn-xs btn-sm btn-md btn-lg w-50'>BUY NOW</button></div>
                                            </CardBody>
                                    </Card>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Body;