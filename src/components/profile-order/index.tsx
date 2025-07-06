import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Table, Spin, Button, Modal } from "antd";

interface ShopItem {
  _id: string;
  title: string;
  price: number;
  discount: boolean;
  discount_price: string;
  short_description: string;
  description: string;
  main_image: string;
  detailed_images: string[];
  rate: number;
  views: number;
  tags: string[];
  comments: string[];
  sold_times: number;
  created_by: string;
  created_at: string;
  __v: number;
  count: number;
}

interface Order {
  _id: string;
  created_by: string;
  shop_list: ShopItem[];
  extra_shop_info: {
    total: number;
    method: string;
  };
  billing_address: {
    name: string;
    surname: string;
  };
  expireAt: string;
  created_at: string;
  __v: number;
}

const MyOrder: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const token = Cookies.get("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get<{ data: Order[] }>(
          "https://beckend-n14-soqt.vercel.app/api/order/get-order",
          {
            headers: {
              Authorization: token || "",
            },
            params: {
              access_token: "64bebc1e2c6d3f056a8c85b7",
            },
          }
        );
        setOrders(response.data.data);
      } catch (err) {
        console.error("Xatolik:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchOrders();
    } else {
      setError(true);
      setLoading(false);
    }
  }, [token]);

  const columns = [
    {
      title: "Order Number",
      dataIndex: "_id",
      key: "_id",
      render: (id: string) => <span className="text-sm break-all">{id}</span>,
    },
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
      render: (date: string) => new Date(date).toLocaleString(),
    },
    {
      title: "Total",
      key: "total",
      render: (_: Order, record: Order) => (
        <span style={{ color: "#46A358", fontWeight: "bold" }}>
          ${record.extra_shop_info?.total?.toFixed(2) ?? "0.00"}
        </span>
      ),
    },
    {
      title: "More",
      key: "more",
      render: (_: Order, record: Order) => (
        <Button
          className="!text-[#46A358] font-[700]"
          type="link"
          onClick={() => {
            setSelectedOrder(record);
            setIsModalOpen(true);
          }}
        >
          More Info
        </Button>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-20">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-4">Xatolik yuz berdi</div>
    );
  }

  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
        Orders
      </h2>

      <div className="overflow-x-auto">
        <Table<Order>
          dataSource={orders}
          columns={columns}
          rowKey="_id"
          pagination={{
            pageSize: 5,
            className: "green-pagination",
          }}
          bordered
          scroll={{ x: 700 }}
          className="min-w-[700px]"
        />
      </div>

      <Modal
        title={
          <span className="text-xl font-semibold text-[#46A358]">
            Order Details
          </span>
        }
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width="90%"
        style={{ maxWidth: 900 }}
        styles={{
          body: {
            padding: 24,
          },
        }}
        centered
      >
        {selectedOrder && (
          <div className="text-[15px] text-gray-700">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src={selectedOrder.shop_list[0]?.main_image}
                alt={selectedOrder.shop_list[0]?.title}
                className="w-full max-w-[280px] h-auto rounded-lg object-cover flex-shrink-0"
              />

              <div className="flex-1 space-y-4">
                <h3 className="text-lg font-semibold">
                  {selectedOrder.shop_list[0]?.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {selectedOrder.shop_list[0]?.short_description}
                </p>

                <p className="text-base">
                  Price:{" "}
                  <span className="text-[#46A358] font-semibold">
                    ${selectedOrder.shop_list[0]?.price.toFixed(2)}
                  </span>
                </p>

                <p className="text-base">
                  Quantity:{" "}
                  <span className="font-medium">
                    {selectedOrder.shop_list[0]?.count}
                  </span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t mt-4">
                  <div>
                    <p className="font-medium">Order Number:</p>
                    <p className="break-all">{selectedOrder._id}</p>
                  </div>
                  <div>
                    <p className="font-medium">Date:</p>
                    <p>{new Date(selectedOrder.created_at).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="font-medium">Total:</p>
                    <p className="text-[#46A358] font-semibold">
                      ${selectedOrder.extra_shop_info?.total?.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Payment Method:</p>
                    <p>{selectedOrder.extra_shop_info?.method}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="font-medium">Customer Name:</p>
                    <p>
                      {selectedOrder.billing_address?.name}{" "}
                      {selectedOrder.billing_address?.surname}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {selectedOrder.shop_list.length > 1 && (
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3">Other Items</h4>
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {selectedOrder.shop_list.slice(1).map((item) => (
                    <div
                      key={item._id}
                      className="flex gap-4 items-center border border-gray-200 rounded-md p-3"
                    >
                      <img
                        src={item.main_image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h5 className="font-semibold">{item.title}</h5>
                        <p className="text-sm text-gray-600 truncate">
                          {item.short_description}
                        </p>
                        <p className="mt-1">
                          Price:{" "}
                          <span className="text-[#46A358] font-semibold">
                            ${item.price.toFixed(2)}
                          </span>
                        </p>
                        <p>
                          Quantity:{" "}
                          <span className="font-medium">{item.count}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MyOrder;
