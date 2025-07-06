import React, { useState } from "react";
import axios from "axios";
import { Spin, message } from "antd";

interface AddressType {
  _id: string;
  name: string;
  surname: string;
  email: string;
  phone_number: string;
  username: string;
  billing_address: {
    country: string;
    town: string;
    street_address: string;
    state: string;
    zip: string;
    extra_address: string;
  };
}

const MyAddress: React.FC = () => {
  const [address, setAddress] = useState<AddressType>({
    _id: "",
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    username: "",
    billing_address: {
      country: "",
      town: "",
      street_address: "",
      state: "",
      zip: "",
      extra_address: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const token = "64bebc1e2c6d3f056a8c85b7";

  const saveAddress = async () => {
    if (!token) {
      message.error("Token topilmadi!");
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const response = await axios.post(
        "https://beckend-n14-soqt.vercel.app/api/user/address",
        address,
        {
          params: {
            access_token: token,
            search: "",
          },
        }
      );

      message.success("Manzil muvaffaqiyatli saqlandi");
      if (response.data.data) {
        setAddress(response.data.data);
      }
    } catch (err) {
      console.error(err);
      setError(true);
      message.error("Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spin size="large" className="m-auto block mt-10" />;

  return (
    <div className="p-6 w-full mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6 text-center">My Address</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          value={address.name}
          onChange={(e) => setAddress({ ...address, name: e.target.value })}
          placeholder="Ism"
          className="border p-2 rounded w-full focus:outline-none focus:border-[#46A358]"
        />
        <input
          type="text"
          value={address.surname}
          onChange={(e) => setAddress({ ...address, surname: e.target.value })}
          placeholder="Familiya"
          className="border p-2 rounded w-full focus:outline-none focus:border-[#46A358]"
        />
        <input
          type="email"
          value={address.email}
          onChange={(e) => setAddress({ ...address, email: e.target.value })}
          placeholder="Email"
          className="border p-2 rounded w-full focus:outline-none focus:border-[#46A358]"
        />
        <input
          type="text"
          value={address.phone_number}
          onChange={(e) =>
            setAddress({ ...address, phone_number: e.target.value })
          }
          placeholder="Telefon raqami"
          className="border p-2 rounded w-full focus:outline-none focus:border-[#46A358]"
        />
        <input
          type="text"
          value={address.username}
          onChange={(e) => setAddress({ ...address, username: e.target.value })}
          placeholder="Foydalanuvchi nomi"
          className="border p-2 rounded w-full focus:outline-none focus:border-[#46A358]"
        />
        <input
          type="text"
          value={address._id}
          onChange={(e) => setAddress({ ...address, _id: e.target.value })}
          placeholder="ID"
          className="border p-2 rounded w-full focus:outline-none focus:border-[#46A358]"
        />
      </div>

      <h3 className="text-lg font-semibold mb-4">Billing Address</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          value={address.billing_address.country}
          onChange={(e) =>
            setAddress({
              ...address,
              billing_address: {
                ...address.billing_address,
                country: e.target.value,
              },
            })
          }
          placeholder="Country"
          className="border p-2 rounded w-full focus:outline-none focus:border-[#46A358]"
        />
        <input
          type="text"
          value={address.billing_address.town}
          onChange={(e) =>
            setAddress({
              ...address,
              billing_address: {
                ...address.billing_address,
                town: e.target.value,
              },
            })
          }
          placeholder="Town"
          className="border p-2 rounded w-full focus:outline-none focus:border-[#46A358]"
        />
        <input
          type="text"
          value={address.billing_address.street_address}
          onChange={(e) =>
            setAddress({
              ...address,
              billing_address: {
                ...address.billing_address,
                street_address: e.target.value,
              },
            })
          }
          placeholder="Street Address"
          className="border p-2 rounded w-full focus:outline-none focus:border-[#46A358]"
        />
        <input
          type="text"
          value={address.billing_address.state}
          onChange={(e) =>
            setAddress({
              ...address,
              billing_address: {
                ...address.billing_address,
                state: e.target.value,
              },
            })
          }
          placeholder="State"
          className="border p-2 rounded w-full focus:outline-none focus:border-[#46A358]"
        />
        <input
          type="text"
          value={address.billing_address.zip}
          onChange={(e) =>
            setAddress({
              ...address,
              billing_address: {
                ...address.billing_address,
                zip: e.target.value,
              },
            })
          }
          placeholder="ZIP Code"
          className="border p-2 rounded w-full focus:outline-none focus:border-[#46A358]"
        />
        <input
          type="text"
          value={address.billing_address.extra_address}
          onChange={(e) =>
            setAddress({
              ...address,
              billing_address: {
                ...address.billing_address,
                extra_address: e.target.value,
              },
            })
          }
          placeholder="Qo'shimcha manzil"
          className="border p-2 rounded w-full focus:outline-none focus:border-[#46A358]"
        />
      </div>

      <button
        onClick={saveAddress}
        className="bg-[#46A358] text-white px-6 py-2 rounded mt-6 w-full md:w-auto"
      >
        Saqlash
      </button>

      {error && <p className="text-red-500 mt-2">Xatolik yuz berdi</p>}
    </div>
  );
};

export default MyAddress;
