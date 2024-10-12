import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../rtk/slices/category-slice";

export default function CategoriesSlider() {
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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden px-6 bg-white flex flex-col items-center">
      <div className="text-xl mb-4 font-bold text-center">
        <h3>Categories</h3>
      </div>
      {loading && (
        <div className="min-h-[100svh] flex items-center justify-center">
          <div className=" border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
        </div>
      )}
      {error && <div>Error: {error.message}</div>}
      <Slider {...settings} className="w-full">
        {categories.map((category) => (
          <Link to={`/?category=${category.id}`} key={category.id}>
            <div className="text-center rounded overflow-hidden max-w-[160px] mx-auto">
              <img
                src={category.thumb}
                alt={category.name}
                className="max-h-[160px] w-full mb-2 rounded"
              />
              <h3 className="font-bold text-lg">{category.name}</h3>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
