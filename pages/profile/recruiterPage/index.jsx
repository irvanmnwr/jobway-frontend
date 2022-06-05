import React, { useEffect, useState } from "react";
// import Footer from "../../../components/Footer";
// import Menu from "../../../components/Menu";
import Image from "next/image";
import photo from "../../../public/photoProfile.jpg";
import { useRouter } from "next/router";
// import Cookies from "js-cookie";
import { FiMail, FiInstagram, FiPhone, FiLinkedin } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
// import axios from "../../../utils/axios";
// import Edit from "../../../components/Edit";
// import { getUserById } from "../../../stores/actions/user";
// import Upload from "../../../components/upload";

export default function Recruiter() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleEdit = () => {
    router.push("/profile/recruiter");
  };
  return (
    <div className="recruiterPage__main">
      <div className="container">
        <div className="backgroundPartContainer">
          <div className="recruiterPage__photo">
            <Image src={photo} alt="photoProfile" width={120} height={120} className="recruiter__photoBorder" />
          </div>
        </div>
        <div className="recruiterPage__content">
          <h1 className="recruiter__name">PT. JAJAJA</h1>
          <h2 className="recruiterPage__field">Finance</h2>
          <h3 className="recruiterPage__location">
            <BiMap /> Purwokerto, Jawa Tengah
          </h3>
          <p className="recruiterPage__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
          <button className="recruiterPage__buttonEdit" onClick={handleEdit}>
            Edit Profile
          </button>

          <p className="recruiterPage__text">
            <FiMail />
            Email
          </p>
          <p className="recruiterPage__text">
            <FiInstagram />
            Instragram
          </p>
          <p className="recruiterPage__text">
            <FiPhone /> Phone
          </p>
          <p className="recruiterPage__text">
            <FiLinkedin /> Linkedn
          </p>
        </div>
      </div>
    </div>
  );
}
