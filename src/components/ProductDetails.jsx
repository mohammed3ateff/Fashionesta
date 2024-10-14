import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../rtk/slices/product-details-slice";
import { addToWishlist } from "../rtk/slices/wishlist-slice";

export default function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const {
    data: productDetails,
    loading,
    error,
  } = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  if (loading) {
    return (
      <div className="min-h-[100svh] flex items-center justify-center">
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!productDetails) {
    return null;
  }

  return (
    <div className="bg-gray-100 py-8 mt-[75px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
              <img
                className="w-full h-full object-cover"
                src={productDetails.image}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button
                  // onClick={() => dispatch(addToCart(ProductDetails))}
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                >
                  Buy Now
                </button>
              </div>
              <div
                onClick={() => dispatch(addToWishlist(productDetails))}
                className="w-1/2 px-2"
              >
                <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Product Name
            </h2>
            <p className="text-gray-600 text-sm mb-4">{productDetails.name}</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Price:</span>
                <span className="text-gray-600">${productDetails.price}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700">Availability:</span>
                <span className="text-gray-600">In Stock</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700">Select Color:</span>
              <div className="flex items-center mt-2">
                <button className="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700">Select Size:</span>
              <div className="flex items-center mt-2">
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                  S
                </button>
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                  M
                </button>
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                  L
                </button>
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                  XL
                </button>
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                  XXL
                </button>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700">
                Product Description:
              </span>
              <p className="text-gray-600 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis
                dapibus augue vel ipsum pretium, et venenatis sem blandit.
                Quisque ut erat vitae nisi ultrices placerat non eget velit.
                Integer ornare mi sed ipsum lacinia, non sagittis mauris
                blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt
                mi consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
