import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import CartItem from "./CartItem";
import { ICartItem } from "@/types";

function Cart({
  cart,
  totalAmount,
  RemoveItemFromCart,
}: {
  cart: ICartItem[];
  totalAmount: number;
  RemoveItemFromCart: (id: number) => void;
}) {
  return (
    <aside className="w-full">
      <p className="text-lg font-semibold mt-6">Cart Summary</p>
      <ScrollArea className="h-[150px] w-full  mt-6 ">
        <div className="   flex-col flex gap-5 ">
          {cart?.map((item: ICartItem) => (
            <CartItem
              RemoveItemFromCart={RemoveItemFromCart}
              item={item}
              key={item.id}
            />
          ))}{" "}
        </div>
      </ScrollArea>
      <h3 className="mb-6 mt-10 font-semibold text-center text-2xl">
        Total: {totalAmount?.toFixed(2)} LE
      </h3>
      <div className="cart_options flex w-full justify-between gap-4">
        <button className="font-semibold text-sm text-center h-12 bg-primary-color rounded-3xl w-1/2">
          Review Cart
        </button>
        <button className="font-semibold text-sm text-center h-12 bg-secondary-color rounded-3xl w-1/2 text-white">
          Review Cart
        </button>
      </div>
    </aside>
  );
}

export default Cart;
