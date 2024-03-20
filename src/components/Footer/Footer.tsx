import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3C3C3B] pt-12">
      <div className={`site_container  ${styles.footer}`}>
        <div className="footer__left w-1/2">
          <Link to="">
            <img src="/images/logo_yellow.svg" alt="logo_yellow" />
          </Link>
          <h6 className="text-white mt-7 text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            <br />
            <br />
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia m
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            <br />
            <br />
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit
          </h6>
        </div>
        <div className="bg-white/30  h-96 w-px mx-12" />
        <div className="footer__right w-1/2 ">
          <h5 className="text-white">Subscribe to our newsletter</h5>
          <form className="bg-white relative  h-12 w-full rounded-[24px] mt-5">
            <input
              type="text"
              placeholder="Enter Your Mail"
              className="w-full border-none outline-none shadow-[0_0_0_1px] shadow-primary-color trns focus:shadow-[0_0_0_5px] h-full rounded-[24px] px-4 placeholder:text-xs placeholder:font-medium placeholder:opacity-60
              "
            />
            <button
              type="submit"
              className="text-[11px] font-semibold bg-primary-color rounded-[19px] flex-center gap-2 w-[120px] h-[38px] absolute right-1 top-1/2 -translate-y-1/2 group "
            >
              Subscribe{" "}
              <img
                className="group-hover:translate-x-1.5 group-hover:-translate-y-1.5 trns"
                src="/images/envelope.svg"
                alt="envelope-icon"
              />
            </button>
          </form>
          <div className="flex justify-between  w-full gap-5 mt-7">
            <ul className="flex-col flex gap-3 text-white">
              <li>
                <Link className="trns hover:opacity-70" to="">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="trns hover:opacity-70" to="">
                  Contact Us{" "}
                </Link>
              </li>
              <li>
                <Link className="trns hover:opacity-70" to="">
                  Track Order{" "}
                </Link>
              </li>
              <li>
                <Link className="trns hover:opacity-70" to="">
                  Terms & Conditions{" "}
                </Link>
              </li>
              <li>
                <Link className="trns hover:opacity-70" to="">
                  Privacy Policy{" "}
                </Link>
              </li>
              <li>
                <Link className="trns hover:opacity-70" to="">
                  Sell With Us{" "}
                </Link>
              </li>
              <li>
                <Link className="trns hover:opacity-70" to="">
                  Shipping And Returns{" "}
                </Link>
              </li>
            </ul>
            <div className="bg-white/30  h-60 w-px " />
            <ul className="flex-col flex gap-3 text-white">
              <li>
                <Link
                  className="trns hover:opacity-70 flex-center gap-2.5"
                  to=""
                >
                  <img src="/images/meta.svg" alt="" />
                  /YESHTERY{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="trns hover:opacity-70 flex-center gap-2.5"
                  to=""
                >
                  <img src="/images/linkedin.svg" alt="" />
                  /YESHTERY{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="trns hover:opacity-70 flex-center gap-2.5"
                  to=""
                >
                  <img src="/images/instagram.svg" alt="" />
                  /YESHTERY{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="trns hover:opacity-70 flex-center gap-2.5"
                  to=""
                >
                  <img src="/images/twitter.svg" alt="" />
                  /YESHTERY{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white/30  w-full h-px mt-5" />
      <div className="footer__bottom py-5 site_container text-white flex justify-between items-center">
        <p>© {currentYear} yeshtery, all rights reserved.</p>
        <div className="footer__bottom--mid flex-center gap-3">
          <img className="h-10 w-auto+" src="/images/cash.png" alt="cash" />
          <img className="h-10 w-auto+" src="/images/visa.png" alt="visa" />
          <img
            className="h-10 w-auto+"
            src="/images/mastercard.png"
            alt="mastercard"
          />
        </div>
        <div className="flex-center gap-1">
          Powered By
          <a href="">
            <img
              className="h-5 w-auto+"
              src="/images/nasnav.svg"
              alt="nasnav"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
