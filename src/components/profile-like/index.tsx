import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootStore } from "../../redux/store";
import { removeFromWishlist } from "../../redux/wishlist-slice";
import { Button } from "antd";
import { Trash2 } from "lucide-react";

const MyWishList: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootStore) => state.wishlist.items);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-[#46A358] flex items-center gap-2">
        Wishlist
      </h2>

      {items.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">
          No items in wishlist.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white border"
            >
              <div className="w-full h-[220px] bg-gray-100 flex items-center justify-center">
                <img
                  src={item.main_image}
                  alt={item.title}
                  className="object-contain h-full max-w-full p-4"
                />
              </div>

              <div className="p-4 flex flex-col justify-between h-[180px]">
                <h3 className="text-base font-semibold text-gray-800 line-clamp-1">
                  {item.title}
                </h3>

                <div className="mt-1">
                  <p className="text-[#46A358] font-bold text-lg">
                    ${item.price.toFixed(2)}
                  </p>
                  {item.discount && (
                    <p className="text-sm text-gray-400 line-through">
                      ${item.discount_price}
                    </p>
                  )}
                </div>

                <Button
                  danger
                  icon={<Trash2 size={16} />}
                  className="!mt-4 !font-medium"
                  onClick={() => dispatch(removeFromWishlist(item._id))}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyWishList;
