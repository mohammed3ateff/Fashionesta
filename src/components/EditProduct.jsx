import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [categories, setCategories] = useState([]);
  const [data, setData] = useState({
    name: "",
    slug: "",
    price: "",
    thumb: "",
    categories: "", // assuming categories are stored as ID
  });

  // Fetch categories
  useEffect(() => {
    fetch("https://api.easy-orders.net/api/v1/external-apps/categories", {
      headers: {
        "Api-Key": "3807b462-a905-455f-93c2-43ceb58774cd",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const categoriesData = data.map((category) => ({
          name: category.name,
          id: category.id,
        }));
        setCategories(categoriesData);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  // Fetch product data for editing
  useEffect(() => {
    fetch(
      `https://api.easy-orders.net/api/v1/external-apps/products/${productId}`,
      {
        headers: {
          "Api-Key": "3807b462-a905-455f-93c2-43ceb58774cd",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((product) => {
        setData({
          name: product.name,
          slug: product.slug,
          price: product.price.toString(),
          thumb: product.thumb,
          categories: product.categories[0]?.id || "", // Assuming categories are stored as ID
        });
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productId]);

  // Handle form input changes
  const handleValue = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name: data.name,
      slug: data.slug,
      price: parseFloat(data.price),
      thumb: data.thumb,
      categories: [{ id: data.categories }],
    };

    fetch(
      `https://api.easy-orders.net/api/v1/external-apps/products/${productId}`,
      {
        method: "PATCH",
        headers: {
          "Api-Key": "3807b462-a905-455f-93c2-43ceb58774cd",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      }
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(`Server error: ${error.message}`);
          });
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("Response data:", responseData);
        navigate(`/product/${productId}`); // Navigate to product details page after successful update
      })
      .catch((error) => {
        console.error("Error posting product data:", error);
      });
  };

  return (
    <div className="p-10">
      <h1 className="max-w-md mx-auto text-3xl mb-8">Edit Product</h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={handleValue}
            value={data.name}
            type="text"
            name="product_name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="product_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={handleValue}
            value={data.slug}
            type="text"
            name="slug"
            id="slug"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="slug"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Slug
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={handleValue}
            value={data.price}
            type="number"
            name="product_price"
            id="price"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="product_price"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={handleValue}
            value={data.thumb}
            type="text"
            name="product_thumb"
            id="thumb"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="product_thumb"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Thumb
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="category_select" className="sr-only">
            Choose Category
          </label>
          <select
            onChange={handleValue}
            value={data.categories}
            id="categories"
            className="block py-2.5 cursor-pointer px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            required
          >
            <option value="">Choose a Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
