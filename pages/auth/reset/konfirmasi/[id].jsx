import React, { useState, useEffect } from "react";
import Layout from "../../../../component/Layout/auth";
import Router from "next/router";
import axios from "utils/axios";
export default function KonfirmasiPassword() {
  const id = Router.query.id;
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [alert, setAlert] = useState({
    show: false,
    text: "",
    staus: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.patch(`/auth/resetPassword/${id}`, data);
      console.log(result);
      setAlert({
        ...alert,
        show: true,
        staus: 200,
        text: "Success Change password",
      });
      setTimeout(function () {
        Router.push("/login");
      }, 4000);
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
  console.log(data);
  useEffect(() => {
    if (alert.show) {
      setTimeout(function () {
        setAlert({ ...alert, show: false });
      }, 4000);
    }
  }, [alert]);
  return (
    <div>
      <Layout title="Jobway | Konfirmasi Password">
        <h2>Reset Password</h2>
        <p className="mb-4">
          You need to change your password to activate your account
        </p>
        <form className="auth-form" onSubmit={handleSubmit}>
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
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              New Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Masukan kata sandi"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="" className="form-label">
              Confirmation new password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Masukan konfirmasi kata sandi"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button type="submit" className="auth-btn btn btn-primary">
            Reset password
          </button>
        </form>
      </Layout>
    </div>
  );
}
