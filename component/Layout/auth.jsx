import React from "react";
import Head from "next/head";
import Image from 'next/image';

export default function AuthLayout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="auth d-flex">
        <div className="auth-left">
          <Image src="/../../images/auth/auth-logo-white.svg" alt="Vercel Logo" width={100} height={30} />
          <h1>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
          <hr />
        </div>
        <div className="logo-mobile">
          <Image src="/../../images/auth/auth-logo-purple.svg" alt="Vercel Logo" width={100} height={30} />
        </div>
        <div className="auth-right">
          <main>{props.children}</main>
        </div>
      </div>
    </div>
  );
}
