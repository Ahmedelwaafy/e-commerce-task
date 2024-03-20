import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { SwiperOptions } from "swiper/types";
register();
interface IItemSliderProps {
  data: { id: number; src: string }[];
  className?: string;
}
function ItemSlider({ data, className }: IItemSliderProps) {
  const swiperElRefMain = useRef(null);
  const swiperElRefThumbs = useRef(null);

  useEffect(() => {
    const commonSwiperParams: SwiperOptions = {
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      loop: true,
      a11y: {
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
      },
      zoom: {
        maxRatio: 5,
      },
    };
    const MainSwiperParams: SwiperOptions = {
      ...commonSwiperParams,
      slidesPerView: 1,
      speed: 1500,
      effect: "coverflow",
      coverflowEffect: {
        slideShadows: false,
      },
      thumbs: {
        swiper: swiperElRefThumbs?.current,
      },
    };
    const ThumbsSwiperParams: SwiperOptions = {
      ...commonSwiperParams,
      spaceBetween: 15,
      speed: 500,
      freeMode: {
        enabled: true,
        momentum: true,
        sticky: false,
      },
      watchSlidesProgress: true,
      breakpoints: {
        300: {
          slidesPerView: data.length > 1 ? 2 : data.length,
        },
        768: {
          slidesPerView: data.length > 2 ? 3 : data.length,
        },
        990: {
          slidesPerView: data.length > 3 ? 4 : data.length,
        },
      },
    };
    Object.assign(swiperElRefMain?.current, MainSwiperParams);
    if (data?.length > 1) {
      Object.assign(swiperElRefThumbs?.current, ThumbsSwiperParams);
    }

    if (data) {
      swiperElRefMain?.current?.initialize();
      swiperElRefThumbs?.current?.initialize();
    }
  }, [data, data?.length]);

  return (
    <div className={cn(`slider w-full h-auto  bg-`, className)}>
      <div className="ItemSlider__top--slider w-full bg-  min-h-fit lg:w-full mb- px-1.5 relative">
        <swiper-container
          //thumbs-swiper=".ItemSlider__thumbs-slider"
          init={false}
          ref={swiperElRefMain}
        >
          {data?.map((card) => (
            <swiper-slide key={card?.id}>
              <div
                className={`img-slider-wrapper w-full aspect-square max-h-[600px]  overflow-hidden   cursor-pointer  relative group`}
              >
                <img
                  className="w-full h-full object-cover  "
                  src={card?.src}
                  alt={card?.src}
                />
                <button className="absolute top-6 left-6 p-2 bg-white rounded-[7px]">
                  <img
                    className="trns group-hover:rotate-[360deg]"
                    src="/images/vr.svg"
                    alt="vr"
                  />
                </button>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>

      <div className="ItemSlider__bottom-slider flex justify-between relative  mt-3">
        {data?.length > 4 && (
          <button
            onClick={() => {
              swiperElRefThumbs?.current?.swiper?.slideNext();
            }}
            className="swiper-button-next  rotate-180"
          >
            <img src="/images/big_arrow.svg" alt="big_arrow-icon" />
          </button>
        )}
        <div className="w-11/12 ">
          {" "}
          {data?.length > 1 && (
            <swiper-container init={false} ref={swiperElRefThumbs}>
              {data?.map((card) => (
                <swiper-slide key={card?.id}>
                  <div className="flex-center mx-">
                    <div className="  slide__img--wrapper aspect-square  w-[120px]   cursor-pointer opacity-80  trns border-2 border-transparent p-1  overflow-hidden shrink0 rounded-[12px]">
                      <img
                        className="w-full h-full object-cover "
                        src={card?.src}
                        alt={card?.src}
                      />
                    </div>
                  </div>
                </swiper-slide>
              ))}
            </swiper-container>
          )}
        </div>

        {data?.length > 4 && (
          <button
            onClick={() => {
              swiperElRefThumbs?.current?.swiper?.slidePrev();
            }}
            className="  "
          >
            <img
              className=" "
              src="/images/big_arrow.svg"
              alt="big_arrow-icon"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemSlider;
