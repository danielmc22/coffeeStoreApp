import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import '../Styles/carousel.css'
import productActions from "../redux/actions/productActions";
import { Autoplay, Pagination, Navigation, Grid } from "swiper";



function Carousel(props) {
 

    useEffect(()=>{
    },[])

  return (

    <>

    <Swiper 
        slidesPerView={1}
        grid={{
          rows:1
        }}
        slidesPerGroup={8}
        
        spaceBetween={10}
      
        autoplay={{
          delay: 6400,
          disableOnInteraction: true
        }}


        modules={[Autoplay, Pagination, Navigation, Grid]}
        className="mySwiper"
      >
      {images.map(image => 
      
        <SwiperSlide className="SwiperSlide">  
            <img className="imgCarousel" src={image}/>
        </SwiperSlide>
        
        )}
    </Swiper>

    </>

  );
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.productReducer.allProducts,
    filtered: state.productReducer.filtered,
  }
}

const mapDispatchToProps = {
  filter: productActions.filter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)