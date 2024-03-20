import { Component } from "react";
import data from "../../services/api/main_product_data.json";
import Header from "../Header/Header";
import ProductShowcase from "../ProductShowcase/ProductShowcase";
import { ICartItem } from "@/types";
import toast from "react-hot-toast";
import { TFunction } from "i18next";

interface ProductProps {t:TFunction}

interface ProductState {
  cart: ICartItem[];
}

class WrapperComponent extends Component<ProductProps, ProductState> {
  constructor(props: ProductProps) {
    super(props);
    this.state = {
      cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart")!)
        : [],
    };
  }

  addToCart  = (product: ICartItem, increment: number = 1) => {
    const itemIndex = this.state.cart.findIndex(
      (item) => item.id === product.id
    );
    const newCart = [...this.state.cart];
    if (itemIndex >= 0) {
      newCart[itemIndex].cartQTY += increment;
      this.setState({ cart: newCart });
      toast.success(`Item Quantity Increased`);
    } else {
      const temp = { ...product, cartQTY: increment };
      newCart.push(temp);
      this.setState({ cart: newCart });
      toast.success(`${product.title} added to Cart`);
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  RemoveItemFromCart = (id: number) => {
    const FilteredItems = this.state.cart.filter((item) => item.id !== id);
    this.setState({ cart: FilteredItems });
    localStorage.setItem("cart", JSON.stringify(FilteredItems));
  };
  render() {
    const { cart } = this.state;
    const { t } = this.props;
    return (
      <>
        <Header
          t={t}
          RemoveItemFromCart={this.RemoveItemFromCart}
          cart={cart}
        />
        <ProductShowcase data={data} addToCart={this.addToCart} t={t} />
      </>
    );
  }
}

export default WrapperComponent;
