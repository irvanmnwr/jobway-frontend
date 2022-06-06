import React, { useEffect, useState } from "react";
import Image from "next/image";
import photo from "../../../public/photoProfile.jpg";
import upload from "../../../public/uploadJob.png";
import { useRouter } from "next/router";
import Editprofilealert from "../../../component/Editprofilealert";
import Editprofilepassword from "../../../component/Editprofilepassword";
import Editprofilephoto from "../../../component/Editprofilephoto";
import Footer from "../../../component/Footer";
import { BsPencil } from "react-icons/bs";
import { BiMap, BiPhone, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, getUserById, createExperience } from "../../../store/actions/profile";

export default function Employer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [personalform, setPersonalform] = useState({});
  const [workform, setWorkform] = useState({});
  const [changePass, setChangePass] = useState(false);
  const getDataByUserId = async () => {
    try {
      await dispatch(getUserById(dataUser.id));
    } catch (error) {
      console.log(error);
    }
  };
  const dataUser = useSelector((state) => state.profile.data[0]);
  console.log(dataUser);
  const [skillform, setSkillform] = useState(dataUser.skill ? dataUser.skill.split(",") : []);
  const handleChangePersonalForm = (e) => {
    e.preventDefault();
    setPersonalform({ ...personalform, [e.target.name]: e.target.value });
  };
  const handlePersonalForm = async (e) => {
    try {
      e.preventDefault();
      console.log(personalform);
      const formData = new FormData();
      for (const data in personalform) {
        formData.append(data, personalform[data]);
      }
      await dispatch(updateUser(dataUser.id, formData));
      getDataByUserId();
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
      const dataSkill = { skill: skillform.join(",") };
      const formData = new FormData();
      for (const data in dataSkill) {
        formData.append(data, dataSkill[data]);
      }
      await dispatch(updateUser(dataUser.id, formData));
      getDataByUserId();
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteListSkill = async (data) => {
    try {
      const indexTarget = skillform.indexOf(data);
      setSkillform([...skillform.slice(0, indexTarget), ...skillform.slice(indexTarget + 1, skillform.length)]);
      setShowAlert(true);
      console.log(skillform.length);
      const dataSkill = { skill: skillform.join(",") };
      console.log(dataSkill);
      const formData = new FormData();
      for (const data in dataSkill) {
        formData.append(data, dataSkill[data]);
      }
      await dispatch(updateUser(dataUser.id, formData));
      getDataByUserId();
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeWorkForm = (e) => {
    e.preventDefault();
    setWorkform({ ...workform, [e.target.name]: e.target.value });
  };
  const handleWorkForm = async (e) => {
    try {
      e.preventDefault();
      await dispatch(createExperience(workform));
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Editprofilealert setShowAlert={setShowAlert} showAlert={showAlert} />
      <Editprofilepassword setShowChangePassword={setShowChangePassword} showChangePassword={showChangePassword} setShowAlert={setShowAlert} id={dataUser.id} />
      <Editprofilephoto setShowImage={setShowImage} showImage={showImage} setShowAlert={setShowAlert} id={dataUser.id} />
      <div className="profile__main">
        <div className="backgroundPart">
          <div className="container">
            <div className="row employer__main">
              <div className="col-3">
                <div className="employer__cardProfile">
                  <div className="employer__photo">
                    <Image src={dataUser.image ? process.env.CLAUDINARY + dataUser.image : photo} alt="photoProfile" width={120} height={120} className="employer__photoBorder" />
                  </div>
                  <button className="employer__editButton" onClick={() => setShowImage(true)}>
                    <BsPencil /> Edit
                  </button>
                  <div className="employer__profileInfo">
                    <p className="employer__name">{dataUser.name}</p>
                    <p className="employer__job">{dataUser.jobDesc ? dataUser.jobDesc : "Data job des belum diisi"}</p>
                    <p className="employer__typeJob">{dataUser.typeEmployee ? dataUser.typeEmployee : "Data tipe job belum diisi"}</p>
                    <p className="employer__locationPhone">
                      <BiMap /> {dataUser.domicilie ? dataUser.domicilie : "Data domisili belum diisi"}
                    </p>
                    <p className="employer__locationPhone">
                      <BiPhone /> {dataUser.noTelp ? dataUser.noTelp : "Nomor belum ditambah"}
                    </p>
                    <p className="employer__locationPhone">{dataUser.description ? dataUser.description : "Deskripsi belum diisi"}</p>
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
                      <input type="text" placeholder="Masukan Nama Lengkap" className="employer__inputForm" name="name" onChange={handleChangePersonalForm} />
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Job Desk</h1>
                      <input type="text" placeholder="Masukan Job Desk" className="employer__inputForm" name="jobDesc" onChange={handleChangePersonalForm} />
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Domisili</h1>
                      <input type="text" placeholder="Masukan Domisili" className="employer__inputForm" name="domicilie" onChange={handleChangePersonalForm} />
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Nomor Telepon</h1>
                      <input type="text" placeholder="Masukan Nomor Telefon" className="employer__inputForm" name="noTelp" onChange={handleChangePersonalForm} />
                    </div>
                    {/* <div className="employer__setForm">
                      <h1 className="employer__labelForm">Tipe Pekerjaan</h1>
                      <input type="text" placeholder="Masukan Nomor Telefon" className="employer__inputForm" name="typeEmployee" onChange={handleChangePersonalForm} />
                    </div> */}
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
                          <div className="col-auto employer__skillList mb-1" key={item}>
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
                          <input type="text" placeholder="Masukan Nama Perusahaan" className="employer__inputForm" name="companyName" onChange={handleChangeWorkForm} />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="employer__setForm">
                          <h1 className="employer__labelForm">Posisi</h1>
                          <input type="text" placeholder="Masukan Posisi" className="employer__inputForm" name="jobDesc" onChange={handleChangeWorkForm} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="employer__setForm">
                          <h1 className="employer__labelForm">Tanggal Masuk</h1>
                          <input type="date" placeholder="Masukan Tanggal Masuk" className="employer__inputForm" name="entryDate" onChange={handleChangeWorkForm} />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="employer__setForm">
                          <h1 className="employer__labelForm">Tanggal Keluar</h1>
                          <input type="date" placeholder="Masukan Tanggal Keluar" className="employer__inputForm" name="outDate" onChange={handleChangeWorkForm} />
                        </div>
                      </div>
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Deskripsi Singkat</h1>
                      <input type="text" placeholder="Tuliskan Deskripsi Singkat Pekerjaan Anda" className="employer__inputForm employer__Description" name="description" onChange={handleChangeWorkForm} />
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
      <Footer />
    </div>
  );
}
