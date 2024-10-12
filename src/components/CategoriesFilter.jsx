import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../rtk/slices/category-slice";
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Products from "./Products";

export default function CategoriesFilter() {
  const {
    data: categories,
    loading,
    error,
  } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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

  const handleCategoryClick = (category) => {
    setSearchParams({ category: category.id });
  };

  return (
    <>
      <div className="p-5 flex flex-col items-center justify-center">
        <div className="mt-[100px] text-4xl">Categories</div>
        <ul className="mt-8 flex gap-[30px] items-center justify-center">
          {categories.map((category, index) => (
            <li
              key={index}
              className="text-2xl cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <Products />
    </>
  );
}
