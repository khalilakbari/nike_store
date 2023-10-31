import React, { useEffect } from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/cartempty";
import CartItem from "./cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartState,
  selectTotalAmount,
  selectcartItems,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals,
} from "../app/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectcartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(setCloseCart({ cartState: false }));
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 
       blur-effect-theme w-full h-screen opacity-100 z-[250] ${
         ifCartState
           ? "opacity-100 visible translate-x-0"
           : "opacity-20 invisible translate-x-[85%]"
       }`}>
        <div
          className={`blur-effect-theme w-full h-screen max-w-xl absolute right-0`}>
          <CartCount
            totalQTY={totalQTY}
            onCartToggle={onCartToggle}
            onClearCartItems={onClearCartItems}
          />
          {cartItems.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div
                className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll
                 scroll-smooth scroll-hidden h-[81vh] py-3">
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>
            </div>
          )}
          <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold uppercase">SubTotal</h3>
              <h3 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
               {totalAmount}
              </h3>
            </div>
            <div className="grid items-center gap-2">
              <p className="text-sm font-medium text-center">
                Taxe Will Calculate At Shopping
              </p>
              <button
                type="button"
                className="button-theme bg-theme-cart text-white">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
