import styles from "./SimilarProductS.module.scss";
import { SwiperOptions } from "swiper/types";
import { register } from "swiper/element/bundle";
register();
import { useEffect, useRef } from "react";
import data from "../../services/api/similar_products_data.json";
import ProductCard from "../ProductCard";

function SimilarProductS({ t }: { t: TFunction }) {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperParams: SwiperOptions = {
      speed: 1500,
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
      },
      scrollbar: {},
      centerInsufficientSlides: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      freeMode: {
        enabled: true,
        momentum: true,
        sticky: false,
      },
      breakpoints: {
       
        650: {
          slidesPerView: 2,
        },
        990: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    };
    if (data?.length > 0) {
      Object.assign(swiperElRef?.current, swiperParams);
    }
    if (data) {
      swiperElRef?.current?.initialize();
    }
  }, [data]);

  return (
    <section className={`site_container mt-16 ${styles.test}`}>
      <h2 className="text-secondary-color font-semibold text-3xl lg:text-center">
        {t("SimilarProductS.Similar")}
      </h2>
      <h3 className="text-xl text-[#575756] font- mt-2 lg:text-center">
        {" "}
        {t("SimilarProductS.products")}
      </h3>{" "}
      <div className="similar_slider h-auto w-full  my-10">
        <swiper-container init={false} ref={swiperElRef}>
          {data?.map((card) => (
            <swiper-slide key={card?.id}>
              <div className="w-full flex-center">

              <ProductCard key={card?.id} card={card} />
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
}

export default SimilarProductS;
