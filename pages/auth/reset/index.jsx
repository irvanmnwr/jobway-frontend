import React, { useEffect, useState } from "react";
import Layout from "../../../component/Layout/auth";
import axios from "../../../utils/axios";
export default function ResetPassword() {
  const [data, setData] = useState({ email: "" });
  const [alert, setAlert] = useState({
    show: true,
    text: "",
  });
  const handleSubmit = async () => {
    try {
      const result = await axios.post(`/auth/confirmPassword`, data);
      setAlert({
        ...alert,
        show: true,
        text: "Success!! Please Check your Email",
      });
      alert("Success!! Please Check your Email");
      console.log(result);
    } catch (error) {
      console.log(error.response);
      setAlert({
        ...alert,
        show: true,
        text: error.response.data.msg,
      });
      alert(error.response.data.msg);
    }
  };
  const handleChange = (e) => {
    setData({ ...data, email: e.target.value });
  };
  console.log(data);
  return (
    <div>
      <Layout title="Jobway | Reset Password">
        <h2>Reset Password</h2>
        <p className="mb-4">
          Enter your user account's verified email address and we will send you
          a password reset link.
        </p>
        <form className="auth-form">
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
