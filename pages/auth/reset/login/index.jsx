import React from "react";
import Layout from "../../../../component/Layout/auth";

export default function KonfirmasiLogin() {

    return (
    <div>
        <Layout title="Jobway | Konfirmasi Password (Login)">
            <h2>Please login with your account</h2>
            <p className="mb-4">We have an an email containing a password reset instruction toyour email. please check your email.</p>
            <form className="auth-form">
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Masukan email"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="" className="form-label">Kata Sandi</label>
                    <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Masukan password"
                    />
                </div>

                <button
                    type="submit"
                    className="auth-btn btn btn-primary"
                >
                Reset password
                </button>
            </form>
        </Layout>
    </div>
    );
}
