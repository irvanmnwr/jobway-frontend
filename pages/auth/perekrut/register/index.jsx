import React, { useState } from "react";
import Layout from "../../../../component/Layout/auth";
import Link from "next/link";
import axios from "../../../../utils/axios";

export default function PerekrutRegister() {
  const [data, setData] = useState({
    name: "",
    email: "",
    role: "recruiter",
    noTelp: "",
    password: "",
    confirmPassword: "",
    company: "",
    companyType: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`/auth/register`, data);
      console.log(result);
      alert(result.data.msg);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div>
      <Layout title="Jobway | Perekrut Register">
        <h2>Halo, Pewpeople</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Nama
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Masukan nama panjang"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
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
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Perusahaan
            </label>
            <input
              type="text"
              name="company"
              className="form-control"
              placeholder="Masukan nama perusahaan"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Bidang Perusahaan
            </label>
            <input
              type="text"
              name="companyType"
              className="form-control"
              placeholder="Bidang perusahaan Anda"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              No handphone
            </label>
            <input
              type="text"
              name="noTelp"
              className="form-control"
              placeholder="Masukan no handphone"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Kata Sandi
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
              Konfirmasi kata sandi
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
            Daftar
          </button>
        </form>
        <div className="sign-link">
          <p>
            {" "}
            Anda sudah punya akun?{" "}
            <span>
              {" "}
              <Link href="./login"> Masuk disini </Link>{" "}
            </span>{" "}
          </p>
        </div>
      </Layout>
    </div>
  );
}
