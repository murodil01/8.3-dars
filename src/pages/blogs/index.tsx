import React, { useEffect, useState } from "react";
import axios from "axios";
import { Eye, MessageCircle, Heart } from "lucide-react";
import { Input } from "antd";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Feature from "../../components/features";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

interface BlogType {
  _id: string;
  title: string;
  description: string;
  image: string;
  viewCount: number;
  commentCount: number;
  likeCount: number;
  content: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const stripHtml = (html: string): string => html.replace(/<[^>]*>?/gm, "");

  const truncateText = (text: string, length: number = 100): string =>
    text.length > length ? text.substring(0, length) + "..." : text;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://beckend-n14-soqt.vercel.app/api/user/blog",
          {
            params: {
              access_token: "64bebc1e2c6d3f056a8c85b7",
              search: "",
            },
          }
        );

        const modifiedData = response.data.data.map((blog: BlogType) => ({
          ...blog,
          viewCount: (blog.viewCount || 0) + Math.floor(Math.random() * 20),
        }));

        setBlogs(modifiedData);
        setFilteredBlogs(modifiedData);
      } catch (error) {
        console.error("Xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const onSearch = (value: string) => {
    if (!value) {
      setFilteredBlogs(blogs);
      return;
    }
    const results = blogs.filter((blog) => {
      const title = blog.title || "";
      const description = blog.description || "";

      return (
        title.toLowerCase().includes(value.toLowerCase()) ||
        description.toLowerCase().includes(value.toLowerCase())
      );
    });
    setFilteredBlogs(results);
  };

  const handleNavigate = (id: string) => {
    navigate(`/views/${id}`);
  };

  return (
    <div className="w-full">
      <Navbar />

      <div className="my-6 max-w-[700px] mx-auto flex justify-center items-center">
        <Search
          placeholder="Kommentariyasi bor bloglarni izlang"
          enterButton={
            <button className="bg-[#46A358] text-white px-5 py-[11.5px] rounded-r-md">
              Qidirish
            </button>
          }
          size="large"
          onSearch={onSearch}
        />
      </div>

      <div className="w-[90%] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {loading ? (
          <p>Yuklanmoqda...</p>
        ) : filteredBlogs.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            Hech qanday mos blog topilmadi. Iltimos, ro'yxatdan o'ting va izoh
            qoldiring!
          </p>
        ) : (
          filteredBlogs.map((blog) => {
            const shortText = truncateText(stripHtml(blog.content), 100);

            return (
              <div
                key={blog._id}
                className="border p-4 rounded-xl shadow hover:shadow-md transition bg-white flex flex-col justify-between h-full"
              >
                <div>
                  <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-700 text-sm mb-2">{shortText}</p>
                  <p className="text-gray-600 text-sm line-clamp-4">
                    {blog.description}
                  </p>
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="mt-3 w-full h-40 object-cover rounded"
                    />
                  )}
                </div>
                <div className="mt-4 flex justify-between items-center text-gray-500 text-sm border-t pt-2">
                  <div
                    onClick={() => handleNavigate(blog._id)}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <Eye size={16} /> {blog.viewCount || 0}
                  </div>

                  <div className="flex items-center gap-1">
                    <MessageCircle size={16} /> {blog.commentCount || 0}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart size={16} /> {blog.likeCount || 0}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <Feature />
      <Footer />
    </div>
  );
};

export default Blogs;
