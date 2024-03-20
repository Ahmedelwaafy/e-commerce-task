import { ICartItem } from "@/types";
import { Component } from "react";
import RatingComponent from "../RatingComponent";
import ItemSlider from "./ItemSlider";
import styles from "./ProductShowcase.module.scss";

interface ProductShowcaseProps {
  data: ICartItem;
  addToCart: (x: ICartItem, increment: number) => void;
}

interface ProductShowcaseState {
  increment: number;
}

class ProductShowcase extends Component<
  ProductShowcaseProps,
  ProductShowcaseState
> {
  constructor(props: ProductShowcaseProps) {
    super(props);
    this.state = {
      increment: 1,
    };
  }
  increase = () => {
    this.setState({ increment: this.state.increment + 1 });
  };
  decrease = () => {
    this.setState({ increment: this.state.increment - 1 });
  };
  render() {
    const { data, addToCart } = this.props;

    return (
      <section className={`mt-10 site_container ${styles.ProductShowcase}`}>
        <div className="ProductShowcase__left w-[48%] ">
          <ItemSlider data={data?.images} />
        </div>
        <div className={styles.ProductShowcase__right}>
          <img className="w-[60px]" src={data?.logo} alt={data?.title} />
          <h1>{data?.title}</h1>
          <h2>{data?.category}</h2>
          <div className="flex items-center gap-4 mt-4">
            <RatingComponent className="w-fit" defaultRating={data?.rate} />{" "}
            <h3>{data?.reviews} of 5</h3>
            <h4>{data?.rate_count} Rates</h4>
          </div>
          <div className="flex items-center gap-6 mt-2">
            <h5>
              {data?.price} <sub className="font-medium">LE</sub>
            </h5>
            <span className="line-through text-[#A7A9AC] font-semibold">
              {data?.fake_price} LE
            </span>
            <span className="w-20 h-7 flex-center rounded-[3px] bg-primary-color font-semibold text-sm">
              {data?.discount} off
            </span>
          </div>
          <div className="divider h-px bg-[#ECECEC] w-full my-5 rounded-full"></div>
          <h6>Size</h6>
          <div className="sizes flex gap-4 mt-4">
            {data?.sizes?.map((size, i) => (
              <div
                key={i}
                className={`w-[60px] aspect-square rounded-full flex-center text-secondary-color text-[10px] font-semibold trns hover:bg-[#ECECEC] hover:scale-95 border-2 border-[#ECECEC] cursor-pointer ${
                  i === 2 ? "bg-[#ECECEC]" : ""
                }`}
              >
                {size}
              </div>
            ))}
          </div>
          <div className="divider h-px bg-[#ECECEC] w-full my-5 rounded-full"></div>
          <h6>Color</h6>
          <div className="colors flex gap-4 mt-4">
            <img
              className="w-[80px] aspect-square rounded-full border-2 border-secondary-color cursor-pointer trns hover:scale-105"
              src="/images/main_product_img_1.png"
              alt="img-1"
            />
            <img
              className="w-[80px] aspect-square rounded-full border-2 border-primary-color cursor-pointer object-cover trns hover:scale-105"
              src="/images/yellow_shirt.jpg"
              alt="img-1"
            />
          </div>
          <div className="divider h-px bg-[#ECECEC] w-full my-5 rounded-full"></div>
          <h6>Quantity</h6>
          <div className="flex items-center justify-between gap-4 mt-4 w-[250px] h-12  bg-[#F5F5F5] border border-[#D9D9D9] rounded-[24px] p-1">
            <button
              disabled={this.state.increment === 1}
              onClick={() => this.decrease()}
              className="bg-primary-color rounded-full aspect-square w-9 flex-center disabled:cursor-not-allowed disabled:opacity-50"
            >
              <img src="/images/minus.svg" alt="minus-icon" />
            </button>
            <span className="font-semibold"> {this.state.increment}</span>
            <button
              onClick={() => this.increase()}
              className="bg-primary-color rounded-full aspect-square w-9 flex-center "
            >
              <img src="/images/plus.svg" alt="plus-icon" />
            </button>
          </div>
          <div className="options flex w-full justify-start gap-8 mt-7">
            <button
              onClick={() => addToCart(data, this.state.increment)}
              className="font-semibold text-sm text-center w-[250px] h-14 bg-secondary-color rounded-[27px]  text-white  "
            >
              Add To Cart{" "}
            </button>
            <button className="font-semibold text-sm text-center w-[250px] h-14 bg-primary-color rounded-[27px] ">
              Pickup From Store
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductShowcase;
