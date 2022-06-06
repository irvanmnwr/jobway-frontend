import React, { useEffect, useState } from "react";
// import Footer from "../../../components/Footer";
// import Menu from "../../../components/Menu";
import Image from "next/image";
import photo from "../../../public/photoProfile.jpg";
import upload from "../../../public/uploadJob.png";
// import { useRouter } from "next/router";
// import Cookies from "js-cookie";
import Editprofilealert from "../../../component/Editprofilealert";
import Editprofilepassword from "../../../component/Editprofilepassword";
import Editprofilephoto from "../../../component/Editprofilephoto";
import { BsPencil } from "react-icons/bs";
import { BiMap, BiPhone, BiTrash } from "react-icons/bi";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "../../../utils/axios";
// import Edit from "../../../components/Edit";
// import { getUserById } from "../../../stores/actions/user";
// import Upload from "../../../components/upload";

export default function Employer() {
  const [showAlert, setShowAlert] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [personalform, setPersonalform] = useState({});
  const [skillform, setSkillform] = useState([]);
  const [workform, setWorkform] = useState({});
  const [changePass, setChangePass] = useState(false);
  const handleChangePersonalForm = (e) => {
    e.preventDefault();
    setPersonalform({ ...personalform, [e.target.name]: e.target.value });
  };
  const handlePersonalForm = async (e) => {
    try {
      e.preventDefault();
      console.log(personalform);
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeSkillForm = (event) => {
    if (event.key === "Enter") {
      setSkillform([...skillform, event.target.value]);
      console.log(skillform);
    }
  };
  const handleSkillForm = async (e) => {
    try {
      e.preventDefault();
      console.log(skillform);
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteListSkill = (data) => {
    const indexTarget = skillform.indexOf(data);
    setSkillform([...skillform.slice(0, indexTarget), ...skillform.slice(indexTarget + 1, skillform.length)]);
    setShowAlert(true);
  };
  const handleChangeWorkForm = (e) => {
    e.preventDefault();
    setWorkform({ ...workform, [e.target.name]: e.target.value });
  };
  const handleWorkForm = async (e) => {
    try {
      e.preventDefault();
      console.log(workform);
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Editprofilealert setShowAlert={setShowAlert} showAlert={showAlert} />
      <Editprofilepassword setShowChangePassword={setShowChangePassword} showChangePassword={showChangePassword} setShowAlert={setShowAlert} />
      <Editprofilephoto setShowImage={setShowImage} showImage={showImage} setShowAlert={setShowAlert} />
      <div className="profile__main">
        <div className="backgroundPart">
          <div className="container">
            <div className="row employer__main">
              <div className="col-3">
                <div className="employer__cardProfile">
                  <div className="employer__photo">
                    <Image src={photo} alt="photoProfile" width={120} height={120} className="employer__photoBorder" />
                  </div>
                  <button className="employer__editButton" onClick={() => setShowImage(true)}>
                    <BsPencil /> Edit
                  </button>
                  <div className="employer__profileInfo">
                    <p className="employer__name">Louis Tomlinson</p>
                    <p className="employer__job">Web Developer</p>
                    <p className="employer__typeJob">Freelancer</p>
                    <p className="employer__locationPhone">
                      <BiMap /> Purwokerto, Jawa Tengah
                    </p>
                    <p className="employer__locationPhone">
                      <BiPhone /> 0812 - 3456 - 789
                    </p>
                    <p className="employer__locationPhone">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                  </div>
                </div>
                <button className="employer__buttonCardProfile" onClick={() => setShowChangePassword(true)}>
                  Ubah Password
                </button>
                <button className="employer__buttonCardProfile">Kembali</button>
              </div>

              <div className="col-8">
                <div className="employer__cardEdit">
                  <h1 className="employer__tittleCard">Data Diri</h1>
                  <hr />
                  <form>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Nama Lengkap</h1>
                      <input type="text" placeholder="Masukan Nama Lengkap" className="employer__inputForm" name="fullName" onChange={handleChangePersonalForm} />
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Job Desk</h1>
                      <input type="text" placeholder="Masukan Job Desk" className="employer__inputForm" name="jobdesk" onChange={handleChangePersonalForm} />
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Domisili</h1>
                      <input type="text" placeholder="Masukan Domisili" className="employer__inputForm" name="domain" onChange={handleChangePersonalForm} />
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Nomor Telefon</h1>
                      <input type="text" placeholder="Masukan Nomor Telefon" className="employer__inputForm" name="noTelp" onChange={handleChangePersonalForm} />
                    </div>
                    <div className="employer__setForm">
                      <div className="row">
                        <div className="col-4">
                          <h1 className="employer__labelForm">Instagram</h1>
                          <input type="text" placeholder="Masukan Username IG" className="employer__inputForm" name="instagram" onChange={handleChangePersonalForm} />
                        </div>
                        <div className="col-4">
                          <h1 className="employer__labelForm">Github</h1>
                          <input type="text" placeholder="Masukan Username Github" className="employer__inputForm" name="github" onChange={handleChangePersonalForm} />
                        </div>
                        <div className="col-4">
                          <h1 className="employer__labelForm">Gitlab</h1>
                          <input type="text" placeholder="Masukan Username Gitlab" className="employer__inputForm" name="gitlab" onChange={handleChangePersonalForm} />
                        </div>
                      </div>
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Deskripsi Singkat</h1>
                      <input type="text" placeholder="Tuliskan Deskripsi Singkat Anda" className="employer__inputForm employer__Description" name="description" onChange={handleChangePersonalForm} />
                    </div>
                    <button className="employer__buttonInfoProfile" onClick={handlePersonalForm}>
                      Simpan
                    </button>
                  </form>
                </div>
                <div className="employer__skillEdit">
                  <h1 className="employer__tittleCard">Skill</h1>
                  <hr />
                  <form>
                    <div className="row">
                      <div className="col-10">
                        <div className="employer__setForm">
                          <input type="text" placeholder="Masukan Skill" className="employer__inputForm" name="skill" onKeyPress={handleChangeSkillForm} />
                        </div>
                      </div>
                      <div className="col-2">
                        <button className="employer__buttonSkillProfile" onClick={handleSkillForm}>
                          Simpan
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="row mx-1">
                    {skillform
                      ? skillform.map((item) => (
                          <div className="col-auto employer__skillList mb-1">
                            <div className="row">
                              <div className="col-7">
                                <p>{item}</p>
                              </div>
                              <div className="col-4">
                                <button className="employer__deleteList" onClick={() => handleDeleteListSkill(item)}>
                                  <BiTrash />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
                <div className="employer__workEdit">
                  <h1 className="employer__tittleCard">Pengalaman Kerja</h1>
                  <hr />
                  <form>
                    <div className="row">
                      <div className="col-6">
                        <div className="employer__setForm">
                          <h1 className="employer__labelForm">Nama Perusahaan</h1>
                          <input type="text" placeholder="Masukan Nama Perusahaan" className="employer__inputForm" name="company" onChange={handleChangeWorkForm} />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="employer__setForm">
                          <h1 className="employer__labelForm">Posisi</h1>
                          <input type="text" placeholder="Masukan Posisi" className="employer__inputForm" name="position" onChange={handleChangeWorkForm} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="employer__setForm">
                          <h1 className="employer__labelForm">Tanggal Masuk</h1>
                          <input type="date" placeholder="Masukan Tanggal Masuk" className="employer__inputForm" name="dateIn" onChange={handleChangeWorkForm} />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="employer__setForm">
                          <h1 className="employer__labelForm">Tanggal Keluar</h1>
                          <input type="date" placeholder="Masukan Tanggal Keluar" className="employer__inputForm" name="dateOut" onChange={handleChangeWorkForm} />
                        </div>
                      </div>
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Deskripsi Singkat</h1>
                      <input type="text" placeholder="Tuliskan Deskripsi Singkat Pekerjaan Anda" className="employer__inputForm employer__Description" name="jobDescription" onChange={handleChangeWorkForm} />
                      <hr />
                    </div>
                    <button className="employer__buttonJob" onClick={handleWorkForm}>
                      Tambahkan Pengalaman Kerja
                    </button>
                  </form>
                </div>
                <div className="employer__portfolioEdit">
                  <h1 className="employer__tittleCard">Portfolio</h1>
                  <hr />
                  <form>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Nama Aplikasi</h1>
                      <input type="text" placeholder="Masukan Nama Aplikasi" className="employer__inputForm" name="appName" />
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Link Repository</h1>
                      <input type="text" placeholder="Masukan Link Repository" className="employer__inputForm" name="repoName" />
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Upload Gambar</h1>
                      <div className="employer__uploadImagePorto">
                        <Image src={upload} alt="porto" width={820} height={400} />
                      </div>
                      <hr />
                    </div>
                    <button className="employer__buttonJob">Tambahkan Portfolio</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
