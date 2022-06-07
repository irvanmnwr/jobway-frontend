import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import Footer from "../../../component/Footer";
import axios from "../../../utils/axios";
import axiosServer from "../../../utils/axiosServer";
import Router from "next/router";
import cookies from "next-cookies";
import {
  IoMailOutline,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoGitlab,
} from "react-icons/io5";
import { useSelector } from "react-redux";

export async function getServerSideProps(context) {
  const params = context.query;
  const dataCookies = cookies(context);
  // const history = await axiosServer
  //   .get(`/transaction/history?page=${page}&limit=6&filter=${filter}`, {
  //     headers: {
  //       Authorization: `Bearer ${dataCookies.token}`,
  //     },
  try {
    const userSelect = await axiosServer.get(`user/${params.id}`, {
      headers: {
        Authorization: `Bearer ${dataCookies.token}`,
      },
    });
    const porto = await axiosServer.get(`portofolio/user/${params.id}`, {
      headers: {
        Authorization: `Bearer ${dataCookies.token}`,
      },
    });
    return {
      props: {
        data: userSelect.data.data[0],
        porto: porto.data.data,
      }, // will be passed to the page component as props
    };
    console.log(userSelect);
  } catch (error) {
    console.log(error.response);
  }
}

export default function Portofolio(props) {
  console.log(props.porto);
  const cloudinaryImg = process.env.CLAUDINARY;
  const [menuPorto, setMenuPorto] = useState(true);
  const [menuPengalaman, setMenuPengalaman] = useState(false);
  const [experience, setExperience] = useState([]);
  const portofolio = props.porto;
  const role = useSelector((state) => state.profile.data[0].role);
  console.log(role);
  const user = props.data;
  const skills = user.skill.split(",");
  const getExperience = async () => {
    try {
      const result = await axios.get(`workexperience?id=${user.id}`);
      setExperience(result.data.data);
      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getUserById = async () => {};
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

  useEffect(() => {
    getExperience();
  }, []);
  return (
    <div className={styles.container}>
      <div className=" container d-xl-flex pt-4 pt-xl-5">
        <div className={styles.gradient}></div>
        <div className={`${styles.userProfile} container-xl `}>
          <div className=" d-flex justify-content-center mt-xl-4  mb-xl-2  pt-4 pt-xl-">
            <img
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              src={
                user.image !== null
                  ? cloudinaryImg + user.image
                  : "../../user1.png"
              }
              alt=""
            />
          </div>
          <div className=" d-flex flex-column">
            <div className={`d-flex flex-column ${styles.detailUser}`}>
              <span className=" fw-bold fs-5 my-3">{user.name}</span>
              <span
                className=""
                style={{ fontSize: "14px", lineHeight: "24px" }}
              >
                {user.jobDesc}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#9EA0A5",
                }}
              >
                {user.typeEmployee}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#9EA0A5",
                }}
              >
                {user.domicilie}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#9EA0A5",
                }}
              >
                {user.noTelp}
              </span>
              <div className=" my-3">
                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "#9EA0A5",
                  }}
                >
                  {user.description}
                </span>
              </div>
            </div>

            {role === "employee" ? (
              ""
            ) : (
              <div className=" mb-3">
                <button
                  className={styles.buttonHire}
                  onClick={() => Router.push(`/hire/${user.id}`)}
                >
                  Hire
                </button>
              </div>
            )}

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
                <span> {user.email}</span>
              </div>
              <div>
                <IoLogoInstagram />
                <span>@{user.instagram}</span>
              </div>
              <div>
                <IoLogoGithub />
                <span>@{user.github}</span>
              </div>
              <div>
                <IoLogoGitlab />
                <span>@{user.gitlab}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`mx-xl-4 container h-100 mt-xl-0 mt-3`}
          style={{ flex: 4 }}
        >
          <div className={styles.userPorto}>
            <div className={`pt-xl-3 container ${styles.portoMenu}`}>
              <span
                className={menuPorto ? styles.menuActive : styles.notActive}
                style={{ cursor: "pointer" }}
                onClick={() => handleMenu("portofolio")}
              >
                Portofolio
              </span>
              <span
                className={
                  menuPengalaman ? styles.menuActive : styles.notActive
                }
                style={{ cursor: "pointer" }}
                onClick={() => handleMenu("pengalaman")}
              >
                Pengalaman Kerja
              </span>
            </div>
            <div className={` mt-3 ${menuPorto ? "" : "d-none"} `}>
              {portofolio.map((item, index) => (
                <div
                  key={index}
                  className={`d-inline-block flex-column text-center mx-3 my-3 ${styles.portoMain}`}
                >
                  <img
                    className=" d-block mb-3 m-auto"
                    style={{
                      width: "220px",
                      height: "140px",
                    }}
                    src={cloudinaryImg + item.image}
                    alt=""
                  />
                  <span>{item.applicationName}</span>
                </div>
              ))}
            </div>
            <div
              className={`container d-flex flex-column w-100 ${
                menuPengalaman ? "" : "d-none"
              }`}
            >
              {experience.map((item, index) => (
                <div className=" d-flex mt-4" key={index}>
                  <img
                    style={{ width: "65px", height: "65px" }}
                    src="../../work.png"
                    alt=""
                  />
                  <div className=" d-flex flex-column ms-4">
                    <span className="" style={{ fontSize: "20px" }}>
                      {item.jobDesc}
                    </span>
                    <span style={{ fontSize: "18px" }}>{item.companyName}</span>
                    <div>
                      <span style={{ fontSize: "16px", color: "#9EA0A5" }}>
                        {`${item.entryDate.split("T")[0]} - ${
                          item.outDate.split("T")[0]
                        }`}
                      </span>
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
                    <span style={{ fontSize: "14px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum erat orci, mollis nec gravida sed, ornare quis
                      urna. Curabitur eu lacus fringilla, vestibulum risus at.
                    </span>
                  </div>
                </div>
              ))}
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
