import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteFromWishlist,
  updateQuantity,
} from "../rtk/slices/wishlist-slice";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishList);
  const dispatch = useDispatch();
  const totalPrice = wishlist.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  const totalItems = wishlist.reduce((acc, product) => {
    acc += product.quantity;
    return acc;
  }, 0);
  const handleQuantityChange = (product, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
    }
  };

  return (
    <>
      <div className="container mx-auto mt-10 mt-[75px] ">
        <div className="sm:flex shadow-md my-10 border-black border">
          <div className="w-full mx-auto sm:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl flex items-center ">
                Favorites List{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>{" "}
              </h1>
              <h2 className="font-semibold text-2xl">{totalItems} Items</h2>
            </div>
            {wishlist.map((product, index) => (
              <div
                key={index}
                className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50"
              >
                <div className="md:w-4/12 2xl:w-1/4 w-full">
                  <img
                    src={product.thumb}
                    alt={product.name}
                    className="h-full object-center object-cover md:block hidden"
                  />
                  <img
                    src={product.thumb}
                    alt={product.name}
                    className="md:hidden w-full h-full object-center object-cover"
                  />
                </div>
                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                  <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                    RF293
                  </p>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-base font-black leading-none text-gray-800">
                      {product.name}
                    </p>

                    <div>
                      <span
                        className="cursor-pointer p-5"
                        onClick={() => {
                          handleQuantityChange(product, product.quantity - 1);
                        }}
                      >
                        -
                      </span>
                      <span className="p-2 border border-gray-200 rounded-full ">
                        {product.quantity}
                      </span>
                      <span
                        className="cursor-pointer p-5"
                        onClick={() => {
                          handleQuantityChange(product, product.quantity + 1);
                        }}
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <p className="text-xs leading-3 text-gray-600 pt-2">
                    Height: 10 inches
                  </p>
                  <p className="text-xs leading-3 text-gray-600 py-4">
                    Color: Black
                  </p>
                  <p className="w-96 text-xs leading-3 text-gray-600">
                    Composition: 100% calf leather
                  </p>
                  <div className="flex items-center justify-between pt-5">
                    <div className="flex itemms-center">
                      <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                        Add to cart
                      </p>
                      <p
                        onClick={() => dispatch(deleteFromWishlist(product))}
                        className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                      >
                        Remove
                      </p>
                    </div>
                    {product.quantity > 1 ? (
                      <div className="text-center">
                        <p className="text-base font-black leading-none text-gray-800 mb-2">
                          {product.quantity} * {product.price}$
                        </p>
                        <p className="text-base font-black leading-none text-gray-800">
                          total: {product.quantity * product.price}$
                        </p>
                      </div>
                    ) : (
                      <p className="text-base font-black leading-none text-gray-800">
                        {product.price}$
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <Link
              to="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>
          {/* <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {totalItems}{" "}
              </span>
              <span className="font-semibold text-sm">{totalPrice}$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${totalPrice + 10}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
