import React, { useState } from "react";
import Layout from "../../../component/Layout/auth";
import axios from "../../../utils/axios";
export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const setData = {
      email: email,
    };
    try {
      console.log(setData);
      const result = await axios.get(`auth/confirmPassword`, setData);
      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div>
      <Layout title="Jobway | Reset Password">
        <h2>Reset Password</h2>
        <p className="mb-4">
          Enter your user account's verified email address and we will send you
          a password reset link.
        </p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Masukan alamat email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-btn btn btn-primary">
            Send password reset email
          </button>
        </form>
      </Layout>
    </div>
  );
}
