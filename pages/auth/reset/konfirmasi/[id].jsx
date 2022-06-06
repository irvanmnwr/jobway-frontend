import React from "react";
import Layout from "../../../../component/Layout/auth";
import Router from "next/router";
export default function KonfirmasiPassword() {
  const id = Router.query.id;

  console.log(id);
  return (
    <div>
      <Layout title="Jobway | Konfirmasi Password">
        <h2>Reset Password</h2>
        <p className="mb-4">
          You need to change your password to activate your account
        </p>
        <form className="auth-form">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Kata Sandi
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Masukan kata sandi"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="" className="form-label">
              Confirmation new password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Masukan konfirmasi kata sandi"
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
