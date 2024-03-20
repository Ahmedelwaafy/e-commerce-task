import { ICartItem } from "@/types";
import RatingComponent from "./RatingComponent";

function ProductCard({ card }: { card: ICartItem }) {
  return (
    <div className="w-[270px] h-[440px] border border-[#ECECEC] rounded-[5px] hover:border-secondary-color trns p-2 group cursor-pointer mb-8">
      <div className="w-full h-[250px] relative rounded-sm overflow-hidden ">
        <img
          className="w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
          src={card?.images?.[0]?.src}
          alt={card?.title}
        />
        <button className="absolute top-2 left-2 p-1.5 bg-white rounded-[5px]">
          <img
            className="trns group-hover:rotate-[360deg] w-6"
            src="/images/vr.svg"
            alt="vr"
          />
        </button>{" "}
      </div>
      <h3
        title={card?.title}
        className="mt-3 font-semibold text-sm line-clamp-2 "
      >
        {card?.title}
      </h3>
      <div className="flex items-center justify-between w-full gap-4 rtl:flex-row-reverse">
        <div>
          <h5 className="font-semibold text-xl text-secondary-color mt-2 rtl:flex rtl:items-center rtl:flex-row-reverse">
            {card?.price} <sub className="font-medium">LE</sub>
          </h5>
          <div className="flex gap-3 mt-2 items-center rtl:flex-row-reverse">
            <span className="line-through text-[#A7A9AC] font-semibold text-sm !rtl:rtl">
              {card?.fake_price} LE
            </span>{" "}
            <span className="w-12 h-4 flex-center rounded-[3px] bg-primary-color font-semibold text-[10px] ">
              {card?.discount}
            </span>
          </div>
        </div>
        <img className="w-14" src={card?.logo} alt="logo" />
      </div>
      <div className="flex justify-center gap-3 mt-3 items-center rtl:flex-row-reverse">
        <RatingComponent small className="w-fit" defaultRating={card?.rate} />
        <h3 className="text-sm font-semibold">{card?.reviews} of 5</h3>
      </div>
      <p className="text-[10px] text-center mt-2">
        Pickup From:{" "}
        <span className="font-semibold text-[12px] ">Genena Mall</span>
      </p>
    </div>
  );
}

export default ProductCard;
