import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';

import Footer from "../../component/Footer";

export default function Landing() {

    return (
    <div className="landing">
        <Head>
            <title>Jobway | Landing Page</title>
        </Head>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Image src="/../../images/landing/auth-logo-purple.svg" alt="" width={127} height={35}/>
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
                <Link href="../auth/pekerja/login">
                    <button className="landing-nav-btn-white btn btn-primary me-3">
                        Masuk
                    </button>
                </Link>
                <Link href="../auth/pekerja/register">
                    <button className="landing-nav-btn-purple btn btn-primary" href="../signIn">
                        Daftar
                    </button>
                </Link>
                </div>
            </div>
        </nav>
        <div className="header">
            <div className="content-main container">
                <div className="content-left pe-5">
                    <h1>Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                    <button className="landing-purple-btn btn btn-primary">Mulai Dari Sekarang</button>
                </div>
                <div className="content-right ps-5">
                    <img src="../../images/landing/header.png" alt="" />
                </div>
            </div>
        </div>
        <div className="sub-1">
            <div className="content-main container">
                <div className="content-right pe-5">
                    <img src="../../images/landing/sub-1.png" alt="" />
                </div>
                <div className="content-left ps-5">
                    <h2>Kenapa harus mencari tallent di Jobway</h2>
                    <div className="sub-list-1 mt-5">
                        <img src="../../images/landing/check-icon.png" alt="" />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="sub-list-1 mt-4">
                        <img src="../../images/landing/check-icon.png" alt="" />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="sub-list-1 mt-4">
                        <img src="../../images/landing/check-icon.png" alt="" />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="sub-list-1 mt-4">
                        <img src="../../images/landing/check-icon.png" alt="" />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="sub-2">
            <div className="content-main container">
                <div className="content-left ps-5">
                    <h2>Skill Tallent</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                    <div className="d-flex">
                        <div className="me-5">
                            <div className="sub-list-1">
                                <img src="../../images/landing/orange-check-icon.png" alt="" />
                                <p>Java</p>
                            </div>
                            <div className="sub-list-1 mt-4">
                                <img src="../../images/landing/orange-check-icon.png" alt="" />
                                <p>Kotlin</p>
                            </div>
                            <div className="sub-list-1 mt-4">
                                <img src="../../images/landing/orange-check-icon.png" alt="" />
                                <p>PHP</p>
                            </div>
                            <div className="sub-list-1 mt-4">
                                <img src="../../images/landing/orange-check-icon.png" alt="" />
                                <p>JavaScript</p>
                            </div>
                        </div>
                        <div>
                            <div className="sub-list-1">
                                <img src="../../images/landing/orange-check-icon.png" alt="" />
                                <p>Golang</p>
                            </div>
                            <div className="sub-list-1 mt-4">
                                <img src="../../images/landing/orange-check-icon.png" alt="" />
                                <p>C++</p>
                            </div>
                            <div className="sub-list-1 mt-4">
                                <img src="../../images/landing/orange-check-icon.png" alt="" />
                                <p>Ruby</p>
                            </div>
                            <div className="sub-list-1 mt-4">
                                <img src="../../images/landing/orange-check-icon.png" alt="" />
                                <p>10+ Bahasa lainnya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-right pe-5">
                    <img src="../../images/landing/sub-2.png" alt="" />
                </div>
            </div>
        </div>

        <div className="testi">
            <h2>Their opinion about Jobway</h2>
            <button className="left-arrow">
                <img src="../../images/landing/left-arrow.png" alt="" />
            </button>
            <button className="right-arrow">
                <img src="../../images/landing/right-arrow.png" alt="" />
            </button>
            <div className="testi-card container row">
                
                <div className="testi-card-content col">
                    <img src="../../images/landing/testi-1.png" alt="" />
                    <h3>Harry Styles</h3>
                    <h4>Web Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                </div>
                <div className="testi-card-content col ms-4 me-4 mobile-disable">
                    <img src="../../images/landing/testi-2.png" alt="" />
                    <h3>Niall Horan</h3>
                    <h4>Web Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                </div>
                <div className="testi-card-content col mobile-disable">
                    <img src="../../images/landing/testi-3.png" alt="" />
                    <h3>Louis Tomlinson</h3>
                    <h4>Web Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                </div>
            </div>
        </div>

        <div className="call-action">
            <div className="call-action-content container">
                <h2>Lorem ipsum dolor sit amet</h2>
                <button className="landing-white-btn btn btn-primary">Mulai Dari Sekarang</button>
            </div>
        </div>

        <Footer />
    </div>
    );
}
