import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Input, Spin } from "antd";
import type { ProfileProductType } from "../../@types";

const { Search } = Input;

const MyProducts: React.FC = () => {
  const [products, setProducts] = useState<ProfileProductType[]>([]);
  const [filtered, setFiltered] = useState<ProfileProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const token = Cookies.get("token");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{ data: ProfileProductType[] }>(
          "https://beckend-n14-soqt.vercel.app/api/user/products",
          {
            params: {
              access_token: "64bebc1e2c6d3f056a8c85b7",
              search: "",
            },
          }
        );
        setProducts(response.data.data);
        setFiltered(response.data.data);
      } catch (err) {
        if (err instanceof Error) {
          console.error("Xatolik:", err.message);
        } else {
          console.error("Noma'lum xatolik:", String(err));
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchProducts();
    } else {
      setLoading(false);
      setError(true);
    }
  }, [token]);

  const onSearch = (value: string) => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(results);
  };

  return (
    <div className="w-full">
      <div className="w-[90%] m-auto text-center py-2 px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          My <span className="text-[#46A358]">Products</span>
        </h2>
        <p className="text-gray-600 mb-2 text-base md:text-lg">
          View and manage the products you've uploaded to GreenShop.
        </p>
      </div>

      <div className="mb-6 max-w-[700px] mx-auto flex justify-center items-center">
        <Search
          placeholder="Mahsulot nomini izlang"
          enterButton={
            <button className="bg-[#46A358] text-white px-5 py-[11.5px] rounded-r-md">
              Qidirish
            </button>
          }
          size="large"
          onSearch={onSearch}
        />
      </div>

      <div className="w-[90%] m-auto min-h-[200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {loading ? (
          <div className="col-span-full text-center py-10">
            <Spin size="large" />
          </div>
        ) : error ? (
          <p className="col-span-full text-center text-red-500 font-semibold">
            Xatolik yuz berdi. Ma'lumotlarni yuklab bo‘lmadi.
          </p>
        ) : filtered.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            Sizda hech qanday mahsulot mavjud emas yoki qidiruvga mos kelmadi.
          </p>
        ) : (
          filtered.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded-xl shadow hover:shadow-md transition bg-white flex flex-col justify-between h-full"
            >
              <div>
                <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                  {product.short_description}
                </p>
                <img
                  src={product.main_image}
                  alt={product.title}
                  className="mt-3 w-full h-40 object-cover rounded"
                />
              </div>
              <div className="mt-4 text-[#46A358] font-semibold text-lg">
                ${product.discount ? product.discount_price : product.price}
                {product.discount && (
                  <span className="text-gray-400 line-through ml-2 text-sm">
                    ${product.price}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Sotilgan: {product.sold_times} ta
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyProducts;
