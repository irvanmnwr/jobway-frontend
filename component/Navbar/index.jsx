import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pt-4 pb-4">
        <div className="container">
            <Image src="/../../images/landing/auth-logo-purple.svg" alt="auth-logo-purple" width={127} height={35}/>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <div className="me-5">
            <Image src="/../../images/navbar/bell.svg" alt="auth-logo-purple" width={24} height={24}/>
            </div>
            <div className="me-5">
            <Image src="/../../images/navbar/mail.svg" alt="auth-logo-purple" width={24} height={24}/>
            </div>
            <div>
            <img src="../../images/navbar/default-nav.png" alt="auth-logo-purple"/>
            </div>
            </div>
        </div>
    </nav>
  );
}
