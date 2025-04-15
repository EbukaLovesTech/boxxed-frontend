import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

export default ({data}) => {
    return (
      <a>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item)=> (
          <div key={item.id}>
            <SwiperSlide>
              <div>
                <img src='https://res.cloudinary.com/djvdendlh/image/upload/v1743370342/gratisography-cool-pineapple-free-stock-photo_o9m0wn.png' alt=''/>
                <h4>{item.title}</h4>
                <p className='slide_details'>
                  <span>{item.category}</span>
                  {/* <span>{item.published_date}</span> */}
                </p>
              </div>
            </SwiperSlide>
          </div>
        ))
      }
      </Swiper>
      </a>
    );
  };