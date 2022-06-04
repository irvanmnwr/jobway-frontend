import React from "react";
import Layout from "../../../../component/Layout/auth";
import Link from "next/link";

export default function PekerjaRegister() {

    return (
    <div>
        <Layout title="Jobway | Pekerja Register">
            <h2>Halo, Pewpeople</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            <form className="auth-form">
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Nama</label>
                    <input
                    type="text"
                    name="nama"
                    className="form-control"
                    placeholder="Masukan nama panjang"
                    />
                </div>
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
                    <label htmlFor="" className="form-label">No handphone</label>
                    <input
                    type="text"
                    name="noTelp"
                    className="form-control"
                    placeholder="Masukan no handphone"
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
                <div className="mb-5">
                    <label htmlFor="" className="form-label">Konfirmasi kata sandi</label>
                    <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Masukan konfirmasi kata sandi"
                    />
                </div>

                <button
                    type="submit"
                    className="auth-btn btn btn-primary"
                >
                Daftar
                </button>
            </form>
            <div className="sign-link">
                <p> Anda sudah punya akun? <span> <Link href="./login"> Masuk disini </Link> </span> </p>
            </div>
        </Layout>
    </div>
    );
}
