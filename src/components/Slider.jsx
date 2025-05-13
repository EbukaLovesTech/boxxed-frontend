import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Autoplay} from 'swiper/modules';


export default ({data}) => {
    return (
      <a>
        <Swiper
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {data.map((item)=> (
          <div key={item.id}>
            <SwiperSlide>
              <div>
                
                <img src='https://res.cloudinary.com/djvdendlh/image/upload/v1743370342/gratisography-cool-pineapple-free-stock-photo_o9m0wn.png' alt=''/>
                <p className='slide_details'>
                  <span className='tag'>{item.category}</span>
                  {/* <span>{item.published_date}</span> */}
                </p>
                <h4>{item.title}</h4>
              </div>
            </SwiperSlide>
          </div>
        ))
      }
      </Swiper>
      </a>
    );
  };