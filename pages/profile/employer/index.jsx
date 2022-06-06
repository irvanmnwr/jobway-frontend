import React, { useState } from "react";
import styles from "./Profile.module.css";
import Footer from "../../../component/Footer";
import { IoMailOutline, IoLogoInstagram, IoLogoGithub, IoLogoGitlab } from "react-icons/io5";
export default function Portofolio() {
  const [menuPorto, setMenuPorto] = useState(true);
  const [menuPengalaman, setMenuPengalaman] = useState(false);
  const skills = ["python", "laraver", "Golang", "javascript", "php", "html", "c++", "kotlin", "swift"];
  const portoWeb = ["Remainder app", "Social media app", "Project management web", "Remainder app", "Social media app", "Project management web"];
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
    <div className={styles.container}>
      <div className=" container d-xl-flex pt-4 pt-xl-5">
        <div className={styles.gradient}></div>
        <div className={`${styles.userProfile} container-xl `}>
          <div className=" d-flex justify-content-center mt-xl-4  mb-xl-2  pt-4 pt-xl-">
            <img style={{ width: "100px" }} src="../../user1.png" alt="" />
          </div>
          <div className=" d-flex flex-column">
            <div className={`d-flex flex-column ${styles.detailUser}`}>
              <span className=" fw-bold fs-5 my-3">Louis Tomlison</span>
              <span className="" style={{ fontSize: "14px", lineHeight: "24px" }}>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </span>
              </div>
            </div>

            <div className=" mb-3">
              <button className={styles.buttonHire}>Hire</button>
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
            <div className={`d-flex flex-column ${styles.mediaSocial}`}>
              <div>
                <IoMailOutline />
                <span> Louistommo@gmail.com</span>
              </div>
              <div>
                <IoLogoInstagram />
                <span>@Louist91</span>
              </div>
              <div>
                <IoLogoGithub />
                <span>@Louistommo</span>
              </div>
              <div>
                <IoLogoGitlab />
                <span>@Louistommo91</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`mx-xl-4 container h-100 mt-xl-0 mt-3`} style={{ flex: 4 }}>
          <div className={styles.userPorto}>
            <div className={`pt-xl-3 container ${styles.portoMenu}`}>
              <span className={menuPorto ? styles.menuActive : styles.notActive} style={{ cursor: "pointer" }} onClick={() => handleMenu("portofolio")}>
                Portofolio
              </span>
              <span className={menuPengalaman ? styles.menuActive : styles.notActive} style={{ cursor: "pointer" }} onClick={() => handleMenu("pengalaman")}>
                Pengalaman Kerja
              </span>
            </div>
            <div className={` mt-3 ${menuPorto ? "" : "d-none"} `}>
              {portoWeb.map((item, index) => (
                <div key={index} className={`d-inline-block flex-column text-center mx-3 my-3 ${styles.portoMain}`}>
                  <img className="w-100 d-block mb-3" style={{ width: "200px" }} src={`../../porto${index}.png`} alt="" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className={`container d-flex flex-column w-100 ${menuPengalaman ? "" : "d-none"}`}>
              <div className=" d-flex mt-4">
                <img style={{ width: "65px", height: "65px" }} src="../../work.png" alt="" />
                <div className=" d-flex flex-column ms-4">
                  <span className="" style={{ fontSize: "20px" }}>
                    Engineer
                  </span>
                  <span style={{ fontSize: "18px" }}>tokopedia</span>
                  <div>
                    <span style={{ fontSize: "16px", color: "#9EA0A5" }}>July 2019 - January 2020</span>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#9EA0A5",
                        marginLeft: "20px",
                      }}
                    >
                      6 months
                    </span>
                  </div>
                  <span style={{ fontSize: "14px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</span>
                </div>
              </div>
              <div className=" d-flex mt-4">
                <img style={{ width: "65px", height: "65px" }} src="../../work.png" alt="" />
                <div className=" d-flex flex-column ms-4">
                  <span className="" style={{ fontSize: "20px" }}>
                    Engineer
                  </span>
                  <span style={{ fontSize: "18px" }}>tokopedia</span>
                  <div>
                    <span style={{ fontSize: "16px", color: "#9EA0A5" }}>July 2019 - January 2020</span>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#9EA0A5",
                        marginLeft: "20px",
                      }}
                    >
                      6 months
                    </span>
                  </div>
                  <span style={{ fontSize: "14px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</span>
                </div>
              </div>
            </div>
          </div>

          {/* <div>Pengalaman</div> */}
        </div>
      </div>
      <div className=" mt-5" style={{ height: "400px" }}>
        <Footer />
      </div>
    </div>
  );
}
