import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import photo from "../../../public/photoProfile.jpg";
import upload from "../../../public/upload.png";
import uploadFiles from "../../../public/uploadFiles.png";
import uploadSizes from "../../../public/uploadSizes.png";
import { useRouter } from "next/router";
import Editprofilealert from "../../../component/Editprofilealert";
import Editprofilepassword from "../../../component/Editprofilepassword";
import Editprofilephoto from "../../../component/Editprofilephoto";
import Footer from "../../../component/Footer";
import { BsPencil } from "react-icons/bs";
import { BiMap, BiPhone, BiTrash, BiEditAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, getUserById } from "../../../store/actions/profile";
import { getPortfolioById, updatePortfolio, deletePortfolio, createPortfolio } from "../../../store/actions/portfolio";
import { getExperienceById, updateExperience, createExperience, deleteExperience } from "../../../store/actions/experience";
import Navbar from "../../../component/Navbar";

export default function Employer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [idExperience, setIdExperience] = useState(0);
  const [idPortfolio, setIdPortfolio] = useState(0);
  const [image, setImage] = useState({});
  const [skill, setSkill] = useState();
  const [workform, setWorkform] = useState({ companyName: "", jobDesc: "", entryDate: "", outDate: "", description: "" });
  const [portfolioform, setPortfolioform] = useState({ applicationName: "", repositoryName: "" });
  const [changePass, setChangePass] = useState(false);
  const [files, setFiles] = useState([{ preview: upload }]);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const getDataByUserId = async () => {
    try {
      await dispatch(getUserById(dataUser.id));
    } catch (error) {
      console.log(error);
    }
  };
  const getExperienceByUserId = async () => {
    try {
      await dispatch(getExperienceById(dataUser.id));
    } catch (error) {
      console.log(error);
    }
  };
  const getPortfolioByUserId = async () => {
    try {
      await dispatch(getPortfolioById(dataUser.id));
    } catch (error) {
      console.log(error);
    }
  };
  const dataUser = useSelector((state) => state.profile.data[0]);
  const dataExperience = useSelector((state) => state.experience.data);
  const dataPortfolio = useSelector((state) => state.portfolio.data);
  console.log(dataUser);
  console.log(dataExperience);
  console.log(dataPortfolio);
  const [personalform, setPersonalform] = useState({
    name: dataUser.name,
    jobDesc: dataUser.jobDesc ? dataUser.jobDesc : "",
    domicilie: dataUser.domicilie ? dataUser.domicilie : "",
    noTelp: dataUser.noTelp ? dataUser.noTelp : "",
    typeEmployee: dataUser.typeEmployee ? dataUser.typeEmployee : "",
    instagram: dataUser.instagram ? dataUser.instagram : "",
    github: dataUser.github ? dataUser.github : "",
    gitlab: dataUser.gitlab ? dataUser.gitlab : "",
    description: dataUser.description ? dataUser.description : "",
  });
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
      await getDataByUserId();
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
      console.log(dataSkill);
      const formData = new FormData();
      for (const data in dataSkill) {
        formData.append(data, dataSkill[data]);
      }
      await dispatch(updateUser(dataUser.id, formData));
      setSkill("");
      await getDataByUserId();
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
      const dataSkill = { skill: skillform.join(",") };
      const formData = new FormData();
      for (const data in dataSkill) {
        formData.append(data, dataSkill[data]);
      }
      await dispatch(updateUser(dataUser.id, formData));
      await getDataByUserId();
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
      if (dataExperience.length === 4) {
        alert("Data Experience Maksimal 4");
        throw TypeError("data is deny");
      }
      await dispatch(createExperience(workform));
      await getExperienceByUserId();
      setWorkform({ companyName: "", jobDesc: "", entryDate: "", outDate: "", description: "" });
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateWorkForm = async (e) => {
    try {
      e.preventDefault();
      await dispatch(updateExperience(idExperience, workform));
      await getExperienceByUserId();
      setIdExperience(0);
      setWorkform({ companyName: "", jobDesc: "", entryDate: "", outDate: "", description: "" });
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteExperience = async (event, id) => {
    try {
      event.preventDefault();
      await dispatch(deleteExperience(id));
      await getExperienceByUserId();
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateExperience = async (event, id) => {
    try {
      event.preventDefault();
      if (idExperience === id) {
        setIdExperience(0);
      } else {
        setIdExperience(id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangePortfolioForm = (e) => {
    e.preventDefault();
    setPortfolioform({ ...portfolioform, [e.target.name]: e.target.value });
  };
  const handlePortfolioForm = async (e) => {
    try {
      e.preventDefault();
      if (files[0].preview === upload) {
        alert("Wajib Memasukan Gambar");
        throw TypeError("data is uncomplete");
      }
      if (dataPortfolio.length === 4) {
        alert("Data Portfolio Maksimal 4");
        throw TypeError("data is deny");
      }
      const formPortfolio = { ...portfolioform, image: files[0] };
      await dispatch(createPortfolio(formPortfolio));
      await getPortfolioByUserId();
      setPortfolioform({ applicationName: "", repositoryName: "" });
      setFiles([{ preview: upload }]);
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdatePortfolioForm = async (e) => {
    try {
      e.preventDefault();
      const formPortfolio = { ...portfolioform, image: files[0] };
      await dispatch(updatePortfolio(idPortfolio, formPortfolio));
      await getPortfolioByUserId();
      setIdPortfolio(0);
      setPortfolioform({ applicationName: "", repositoryName: "" });
      setFiles([{ preview: upload }]);
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeletePortfolio = async (event, id) => {
    try {
      event.preventDefault();
      await dispatch(deletePortfolio(id));
      await getPortfolioByUserId();
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdatePortfolio = async (event, id) => {
    try {
      event.preventDefault();
      if (idPortfolio === id) {
        setIdPortfolio(0);
      } else {
        setIdPortfolio(id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
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
                      <input type="text" value={personalform.name} placeholder="Masukan Nama Lengkap" className="employer__inputForm" name="name" onChange={handleChangePersonalForm} />
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Job Desk</h1>
                      <input type="text" value={personalform.jobDesc} placeholder="Masukan Job Desk" className="employer__inputForm" name="jobDesc" onChange={handleChangePersonalForm} />
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Domisili</h1>
                      <input type="text" value={personalform.domicilie} placeholder="Masukan Domisili" className="employer__inputForm" name="domicilie" onChange={handleChangePersonalForm} />
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Nomor Telepon</h1>
                      <input type="text" value={personalform.noTelp} placeholder="Masukan Nomor Telefon" className="employer__inputForm" name="noTelp" onChange={handleChangePersonalForm} />
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Tipe Pekerjaan</h1>
                      <input type="text" value={personalform.typeEmployee} placeholder="Masukan Tipe Pekerjaan ex: Fulltime, Part-Time" className="employer__inputForm" name="typeEmployee" onChange={handleChangePersonalForm} />
                    </div>
                    <div className="employer__setForm">
                      <div className="row">
                        <div className="col-4">
                          <h1 className="employer__labelForm">Instagram</h1>
                          <input type="text" value={personalform.instagram} placeholder="Masukan Username IG" className="employer__inputForm" name="instagram" onChange={handleChangePersonalForm} />
                        </div>
                        <div className="col-4">
                          <h1 className="employer__labelForm">Github</h1>
                          <input type="text" value={personalform.github} placeholder="Masukan Username Github" className="employer__inputForm" name="github" onChange={handleChangePersonalForm} />
                        </div>
                        <div className="col-4">
                          <h1 className="employer__labelForm">Gitlab</h1>
                          <input type="text" value={personalform.gitlab} placeholder="Masukan Username Gitlab" className="employer__inputForm" name="gitlab" onChange={handleChangePersonalForm} />
                        </div>
                      </div>
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Deskripsi Singkat</h1>
                      <input type="text" value={personalform.description} placeholder="Tuliskan Deskripsi Singkat Anda" className="employer__inputForm employer__Description" name="description" onChange={handleChangePersonalForm} />
                      <hr />
                    </div>
                    <button className="employer__buttonJob" onClick={handlePersonalForm}>
                      Simpan
                    </button>
                  </form>
                </div>
                <div className="employer__skillEdit">
                  <h1 className="employer__tittleCard">Keterampilan</h1>
                  <hr />
                  <form>
                    <div className="row">
                      <div className="col-10">
                        <div className="employer__setForm">
                          <input type="text" placeholder="Masukan Keterampilan dan ENTER untuk Menambah" value={skill} className="employer__inputForm" name="skill" onKeyPress={handleChangeSkillForm} />
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
                          <input type="text" value={workform.companyName} placeholder="Masukan Nama Perusahaan" className="employer__inputForm" name="companyName" onChange={handleChangeWorkForm} />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="employer__setForm">
                          <h1 className="employer__labelForm">Posisi</h1>
                          <input type="text" value={workform.jobDesc} placeholder="Masukan Posisi" className="employer__inputForm" name="jobDesc" onChange={handleChangeWorkForm} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="employer__setForm">
                          <h1 className="employer__labelForm">Tanggal Masuk</h1>
                          <input type="date" value={workform.entryDate} placeholder="Masukan Tanggal Masuk" className="employer__inputForm" name="entryDate" onChange={handleChangeWorkForm} />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="employer__setForm">
                          <h1 className="employer__labelForm">Tanggal Keluar</h1>
                          <input type="date" value={workform.outDate} placeholder="Masukan Tanggal Keluar" className="employer__inputForm" name="outDate" onChange={handleChangeWorkForm} />
                        </div>
                      </div>
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Deskripsi Singkat</h1>
                      <input type="text" value={workform.description} placeholder="Tuliskan Deskripsi Singkat Pekerjaan Anda" className="employer__inputForm employer__Description" name="description" onChange={handleChangeWorkForm} />
                      <hr />
                    </div>
                    <button className="employer__buttonJob" onClick={idExperience === 0 ? handleWorkForm : handleUpdateWorkForm}>
                      {idExperience === 0 ? "Tambahkan Pengalaman Kerja" : "Update Pengalaman Kerja"}
                    </button>
                    <hr />
                    <div className="employer__experienceSet">
                      {dataExperience
                        ? dataExperience.map((item) => (
                            <div className={item.id === idExperience ? "employer__experienceListActive mb-2" : "employer__experienceList mb-2"} key={item.id}>
                              <div className="row">
                                <div className="col-7">
                                  <p>{item.jobDesc + " di " + item.companyName}</p>
                                </div>
                                <div className="col-2">
                                  <button className="employer__deleteList" onClick={(e) => handleUpdateExperience(e, item.id)}>
                                    <BiEditAlt />
                                  </button>
                                </div>
                                <div className="col-2">
                                  <button className="employer__deleteList" onClick={(e) => handleDeleteExperience(e, item.id)}>
                                    <BiTrash />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))
                        : null}
                    </div>
                  </form>
                </div>
                <div className="employer__portfolioEdit">
                  <h1 className="employer__tittleCard">Portofolio</h1>
                  <hr />
                  <form>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Nama Aplikasi</h1>
                      <input type="text" value={portfolioform.applicationName} placeholder="Masukan Nama Aplikasi" className="employer__inputForm" name="applicationName" onChange={handleChangePortfolioForm} />
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Link Repository</h1>
                      <input type="text" value={portfolioform.repositoryName} placeholder="Masukan Link Repository" className="employer__inputForm" name="repositoryName" onChange={handleChangePortfolioForm} />
                    </div>
                    <div className="employer__setForm">
                      <h1 className="employer__labelForm">Upload Gambar</h1>
                      <div className="employer__uploadImagePorto" {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Image src={files[0].preview} alt="portfolio image" width={120} height={70} />
                        <p className="employer__textUpload1">Drag & Drop untuk Upload Gambar Aplikasi Mobile</p>
                        <p className="employer__textUpload2">Atau cari untuk mengupload file dari direktorimu.</p>
                        <Image src={uploadFiles} width={100} height={22} />
                        <Image src={uploadSizes} width={120} height={22} />
                      </div>
                      <hr />
                    </div>
                    <button className="employer__buttonJob mb-4" onClick={idPortfolio === 0 ? handlePortfolioForm : handleUpdatePortfolioForm}>
                      {idPortfolio === 0 ? "Tambahkan Portfolio" : "Update Portfolio"}
                    </button>
                    <div className="employer__experienceSet">
                      {dataPortfolio
                        ? dataPortfolio.map((item) => (
                            <div className={item.id === idPortfolio ? "employer__experienceListActive mb-2" : "employer__experienceList mb-2"} key={item.id}>
                              <div className="row">
                                <div className="col-7">
                                  <p>{"Nama Aplikasi : " + item.applicationName}</p>
                                </div>
                                <div className="col-2">
                                  <button className="employer__deleteList" onClick={(e) => handleUpdatePortfolio(e, item.id)}>
                                    <BiEditAlt />
                                  </button>
                                </div>
                                <div className="col-2">
                                  <button className="employer__deleteList" onClick={(e) => handleDeletePortfolio(e, item.id)}>
                                    <BiTrash />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))
                        : null}
                    </div>
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
