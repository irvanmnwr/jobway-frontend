import React from "react";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import axios from "../../utils/axios";
import { useSelector } from "react-redux";
import router from "next/router";
import photo from "../../public/user1.png";
import { Dropdown } from "react-bootstrap";

export default function Navbar() {
  // const user = useSelector((state) => state.user.data);
  const data = useSelector((state) => state.profile.data[0]);
  const dataUser = data ? data : {};
  const handleProfile = () => {
    if (dataUser.role === "employee") {
      router.push("/editprofile/employer");
    } else {
      router.push("/profile/recruiter");
    }
  };
  const handleHome = () => {
    router.push("/home");
  };
  const handleLogout = () => {
    axios.post(`/auth/logout`);
    Cookies.remove("token");
    localStorage.clear();
    router.push("/auth/pekerja/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pt-4 pb-4 navbar-app">
      <div className="container">
        <Image
          src="/../../images/landing/auth-logo-purple.svg"
          alt="auth-logo-purple"
          width={127}
          height={35}
          onClick={handleHome}
        />
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="me-5">
            <Dropdown>
              <Dropdown.Toggle
                className="user-btn-nav"
                variant="success"
                id="dropdown-basic"
              >
                <Image
                  src="/../../images/navbar/bell.svg"
                  alt="auth-logo-purple"
                  width={24}
                  height={24}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="user-toggle">
                <Dropdown.Item className="user-toggle-item" href="#/action-1">
                  <div className="p-5">
                    <Image
                      src="/../../images/navbar/notif-ilu.svg"
                      alt="auth-logo-purple"
                      width={117}
                      height={76}
                    />
                    <p>Belum ada notifikasi</p>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="me-5">
            <Link href="../../chat">
              <Image
                src="/../../images/navbar/mail.svg"
                alt="auth-logo-purple"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle
                className="user-btn-nav"
                variant="success"
                id="dropdown-basic"
              >
                <Image
                  src={
                    dataUser.image
                      ? process.env.CLAUDINARY + dataUser.image
                      : photo
                  }
                  alt="photoProfile"
                  width={32}
                  height={32}
                  className=""
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="user-toggle">
                <Dropdown.Item className="user-toggle-item" href="#/action-1">
                  <button onClick={handleProfile}>Profile</button>
                </Dropdown.Item>
                <Dropdown.Item className="user-toggle-item" href="#/action-2">
                  <button onClick={handleLogout}>Logout</button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
}
