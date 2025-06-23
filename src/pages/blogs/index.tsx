import React, { useEffect, useState } from "react";
import axios from "axios";
import { Eye, MessageCircle, Heart } from "lucide-react";
import { Input } from "antd";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

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
    const results = blogs.filter((blog) => {
      const titleMatch = blog.title
        ?.toLowerCase()
        .includes(value.toLowerCase());
      const descMatch = blog.description
        ?.toLowerCase()
        .includes(value.toLowerCase());
      return titleMatch || descMatch;
    });

    setFilteredBlogs(results);
  };

  return (
    <div className="w-full">
      <Navbar />

      <div className="my-6 max-w-[700px] mx-auto flex justify-center items-center">
        <Search
          placeholder="Kommentariyasi bor bloglarni izlang"
          enterButton="Qidirish"
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
                  <div className="flex items-center gap-1">
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

      <Footer />
    </div>
  );
};

export default Blogs;
