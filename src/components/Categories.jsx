import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../rtk/slices/category-slice";

export default function Categories() {
  // const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const {
    data: categories,
    loading,
    error,
  } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

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
    <div className="shadow-[0px_4px_11px_0px_#00000045] px-[100px] hidden lg:block ">
      <ul className="flex gap-8 items-center justify-center ">
        <Link to={`/`}>
          <li className=" text-xl py-[15px] cursor-pointer transition-[0.3s] hover:border-b hover:border-[black] hover:scale-110">
            All
          </li>
        </Link>
        {categories.map((category) => {
          return (
            <Link to={`/?category=${category.id}`}>
              <li
                key={category.id}
                categoryId={category.id}
                className=" text-xl py-[15px] cursor-pointer transition-[0.3s] hover:border-b hover:border-[black] hover:scale-110"
              >
                {category.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
