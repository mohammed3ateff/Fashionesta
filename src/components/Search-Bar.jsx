import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="flex flex w-full justify-between bg-[#65666b] text-[wheat] items-center px-[15px]  lg:px-[100px] py-[15px]">
      <Link to="/" className="text-3xl mb-2 lg:mb-0">
        Fashion
      </Link>
      <div className="flex lg:flex-1 w-full md:ml-[30px] lg:ml-[100px] relative items-center justify-end	">
        <input
          className="w-[90%]  p-[15px] rounded-lg focus:outline-none	text-[15px] text-[black] hidden lg:block"
          type="text"
          placeholder="Search here"
        />
        <i className=" cursor-pointer absolute text-xl text-[#65666b] -translate-y-2/4 right-[95px] top-2/4 hidden lg:block">
          <FaSearch />
        </i>
        <Link
          to="Cart"
          className="text-[40px] ml-[30px] cursor-pointer relative "
        >
          {cart.length > 0 && (
            <span className="absolute text-sm rounded-full bg-red-500 w-5 h-5 flex items-center justify-center p-2 right-0 top-0">
              {cart.length}
            </span>
          )}
          <IoCartOutline />
        </Link>
      </div>
    </div>
  );
}
