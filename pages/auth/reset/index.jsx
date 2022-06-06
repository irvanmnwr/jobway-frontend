import React from "react";
import Layout from "../../../component/Layout/auth";

export default function ResetPassword() {

    return (
    <div>
        <Layout title="Jobway | Reset Password">
            <h2>Reset Password</h2>
            <p className="mb-4">Enter your user account's verified email address and we will send you a password reset link.</p>
            <form className="auth-form">
                <div className="mb-5">
                    <label htmlFor="" className="form-label">Email</label>
                    <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Masukan alamat email"
                    />
                </div>

                <button
                    type="submit"
                    className="auth-btn btn btn-primary"
                >
                Send password reset email
                </button>
            </form>
        </Layout>
    </div>
    );
}
