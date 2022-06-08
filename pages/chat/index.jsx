import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

//Private Route
import cookies from "next-cookies";
export async function getServerSideProps(context) {
  try {
    const dataCookie = cookies(context);
    if (!dataCookie.token) {
      throw TypeError("Unauthorized");
    }
    return {
      props: {
        data: dataCookie,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/auth/pekerja/login",
        permanent: false,
      },
    };
  }
}

export default function Chat() {
  return (
    <div className="bg-color-app">
      <Head>
        <title>Jobway | Chat</title>
      </Head>

      <Navbar />

      <div className="chat container mt-5 mb-5">
        <div className="chat-left me-4">
          <p>Chat</p>
          <hr></hr>
          <div className="chat-unfill">
            <Image src="/../../unfill-chat-ilu.svg" alt="auth-logo-purple" width={142} height={126} />
            <p className="mt-3">Belum ada chat</p>
          </div>
        </div>
        <div className="chat-right">
          <p>No Selected Chat</p>
          <hr></hr>
        </div>
      </div>

      <Footer />
    </div>
  );
}
