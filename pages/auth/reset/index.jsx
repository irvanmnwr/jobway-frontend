import React, { useEffect, useState } from "react";
import Layout from "../../../component/Layout/auth";
import axios from "../../../utils/axios";
import Router from "next/router";
export default function ResetPassword() {
  const [data, setData] = useState({ email: "" });
  const [alert, setAlert] = useState({
    show: false,
    text: "",
    staus: 0,
  });
  const handleSubmit = async () => {
    try {
      const result = await axios.post(`/auth/confirmPassword`, data);

      setAlert({
        ...alert,
        show: true,
        staus: 200,
        text: "Success! please check your email!",
      });
      setTimeout(function () {
        Router.push("/login");
      }, 4000);
      console.log(result);
    } catch (error) {
      console.log(error.response);

      setAlert({
        ...alert,
        show: true,
        text: error.response.data.msg,
        staus: error.response.data.status,
      });
    }
  };
  const handleChange = (e) => {
    setData({ ...data, email: e.target.value });
  };

  useEffect(() => {
    if (alert.show) {
      setTimeout(function () {
        setAlert({ ...alert, show: false });
      }, 4000);
    }
  }, [alert]);
  return (
    <div>
      <Layout title="Jobway | Reset Password">
        <h2>Reset Password</h2>
        <p className="mb-4">
          Enter your user account's verified email address and we will send you
          a password reset link.
        </p>
        <form className="auth-form">
          <div
            className={`alert ${
              alert.staus == 400 || alert.staus == 404
                ? "alert-danger"
                : "alert-primary"
            }   text-center ${alert.show ? "fadeIn" : "fadeOut"}`}
            role="alert"
          >
            {alert.text}
          </div>
          <div className="mb-5">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Masukan alamat email"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button
            onClick={(e) => handleSubmit(e)}
            type="button"
            className="auth-btn btn btn-primary"
          >
            Send password reset email
          </button>
        </form>
      </Layout>
    </div>
  );
}
