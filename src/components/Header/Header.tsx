import React from "react";
import TopBanner from "./TopBanner";
import Navbar from "./Navbar";
import Breadcrumbs from "../Breadcrumbs";

function Header({
  cart,
  RemoveItemFromCart,
}: {
  cart: any;
  RemoveItemFromCart: (id: number) => void;
}) {
  return (
    <>
      <TopBanner />
      <Navbar RemoveItemFromCart={RemoveItemFromCart} cart={cart} />
      <Breadcrumbs
        pathnames={[
          "Men",
          "Clothing",
          "Tops",
          "Adidas",
          "Adidas Black T-Shirt",
        ]}
      />
    </>
  );
}

export default Header;
