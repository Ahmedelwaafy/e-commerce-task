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
import { useTranslation } from "react-i18next";
const LazyCart = lazy(() => import("../Cart/Cart.tsx"));

function Navbar({
  cart,
  RemoveItemFromCart,
}: {
  cart: [];
  RemoveItemFromCart: (id: number) => void;
}) {
  const { t, i18n } = useTranslation("home");

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
  const lng = i18n.language;
  function changeLanguage(lang: string) {
    if (lng !== lang) {
      i18n.changeLanguage(lang);
      window.location.replace(window.location.href.replace(lng, lang));
    }
  }
  return (
    <nav>
      <div className={`site_container ${styles.Navbar} `}>
        <div className="relative">
          <input
            type="text"
            placeholder={t("Navbar.input_placeholder")}
            className={` px-12  trns  outline-none peer lg:w-60 ss:w-40 ${styles.Navbar__search}`}
          />

          <img
            className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 trns peer-focus:-translate-x-3 rtl:peer-focus:translate-x-3 peer-focus:opacity-0"
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
                {t("Navbar.Cart")}
              </div>
            </SheetTrigger>
            <SheetContent side="right" className=" w-[475px] !max-w-full ">
              <SheetHeader className="font-semibold text-[28px] text-secondary-color flex-center w-full mt-4">
                {t("Navbar.My_Cart")}
              </SheetHeader>

              {cart?.length === 0 ? (
                <div className="flex-col gap-3">
                  <p className="text-sm text-balance text-center opacity-70 mt-3">
                    {t("Navbar.empty_Cart")}
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
                    <SheetClose className=""> {t("Navbar.Back")}</SheetClose>
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
            className="gap-2.5 flex-center text- font-bold hover:animate-bounce xl:hidden"
          >
            <img
              className="w- "
              src="/images/wishlist.svg"
              alt="wishlist-icon"
            />
            {t("Navbar.Wishlist")}
          </Link>
          <Link
            to=""
            className="gap-2.5 flex-center text- font-bold hover:animate-bounce lg:hidden"
          >
            <img className="w- " src="/images/user.svg" alt="user-icon" />
            {t("Navbar.Login")}
          </Link>
          <div className="flex gap-1 lg:hidden">
            <button
              className={`trns hover:opacity-100  ${
                lng === "en" ? "font-bold " : "opacity-70"
              }`}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
            /
            <button
              className={`trns hover:opacity-100  ${
                lng === "ar" ? "font-bold " : "opacity-70"
              }`}
              onClick={() => changeLanguage("ar")}
            >
              AR
            </button>
          </div>
        </div>
      </div>
      <div className={styles.bottom__nav__menu}>
        <ul className="site_container">
          <li>
            <NavLink to="">{t("menu.Men")}</NavLink>
          </li>
          <li>
            <NavLink to="">{t("menu.Women")}</NavLink>
          </li>
          <li>
            <NavLink to="">{t("menu.Unisex")}</NavLink>
          </li>
          <li>
            <NavLink to="">{t("menu.Kids")}</NavLink>
          </li>
          <li className="lg:hidden">
            <NavLink to="">{t("menu.Best")}</NavLink>
          </li>
          <li className="lg:hidden">
            <NavLink to="">{t("menu.New")}</NavLink>
          </li>

          <li className="!text-[#F11133]">
            <NavLink to="">{t("menu.Offers")}</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
