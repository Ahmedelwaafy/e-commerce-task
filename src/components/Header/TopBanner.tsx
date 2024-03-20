import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TFunction } from "i18next";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
function TopBanner({ t }: { t: TFunction }) {
  return (
    <div className={`fade-in ${styles.top__banner}`}>
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
                    <li>{t("menu.Men")} </li>
                  </SheetClose>
                  <SheetClose>
                    <li>{t("menu.Women")} </li>
                  </SheetClose>
                  <SheetClose>
                    <li>{t("menu.Kids")} </li>
                  </SheetClose>
                  <SheetClose>
                    <li>{t("menu.Sports")} </li>
                  </SheetClose>
                  <SheetClose>
                    <li>{t("menu.Electronics")} </li>
                  </SheetClose>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>{" "}
        <img className={styles.logo} src="/images/logo.svg" alt="logo" />
        <div className="flex gap-3 ml-24 xxl:hidden">
          <img
            className="rtl:rotate-180"
            src="/images/small__arrow.svg"
            alt="small__arrow__icon"
          />
          <div className="text-sm  ">
            {t("banner.txt")}{" "}
            <Link
              to=""
              className="underline font-semibold underline-offset-2 hover:underline-offset-4 trns animate-pulse"
            >
              {t("banner.cta")}
            </Link>
          </div>
          <img
            className="rotate-180 rtl:rotate-0"
            src="/images/small__arrow.svg"
            alt="small__arrow__icon"
          />
        </div>
        <Link to="" className="gap-2.5 flex-center text-sm font-bold lg:hidden">
          <img className="w-5 " src="/images/mobile.svg" alt="mobile-icon" />
          {t("banner.Contact")}
        </Link>
        <Link to="" className="gap-2.5 flex-center text-sm font-bold ss:hidden">
          <img className="w-5 " src="/images/order.svg" alt="order-icon" />
          {t("banner.Track")}
        </Link>
        <Link to="" className="gap-2.5 flex-center text-sm font-bold">
          <img className="w- " src="/images/location.svg" alt="location-icon" />
          {t("banner.Find")}
        </Link>
      </div>
    </div>
  );
}

export default TopBanner;
