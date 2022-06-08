import React, { useEffect, useState } from "react";
import Layout from "../../../../component/Layout/auth";
import Link from "next/link";
import axios from "../../../../utils/axios";
import Router from "next/router";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { getUserById } from "../../../../store/actions/profile";

//Private Route
import cookies from "next-cookies";
export async function getServerSideProps(context) {
  try {
    const dataCookie = cookies(context);
    if (dataCookie.token) {
      throw TypeError("Already authorized");
    }
    return {
      props: {
        data: dataCookie,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/landing",
        permanent: false,
      },
    };
  }
}

export default function PerekrutLogin() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState({
    show: false,
    text: "",
    staus: 0,
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`/auth/login`, data);
      console.log(result);
      Cookies.set("token", result.data.data.token);
      setAlert({
        ...alert,
        show: true,
        staus: 200,
        text: "success login, please Wait",
      });

      await dispatch(getUserById(result.data.data.id));
      setTimeout(function () {
        Router.push("/home");
      }, 3000);
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
  useEffect(() => {
    if (alert.show) {
      setTimeout(function () {
        setAlert({ ...alert, show: false });
      }, 1000);
    }
  }, [alert]);
  return (
    <div>
      <Layout title="Jobway | Perekrut Login">
        <h2>Halo, Pewpeople</h2>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        <form className="auth-form" onSubmit={hanldeSubmit}>
          <div className="mb-3">
            <div className={`alert ${alert.staus == 400 || alert.staus == 404 ? "alert-danger" : "alert-primary"}   text-center ${alert.show ? "fadeIn" : "fadeOut"}`} role="alert">
              {alert.text}
            </div>
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input type="email" name="email" className="form-control" placeholder="Masukan alamat email" onChange={(e) => handleChange(e)} />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Kata Sandi
            </label>
            <input type="password" name="password" className="form-control" placeholder="Masukan kata sandi" onChange={(e) => handleChange(e)} />
          </div>

          <div className="forgot-pass d-flex justify-content-end mb-5">
            <Link href="../reset">Lupa kata sandi?</Link>
          </div>

          <button type="submit" className="auth-btn btn btn-primary">
            Masuk
          </button>
        </form>
        <div className="sign-link">
          <p>
            {" "}
            Anda belum punya akun?{" "}
            <span>
              {" "}
              <Link href="./register"> Daftar disini </Link>{" "}
            </span>{" "}
          </p>
        </div>
      </Layout>
    </div>
  );
}
