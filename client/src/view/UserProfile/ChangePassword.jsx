import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function ChangePassword({ id }) {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({});
  const [loading, setLoading] = useState({});

  // useEffect(() => {
  //   setLoading({ ...loading, tableData: true });
  //   setFormData();
  //   return () => {
  //     resetFormData();
  //   };
  // }, []);

  const handleSubmit = async (values) => {
    let newData = { ...values };

    try {
      setLoading({ submit: true });
      // const { data } = await saveUser(newData);
      setTimeout(() => {
        setLoading({});
        toast.success("Password Update Successfull");
      }, 500);
    } catch (err) {
      setLoading({});
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };

  const setFormData = (v) => {
    const newData = { ...v };
    form.setFieldsValue(newData);
    setFormValues(form.getFieldsValue());
  };

  const resetFormData = () => {
    setFormValues({});
    form.resetFields();
  };

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
  };

  return (
    <div>
      <Form
        {...layout}
        form={form}
        onFinish={(values) => handleSubmit(values)}
        onValuesChange={(_v, values) => setFormValues(values)}
        autoComplete="off"
        scrollToFirstError={true}
      >
        <Form.Item name="id" hidden className="m-2">
          <Input />
        </Form.Item>

        <Form.Item
          name="currentPassword"
          label="Current Password"
          className="m-2"
          // hidden={data.id}
          rules={[
            {
              required: true,
              message: "Current Password is required",
            },
          ]}
        >
          <Input.Password
            placeholder="Enter Current Password"
            style={{ width: "75%" }}
          />
        </Form.Item>

        <Form.Item
          name="newPassword"
          label="New Password"
          className="m-2"
          rules={[
            {
              required: true,
              message: "New Password is required",
            },
          ]}
        >
          <Input.Password
            placeholder="Enter New Password"
            style={{ width: "65%" }}
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          className="m-2"
          rules={[
            // {
            //   required: true,
            //   message: "Confirm Password is required",
            // },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                {
                  return Promise.reject("Confirm Password is not same");
                }
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Enter Confirm Password"
            style={{ width: "75%" }}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button size="small" onClick={resetFormData} className="mx-2">
            Reset
          </Button>
          <Button
            size="small"
            type="primary"
            htmlType="submit"
            loading={loading.submit}
          >
            Update Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
