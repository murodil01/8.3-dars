import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Feature from "../../components/features";
import {
  FaUser,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaHeart,
  FaClock,
  FaSignOutAlt,
} from "react-icons/fa";
import { Loader, Upload } from "lucide-react";
import { useGetProfile } from "../../hooks/useQueryAction";
import MyProducts from "../../components/profile-products";
import MyAddress from "../../components/profile-address";
import MyWishList from "../../components/profile-like";
import MyOrder from "../../components/profile-order";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [fileName, setFileName] = useState<string>("");
  const navigate = useNavigate();

  const { data: user, isLoading } = useGetProfile();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    navigate("/");
    window.location.reload();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <Loader className="animate-spin text-[#46A358]" size={48} />
      </div>
    );
  }

  const tabs = [
    { key: "profile", icon: <FaUser />, label: "Account Details" },
    { key: "orders", icon: <FaBoxOpen />, label: "My Products" },
    { key: "address", icon: <FaMapMarkerAlt />, label: "Address" },
    { key: "wishlist", icon: <FaHeart />, label: "Wishlist" },
    { key: "trackOrder", icon: <FaClock />, label: "Track Order" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-[90%] max-w-[1350px] mx-auto my-10 flex flex-col md:flex-row gap-6">
        <aside
          className="w-full md:w-[250px] bg-white shadow-sm rounded-md border border-gray-200 
             px-4 py-4 space-y-2 
             flex flex-col md:sticky top-20"
        >
          <h2 className="text-xl font-semibold text-[#46A358] p-4 border-b border-gray-200 whitespace-nowrap">
            My Account
          </h2>

          <ul
            className="flex md:flex-col
              gap-3
              overflow-x-auto
              px-2 py-3
              md:px-0 md:py-4"
          >
            {tabs.map(({ key, icon, label }) => (
              <li key={key} className="whitespace-nowrap">
                <button
                  onClick={() => setActiveTab(key)}
                  className={clsx(
                    "flex items-center gap-2 px-4 py-2 rounded-md transition-all select-none",
                    activeTab === key
                      ? "bg-[#46A358] text-white shadow-md"
                      : "text-gray-700 hover:bg-[#46A358]/20"
                  )}
                >
                  <span className="text-lg">{icon}</span>
                  <span className="hidden md:inline-block">{label}</span>
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={handleLogout}
            className="mt-auto flex items-center gap-2 px-4 py-2 text-red-600 font-semibold hover:underline rounded-b-md select-none"
          >
            <FaSignOutAlt />
            <span className="hidden md:inline-block">Log out</span>
          </button>
        </aside>

        <section className="flex-1 bg-white shadow-sm rounded-md p-6 min-h-[400px]">
          {activeTab === "profile" && user && (
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  * First name
                </label>
                <input
                  type="text"
                  defaultValue={user.name}
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 ring-[#46A358]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  * Last name
                </label>
                <input
                  type="text"
                  defaultValue={user.surname}
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 ring-[#46A358]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  * Email address
                </label>
                <input
                  type="email"
                  defaultValue={user.email}
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 ring-[#46A358]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  * Phone number
                </label>
                <input
                  type="tel"
                  defaultValue={user.phone_number}
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 ring-[#46A358]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  * Username
                </label>
                <input
                  type="text"
                  defaultValue={user.username}
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 ring-[#46A358]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  * Profile photo
                </label>

                <div className="relative flex items-center gap-4">
                  <input
                    type="file"
                    id="fileUpload"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="fileUpload"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-600 rounded-lg cursor-pointer hover:bg-[#46A358] hover:border-[#46A358] hover:text-white transition select-none"
                  >
                    <Upload size={18} />
                    Upload
                  </label>
                  {fileName && (
                    <span className="text-sm text-gray-600 truncate max-w-[200px]">
                      {fileName}
                    </span>
                  )}
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="mt-6 px-6 py-3 bg-[#46A358] text-white rounded-md hover:bg-green-600 transition w-full md:w-auto"
                >
                  Save changes
                </button>
              </div>
            </form>
          )}

          {activeTab === "orders" && <MyProducts />}

          {activeTab === "address" && <MyAddress />}

          {activeTab === "wishlist" && <MyWishList />}

          {activeTab === "trackOrder" && <MyOrder />}
        </section>
      </main>

      <Feature />
      <Footer />
    </div>
  );
};

export default Profile;
