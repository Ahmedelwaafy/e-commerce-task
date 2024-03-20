import { useTranslation } from "react-i18next";
import Breadcrumbs from "../Breadcrumbs";
import Navbar from "./Navbar";
import TopBanner from "./TopBanner";
import { TFunction } from "i18next";

function Header({
  cart,
  RemoveItemFromCart,
  t,
}: {
  cart: any;
  RemoveItemFromCart: (id: number) => void;
  t: TFunction;
}) {
  return (
    <>
      <TopBanner t={t} />
      <Navbar RemoveItemFromCart={RemoveItemFromCart} cart={cart} />
      <Breadcrumbs
        t={t}
        pathnames={[
          t("pathnames.Men"),
          t("pathnames.Clothing"),
          t("pathnames.Tops"),
          t("pathnames.Adidas"),
          t("pathnames.name"),
        ]}
      />
    </>
  );
}

export default Header;
