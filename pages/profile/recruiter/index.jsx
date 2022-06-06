import React from "react";
import styles from "./Profile.module.css";
import {
  IoMailOutline,
  IoLogoInstagram,
  IoCallOutline,
  IoLogoLinkedin,
  IoLocationOutline,
} from "react-icons/io5";

export default function index() {
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
            Pt. martabat jaya abadi
          </span>
          <span style={{ fontSize: "14px", marginBottom: "10px" }}>
            Financial
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
              Purwokerto jawa tengah
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </span>
          <div className=" my-4">
            <button
              style={{
                height: "50px",
                width: "290px",
                backgroundColor: "#5E50A1",
                color: "white",
              }}
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
                martabatjaya@gmail.com
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
                martabatjaya@gmail.com
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
                martabatjaya@gmail.com
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
                martabatjaya@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
