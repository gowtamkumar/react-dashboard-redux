import React from "react";
import "./login.css";
import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useNavigate, } from "react-router-dom";
import Auth from "../../services/Auth";

export default function Login() {
  const navigate = useNavigate();

  const user = Auth();

  useEffect(() => {
    (async () => {
      if (user) {
        navigate("/dashboard", { replace: true });
      }
    })();
  }, []);



  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section
      className="h-100 gradient-form container"
    // style={{ backgroundColor: "#eee" }}
    >
      <div className="py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-6">
            <div className="card rounded-3 text-black">
              <div className="card-body p-5 text-center">
                <div className="text-center">
                  <h4 className="mt-1 mb-5 pb-1">Login</h4>
                </div>
                <Form
                  name="basic"
                  // labelCol={{
                  //   span: 8,
                  // }}
                  // wrapperCol={{
                  //   span: 16,
                  // }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "input your username!",
                      },
                    ]}
                  >
                    <Input placeholder="User name" className="w-75" />
                  </Form.Item>

                  <Form.Item
                    // label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Password"
                      className="w-75"
                    />
                  </Form.Item>
                  <Form.Item>
                    <div className="row text-center mt-3 mx-auto mb-4 justify-content-center">
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="loginLeft w-75"
                      >
                        Sign In
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
