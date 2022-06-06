import React from "react";
import Layout from "../../../../component/Layout/auth";
import Link from "next/link";

export default function PerekrutLogin() {

    return (
    <div>
        <Layout title="Jobway | Perekrut Login">
            <h2>Halo, Pewpeople</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            <form className="auth-form">
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Masukan alamat email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Kata Sandi</label>
                    <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Masukan kata sandi"
                    />
                </div>

                <div className="forgot-pass d-flex justify-content-end mb-5">
                    <Link href="../reset">Lupa kata sandi?</Link>
                </div>

                <button
                    type="submit"
                    className="auth-btn btn btn-primary"
                >
                Masuk
                </button>
            </form>
            <div className="sign-link">
                <p> Anda belum punya akun? <span> <Link href="./register"> Daftar disini </Link> </span> </p>
            </div>
        </Layout>
    </div>
    );
}
