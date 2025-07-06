import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Feature from "../../components/features";

interface BlogType {
  _id: string;
  title: string;
  image: string;
  content: string;
  viewCount?: number;
  commentCount?: number;
  created_at?: string;
}

const stripHtml = (html: string): string =>
  html.replace(/<p>/g, "\n").replace(/<\/?[^>]+(>|$)/g, "");

const Views: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://beckend-n14-soqt.vercel.app/api/user/blog/${id}`,
          {
            params: {
              access_token: "64bebc1e2c6d3f056a8c85b7",
            },
          }
        );
        setBlog(response.data.data);
      } catch (error) {
        console.error("Xatolik blogni olishda:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Yuklanmoqda...</div>;
  if (!blog) return <div className="text-center mt-10">Blog topilmadi.</div>;

  return (
    <div className="w-full">
      <Navbar />
      <div className="w-[90%] m-auto py-10">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded mb-6"
          />
        )}

        <pre className="whitespace-pre-wrap text-gray-800">
          {stripHtml(blog.content)}
        </pre>

        <div className="mt-6 text-sm text-gray-500">
          <p>Views: {blog.viewCount ?? 0}</p>
          <p>Comments: {blog.commentCount ?? 0}</p>
          <p>
            Created at: {new Date(blog.created_at || "").toLocaleDateString()}
          </p>
        </div>
      </div>
      <Feature />
      <Footer />
    </div>
  );
};

export default Views;
