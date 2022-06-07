import React from "react";
import styles from "./Profile.module.css";
import {
  IoMailOutline,
  IoLogoInstagram,
  IoCallOutline,
  IoLogoLinkedin,
  IoLocationOutline,
} from "react-icons/io5";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const recruiter = useSelector((state) => state.profile.data[0]);

  const handleEditProfile = () => {
    router.push("/editprofile/recruiter");
  };

  return (
    <div className={styles.container}>
      <div className=" h-75 w-75 d-flex m-auto justify-content-center pt-5">
        <div
          className={` w-100 d-flex flex-column align-items-center ${styles.contentContainer}`}
        >
          <div className=" my-5">
            <img src="../../user1.png" style={{ width: "150px" }} alt="" />
          </div>
          <span style={{ fontSize: "22px", fontWeight: "600" }}>
            {recruiter.company}
          </span>
          <span style={{ fontSize: "14px", marginBottom: "10px" }}>
            {recruiter.companyType}
          </span>
          <div className=" mb-2">
            <IoLocationOutline />
            <span
              style={{
                fontSize: "14px",
                color: "#9EA0A5",
                marginLeft: "10px",
              }}
            >
              {recruiter.domicilie}
            </span>
          </div>

          <span
            style={{
              width: "50%",
              fontSize: "14px",
              color: "#9EA0A5",
              textAlign: "center",
            }}
          >
            {recruiter.description}
          </span>
          <div className=" my-4">
            <button
              style={{
                height: "50px",
                width: "290px",
                backgroundColor: "#5E50A1",
                color: "white",
              }}
              onClick={handleEditProfile}
            >
              Edit Profile
            </button>
          </div>
          <div className=" d-flex flex-column">
            <div className=" mt-3">
              <IoMailOutline />
              <span
                style={{
                  fontSize: "14px",
                  color: "#9EA0A5",
                  marginLeft: "10px",
                }}
              >
                {recruiter.email}
              </span>
            </div>
            <div className=" mt-3">
              <IoLogoInstagram />
              <span
                style={{
                  fontSize: "14px",
                  color: "#9EA0A5",
                  marginLeft: "10px",
                }}
              >
                {recruiter.instagram}
              </span>
            </div>
            <div className=" mt-3">
              <IoCallOutline />
              <span
                style={{
                  fontSize: "14px",
                  color: "#9EA0A5",
                  marginLeft: "10px",
                }}
              >
                {recruiter.noTelp}
              </span>
            </div>
            <div className=" mt-3">
              <IoLogoLinkedin />
              <span
                style={{
                  fontSize: "14px",
                  color: "#9EA0A5",
                  marginLeft: "10px",
                }}
              >
                {recruiter.linkedIn}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
