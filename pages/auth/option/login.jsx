import React from "react";
import Link from "next/link";
import Image from "next/image";

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

export default function OptionLogin() {
  return (
    <div className="option">
      <Image src="/../../images/auth/auth-logo-white.svg" alt="auth-logo-white" width={100} height={30} />
      <div className="option-main">
        <div className="option-content">
          <h1>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
          <div className="option-btn">
            <Link href="../pekerja/login">
              <button className="option-nav-btn-white btn btn-primary me-3">Masuk sebagai pekerja</button>
            </Link>
            <div className="option-or">
              <div className="option-or-line me-2"></div>
              <p>atau</p>
              <div className="option-or-line ms-2"></div>
            </div>
            <Link href="../perekrut/login">
              <button className="option-nav-btn-line btn btn-primary me-3">Masuk sebagai perekrut</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
