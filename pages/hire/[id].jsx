import React, { useEffect, useState } from "react";
import styles from "./Hire.module.css";
import Footer from "../../component/Footer";
import axios from "../../utils/axios";
import { useSelector } from "react-redux";
import photo from "../../public/photoProfile.jpg";
import { useRouter } from "next/router";
import HireAlert from "component/HireAlert";
import Navbar from "../../component/Navbar";

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
export default function Portofolio() {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [dataEmployee, setDataEmployee] = useState({});
  const [form, setForm] = useState({});
  const [dataEmployeeId, setDataEmployeeId] = useState({});
  const [isRendering, setIsRendering] = useState(true);

  const recruiterId = useSelector((state) => state.profile.data[0].id);

  useEffect(() => {
    getDataUser();
  }, [dataEmployeeId]);

  if (router.query.id && isRendering) {
    setDataEmployeeId(router.query.id);
    setIsRendering(false);
  }
  const getDataUser = async () => {
    try {
      setForm({
        ...form,
        employeeId: dataEmployeeId,
      });
      console.log(dataEmployee);
      const dataEmployee = await axios.get(`/user/${dataEmployeeId}`);
      setDataEmployee(dataEmployee.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  let skills = [];
  try {
    skills = dataEmployee.skill.split(",");
  } catch (error) {
    skills = ["python", "laraver", "Golang", "javascript", "php", "html", "c++", "kotlin", "swift"];
  }
  const handleSubject = (e) => {
    setForm({ ...form, subject: e.target.value });
  };
  const handleMessage = (e) => {
    setForm({ ...form, message: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      console.log(form);
      const resultMail = await axios.post(`/hiring/${recruiterId}`, form);
      console.log(resultMail);
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container} style={{ background: " rgba(246, 247, 248, 1)" }}>
      <Navbar />
      <HireAlert setShowAlert={setShowAlert} showAlert={showAlert} />
      <div className=" container d-xl-flex pt-4 pt-xl-5">
        <div className={`${styles.userProfile} container-xl `}>
          <div className=" d-flex justify-content-center mt-xl-4  mb-xl-2  pt-4 pt-xl-">
            <img style={{ width: "100px" }} src={dataEmployee.image ? process.env.CLAUDINARY + dataEmployee.image : photo} alt="" />
          </div>
          <div className=" d-flex flex-column">
            <div className={`d-flex flex-column ${styles.detailUser}`}>
              <span className=" fw-bold fs-5 my-3">{dataEmployee.name}</span>
              <span className="" style={{ fontSize: "14px", lineHeight: "24px" }}>
                {dataEmployee.jobDesc}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#9EA0A5",
                }}
              >
                {dataEmployee.typeEmployee}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#9EA0A5",
                }}
              >
                {dataEmployee.domicilie}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#9EA0A5",
                }}
              >
                {dataEmployee.noTelp}
              </span>
              <div className=" my-3">
                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "#9EA0A5",
                  }}
                >
                  {dataEmployee.description}
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
        <div className={`mx-xl-4 container h-100 mt-xl-0 mt-3`} style={{ flex: 4 }}>
          <div className={styles.formInput}>
            <div className=" d-flex flex-column mb-4">
              <span style={{ fontSize: "32px", marginBottom: "16px" }}>Hubungi {dataEmployee.name}</span>
              <span style={{ fontSize: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</span>
            </div>
            <div className=" d-flex flex-column mb-3">
              <span style={{ fontSize: "12px" }}>Tujuan tentang pesan ini</span>
              <select
                name=""
                id=""
                style={{
                  height: "50px",
                  border: "1px solid rgba(226, 229, 237, 1)",
                }}
                onChange={handleSubject}
              >
                <option value=""></option>
                <option value="Offering to Collaborate">Offering to Collaborate</option>
                <option value=">Offering to Join The Company">Offering to Join The Company</option>
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
                style={{
                  border: "1px solid rgba(226, 229, 237, 1)",
                }}
                onChange={handleMessage}
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
                onClick={handleSubmit}
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
