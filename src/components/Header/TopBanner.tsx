import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
function TopBanner() {
  return (
    <div className={styles.top__banner}>
      <div className={`site_container ${styles.top__banner__menu} `}>
        <Sheet>
          <SheetTrigger>
            <img
              className={`${styles.burger} trns`}
              src="/images/burger.svg"
              alt="burger-icon"
            />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="cursor-pointer">
                {" "}
                <img src="/images/logo.svg" alt="logo" />
              </SheetTitle>
              <SheetDescription>
                <ul className={styles.side__menu}>
                  <SheetClose>
                    <li>Men </li>
                  </SheetClose>
                  <SheetClose>
                    <li>Women </li>
                  </SheetClose>
                  <SheetClose>
                    <li>Kids </li>
                  </SheetClose>
                  <SheetClose>
                    <li>Sports & fitness </li>
                  </SheetClose>
                  <SheetClose>
                    <li>Electronics </li>
                  </SheetClose>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>{" "}
        <img className={styles.logo} src="/images/logo.svg" alt="logo" />
        <div className="flex gap-3 ml-24">
          <img src="/images/small__arrow.svg" alt="small__arrow__icon" />
          <div className="text-sm ">
            Valentine’s Day Offers! Buy Two Get One Free{" "}
            <Link
              to=""
              className="underline font-semibold underline-offset-2 hover:underline-offset-4 trns animate-pulse"
            >
              Shop Now
            </Link>
          </div>
          <img
            className="rotate-180"
            src="/images/small__arrow.svg"
            alt="small__arrow__icon"
          />
        </div>
        <Link to="" className="gap-2.5 flex-center text-sm font-bold">
          <img className="w-5 " src="/images/mobile.svg" alt="mobile-icon" />
          Contact Us
        </Link>
        <Link to="" className="gap-2.5 flex-center text-sm font-bold">
          <img className="w-5 " src="/images/order.svg" alt="order-icon" />
          Track Order{" "}
        </Link>
        <Link to="" className="gap-2.5 flex-center text-sm font-bold">
          <img className="w- " src="/images/location.svg" alt="location-icon" />
          Find A Store{" "}
        </Link>
      </div>
    </div>
  );
}

export default TopBanner;
