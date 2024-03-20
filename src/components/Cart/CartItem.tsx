import { ICartItem } from "@/types";
import styles from "./cart.module.scss";

function CartItem({
  item,
  RemoveItemFromCart,
}: {
  item: ICartItem;
  RemoveItemFromCart: (id: number) => void;
}) {
  return (
    <div className={styles.CartItem}>
      <picture className={styles.CartItem_img}>
        <source
          className="h-full object-cover rounded-[7px] bg-gray-200"
          srcSet={item?.images?.[0]?.src}
        />
        <img
          className="h-full object-cover rounded-[7px] bg-gray-200"
          src={item?.images?.[0]?.src}
          alt={item?.title}
        />
      </picture>
      <div className={styles.CartItem_details}>
        <div>
          <h3 title={item?.title} className="text-sm  line-clamp-2 w-full ">
            {item?.title}
          </h3>
        </div>
        <h4 className="text-[11px] ">Quantity: {item?.cartQTY}</h4>
        <h5 className="text-xl text-secondary-color">
          {item?.price} <sub>LE</sub>
        </h5>
      </div>
      <button
        onClick={() => RemoveItemFromCart(item?.id)}
        className="bg-red-400 absolute w-20 h-6 rounded-xl active:scale-90 trns border-2 border-red-400 hover:text-red-400 hover:bg-transparent font-semibold text-[10px] bottom-4 right-4 text-white"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
