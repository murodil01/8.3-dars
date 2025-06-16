import { Button, Form, Input, Typography, Divider } from "antd";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import { Loader } from "lucide-react";
import { useLoginMutation } from "../../../../hooks/useQueryAction";

const { Text } = Typography;

const Login = () => {
  const { mutate, isPending } = useLoginMutation();

  const login = (e: { email: string; password: string }) => {
    mutate(e); 
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg">
      <Text className="block text-center mb-6 text-gray-500">
        Enter your email and password to login.
      </Text>

      <Form layout="vertical" onFinish={login}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Enter a valid email!" },
          ]}
        >
          <Input
            placeholder="yourname@email.com"
            size="large"
            className="rounded"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            placeholder="************"
            size="large"
            className="rounded"
          />
        </Form.Item>

        <div className="flex justify-end mb-4">
          <a href="#" className="text-green-500 hover:underline text-sm">
            Forgot Password?
          </a>
        </div>

        <Form.Item>
          <Button
            htmlType="submit"
            size="large"
            className="w-full rounded flex items-center justify-center"
            style={{
              backgroundColor: "#46A358",
              borderColor: "#46A358",
              color: "white",
            }}
          >
            {isPending ? <Loader className="animate-spin" /> : "Login"}
          </Button>
        </Form.Item>
      </Form>

      <Divider plain className="text-gray-400">Or login with</Divider>

      <div className="space-y-3 flex flex-col gap-4">
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

export default Login;
