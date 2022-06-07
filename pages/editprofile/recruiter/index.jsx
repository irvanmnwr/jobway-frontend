import React, { useEffect, useState } from "react";
// import Footer from "../../../components/Footer";
import Image from "next/image";
import photo from "../../../public/photoProfile.jpg";
import Editprofilealert from "../../../component/Editprofilealert";
import Editprofilephoto from "../../../component/Editprofilephoto";
import { useRouter } from "next/router";
import { BsPencil } from "react-icons/bs";
import { BiMap, BiPhone } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../component/Footer";
import { updateUser, getUserById } from "../../../store/actions/profile";

import Navbar from "../../../component/Navbar";

export default function Recruiter() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form, setForm] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const dataUser = useSelector((state) => state.profile.data[0]); //integrasi login
  const getDataByUserId = async () => {
    try {
      await dispatch(getUserById(dataUser.id));
    } catch (error) {
      console.log(error);
    }
  };
  const handleBack = () => {
    router.push("/profile/recruiterPage");
  };
  const handleChangeForm = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      for (const data in form) {
        formData.append(data, form[data]);
      }
      await dispatch(updateUser(dataUser.id, formData));
      getDataByUserId();
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <Editprofilealert setShowAlert={setShowAlert} showAlert={showAlert} />
      <Editprofilephoto setShowImage={setShowImage} showImage={showImage} setShowAlert={setShowAlert} id={dataUser.id} />
      <div className="profile__master">
        <div className="backgroundPart">
          <div className="container">
            <div className="row recruiter__main">
              <div className="col-3">
                <div className="recruiter__cardProfile">
                  <div className="recruiter__photo">
                    <Image src={dataUser.image ? process.env.CLAUDINARY + dataUser.image : photo} alt="photoProfile" width={120} height={120} className="recruiter__photoBorder" />
                  </div>
                  <button className="recruiter__editButton" onClick={() => setShowImage(true)}>
                    <BsPencil /> Edit
                  </button>
                  <div className="recruiter__profileInfo">
                    <p className="recruiter__name">{dataUser.company ? dataUser.company : "Data perusahaan belum diisi"}</p>
                    <p className="recruiter__job">{dataUser.companyType ? dataUser.companyType : "Data bidang belum diisi"}</p>
                    <p className="recruiter__locationPhone">
                      <BiMap /> {dataUser.domicilie ? dataUser.domicilie : "Data domisili belum diisi"}
                    </p>
                    <p className="recruiter__locationPhone">{dataUser.description ? dataUser.description : "Deskripsi belum diisi"}</p>
                  </div>
                </div>
                <button className="recruiter__buttonCardProfile" onClick={handleSubmit}>
                  Simpan
                </button>
                <button className="recruiter__buttonCardProfile" onClick={handleBack}>
                  Kembali
                </button>
              </div>

              <div className="col-8">
                <div className="recruiter__cardEdit">
                  <h1 className="recruiter__tittleCard">Data Diri</h1>
                  <hr />
                  <form>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Nama Perusahaan</h1>
                      <input type="text" placeholder={dataUser.company ? dataUser.company : "Masukan Nama Perusahaan"} className="recruiter__inputForm" name="company" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Bidang</h1>
                      <input type="text" placeholder={dataUser.companyType ? dataUser.companyType : "Masukan Bidang Perusahaan ex: finance"} className="recruiter__inputForm" name="companyType" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Domisili</h1>
                      <input type="text" placeholder={dataUser.domicilie ? dataUser.domicilie : "Masukan Domisili"} className="recruiter__inputForm" name="domicilie" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Deskripsi Singkat</h1>
                      <input type="text" placeholder={dataUser.description ? dataUser.description : "Tuliskan Deskripsi Singkat Anda"} className="recruiter__inputForm recruiter__Description" name="description" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Email</h1>
                      <input type="email" placeholder={dataUser.email ? dataUser.email : "Masukan Email"} className="recruiter__inputForm" name="email" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Instagram</h1>
                      <input type="text" placeholder={dataUser.instagram ? dataUser.instagram : "Masukan Username IG"} className="recruiter__inputForm" name="instagram" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Nomor Telepon</h1>
                      <input type="text" placeholder={dataUser.noTelp ? dataUser.noTelp : "Masukan Nomor Telepon"} className="recruiter__inputForm" name="noTelp" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Linkedin</h1>
                      <input type="text" placeholder={dataUser.linkedIn ? dataUser.linkedIn : "Masukan Nama Linkedin"} className="recruiter__inputForm" name="linkedIn" onChange={handleChangeForm} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
