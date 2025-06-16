import { useState } from "react";
import { Button, Form, Input, Typography, Divider } from "antd";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import { Loader } from "lucide-react";

const { Text } = Typography;

const Register = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = () => {
    console.log("Register data:",);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg">
      <Text className="block text-center mb-6 text-gray-500">
        Enter your username, email, and password to register.
      </Text>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true }]}>
          <Input
            placeholder="Enter your username"
            size="large"
            className="rounded"
            autoComplete="off"
          />
        </Form.Item>

        <Form.Item name="email" rules={[{ required: true }]}>
          <Input
            placeholder="Enter your email address"
            size="large"
            className="rounded"
            autoComplete="off"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            placeholder="Enter your password"
            size="large"
            className="rounded"
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          rules={[
            { required: true, message: "Please confirm your password!" },
          ]}
        >
          <Input.Password
            placeholder="Confirm your password"
            size="large"
            className="rounded"
          />
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
            size="large"
            className="w-full rounded flex items-center justify-center gap-2"
            style={{
              backgroundColor: "#46A358",
              borderColor: "#46A358",
              color: "white",
            }}
            disabled={loading}
          >
            {loading ? (
              <Loader className="animate-spin" size={20} />
            ) : (
              "Register"
            )}
          </Button>
        </Form.Item>
      </Form>

      <Divider plain className="text-gray-400">
        Or register with
      </Divider>

      <div className="space-y-3">
        <Button
          icon={<GoogleOutlined />}
          block
          size="large"
          className="border border-gray-300 text-black"
        >
          Continue with Google
        </Button>
        <Button
          icon={<FacebookFilled />}
          block
          size="large"
          className="border border-gray-300 text-black"
        >
          Continue with Facebook
        </Button>
      </div>
    </div>
  );
};

export default Register;
