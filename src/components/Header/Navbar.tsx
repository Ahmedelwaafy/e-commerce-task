import { Player } from "@lottiefiles/react-lottie-player";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { lazy, Suspense } from "react";
const LazyCart = lazy(() => import("../Cart/Cart.tsx"));

function Navbar({
  cart,
  RemoveItemFromCart,
}: {
  cart: [];
  RemoveItemFromCart: (id: number) => void;
}) {
  let { totalAmount, totalQTY } = cart.reduce(
    (cartTotal, cartItem) => {
      const { price, cartQTY } = cartItem;
      const totalPrice = price * cartQTY;

      cartTotal.totalAmount += totalPrice;
      cartTotal.totalQTY += cartQTY;

      return cartTotal;
    },
    {
      totalAmount: 0,
      totalQTY: 0,
    }
  );
  return (
    <nav>
      <div className={`site_container ${styles.Navbar} `}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className={` px-12  trns  outline-none peer ${styles.Navbar__search}`}
          />

          <img
            className="absolute left-4 top-1/2 -translate-y-1/2 trns peer-focus:-translate-x-3 peer-focus:opacity-0"
            src="/images/search.svg"
            alt="search-icon"
          />
        </div>
        <img className="" src="/images/adidas.svg" alt="adidas-icon" />
        <div className="flex gap-8">
          <Sheet>
            <SheetTrigger>
              <div className="gap-2.5 flex-center text- font-bold hover:animate-bounce">
                <div className="relative">
                  <img className=" " src="/images/cart.svg" alt="cart-icon" />
                  <span className="absolute -top-1 -right-2 rounded-full w-4 aspect-square flex-center bg-primary-color text-[9px]">
                    {totalQTY}
                  </span>
                </div>
                Cart
              </div>
            </SheetTrigger>
            <SheetContent side="right" className=" w-[475px] !max-w-full ">
              <SheetHeader className="font-semibold text-[28px] text-secondary-color flex-center w-full mt-4">
                My Cart
              </SheetHeader>

              {cart?.length === 0 ? (
                <div className="flex-col gap-3">
                  <p className="text-sm text-balance text-center opacity-70 mt-3">
                    Your cart is empty, hurry up and add products to your cart
                    now!
                  </p>
                  <div className=" ">
                    <Player
                      src="https://assets4.lottiefiles.com/packages/lf20_qh5z2fdq.json"
                      style={{ height: "400px", width: "300px" }}
                      loop
                      autoplay
                    />
                  </div>
                  <button className="flex-center w-full">
                    <SheetClose className="">Back To Store</SheetClose>
                  </button>
                </div>
              ) : (
                <>
                  <Suspense fallback={<p>loading...</p>}>
                    <LazyCart
                      cart={cart}
                      totalAmount={totalAmount}
                      RemoveItemFromCart={RemoveItemFromCart}
                    />
                  </Suspense>{" "}
                </>
              )}
            </SheetContent>
          </Sheet>{" "}
          <Link
            to=""
            className="gap-2.5 flex-center text- font-bold hover:animate-bounce"
          >
            <img
              className="w- "
              src="/images/wishlist.svg"
              alt="wishlist-icon"
            />
            Wishlist
          </Link>
          <Link
            to=""
            className="gap-2.5 flex-center text- font-bold hover:animate-bounce"
          >
            <img className="w- " src="/images/user.svg" alt="user-icon" />
            Login
          </Link>
        </div>
      </div>
      <div className={styles.bottom__nav__menu}>
        <ul className="site_container">
          <li>
            <NavLink to="">Men</NavLink>
          </li>
          <li>
            <NavLink to="">Women</NavLink>
          </li>
          <li>
            <NavLink to="">Unisex</NavLink>
          </li>
          <li>
            <NavLink to="">Kids</NavLink>
          </li>
          <li>
            <NavLink to="">Best Sellers</NavLink>
          </li>
          <li>
            <NavLink to="">New Arrivals</NavLink>
          </li>

          <li className="!text-[#F11133]">
            <NavLink to="">Offers</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
