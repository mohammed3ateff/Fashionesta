import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../rtk/slices/category-slice";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CategoriesList() {
  const {
    data: categories,
    loading,
    error,
  } = useSelector((state) => state.categories);
  console.log(categories);

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (loading) {
    return (
      <div className="min-h-[100svh] flex items-center justify-center">
        <div className=" border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!categories) {
    return null;
  }

  return (
    <div>
      <div
        onClick={toggleDropdown}
        className="cursor-pointer flex items-center justify-between"
      >
        <h1>Categories</h1>
        <span>
          <MdOutlineArrowDropDown />
        </span>
      </div>
      {isOpen && (
        <ul className="ml-5">
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/categories-filter?category=${category.id}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
