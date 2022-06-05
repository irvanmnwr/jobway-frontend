import React, { useState } from "react";
import styles from "./Hire.module.css";
import Footer from "../../component/Footer";
import {
  IoMailOutline,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoGitlab,
} from "react-icons/io5";
export default function Portofolio() {
  const [menuPorto, setMenuPorto] = useState(true);
  const [menuPengalaman, setMenuPengalaman] = useState(false);
  const skills = [
    "python",
    "laraver",
    "Golang",
    "javascript",
    "php",
    "html",
    "c++",
    "kotlin",
    "swift",
  ];
  const portoWeb = [
    "Remainder app",
    "Social media app",
    "Project management web",
    "Remainder app",
    "Social media app",
    "Project management web",
  ];
  const handleMenu = (e) => {
    console.log(e);
    if (e === "portofolio") {
      setMenuPorto(true);
      setMenuPengalaman(false);
    } else {
      setMenuPengalaman(true);
      setMenuPorto(false);
    }
    // setMenuPorto(true);
    // setMenuPengalaman(false);
  };
  return (
    <div className={styles.container} style={{ background: "#E5E5E5" }}>
      <div className=" container d-xl-flex pt-4 pt-xl-5">
        <div className={`${styles.userProfile} container-xl `}>
          <div className=" d-flex justify-content-center mt-xl-4  mb-xl-2  pt-4 pt-xl-">
            <img style={{ width: "100px" }} src="../../user1.png" alt="" />
          </div>
          <div className=" d-flex flex-column">
            <div className={`d-flex flex-column ${styles.detailUser}`}>
              <span className=" fw-bold fs-5 my-3">Louis Tomlison</span>
              <span
                className=""
                style={{ fontSize: "14px", lineHeight: "24px" }}
              >
                Web Developer
              </span>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#9EA0A5",
                }}
              >
                Freelance
              </span>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#9EA0A5",
                }}
              >
                Purwokerto Jawa tengah
              </span>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#9EA0A5",
                }}
              >
                0812 - 3456 - 789
              </span>
              <div className=" my-3">
                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "#9EA0A5",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </span>
              </div>
            </div>

            <div>
              <span
                style={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                Skill
              </span>
              <div className={styles.skills}>
                {skills.map((item, index) => (
                  <span className="d-inline-block" key={index}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`mx-xl-4 container h-100 mt-xl-0 mt-3`}
          style={{ flex: 4 }}
        >
          <div className={styles.formInput}>
            <div className=" d-flex flex-column mb-4">
              <span style={{ fontSize: "32px", marginBottom: "16px" }}>
                Hubungi Louis Tomlison
              </span>
              <span style={{ fontSize: "18px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </span>
            </div>
            <div className=" d-flex flex-column mb-3">
              <span style={{ fontSize: "12px" }}>Tujuan tentang pesan ini</span>
              <select name="" id="" style={{ height: "50px" }}>
                <option value="">1</option>
                <option value="">1</option>
              </select>
            </div>
            <div className=" d-flex flex-column mb-3">
              <span style={{ fontSize: "12px" }}>pesan</span>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Deskripsikan Lebih detail"
              ></textarea>
            </div>
            <div className=" d-flex flex-column">
              <button
                style={{
                  height: "50px",
                  border: "0",
                  background: "#FBB017",
                  color: "white",
                }}
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-5">
        <Footer />
      </div>
    </div>
  );
}
