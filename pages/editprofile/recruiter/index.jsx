import React, { useEffect, useState } from "react";
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
  const [showAlert, setShowAlert] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const dataUser = useSelector((state) => state.profile.data[0]);
  const [form, setForm] = useState({
    company: dataUser.company ? dataUser.company : "",
    companyType: dataUser.companyType ? dataUser.companyType : "",
    domicilie: dataUser.domicilie ? dataUser.domicilie : "",
    description: dataUser.description ? dataUser.description : "",
    email: dataUser.email,
    instagram: dataUser.instagram ? dataUser.instagram : "",
    noTelp: dataUser.noTelp ? dataUser.noTelp : "",
    linkedIn: dataUser.linkedIn ? dataUser.linkedIn : "",
  });
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
                      <input type="text" value={form.company} placeholder="Masukan Nama Perusahaan" className="recruiter__inputForm" name="company" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Bidang</h1>
                      <input type="text" value={form.companyType} placeholder="Masukan Bidang Perusahaan ex: finance" className="recruiter__inputForm" name="companyType" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Domisili</h1>
                      <input type="text" value={form.domicilie} placeholder="Masukan Domisili" className="recruiter__inputForm" name="domicilie" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Deskripsi Singkat</h1>
                      <input type="text" value={form.description} placeholder="Tuliskan Deskripsi Singkat Anda" className="recruiter__inputForm recruiter__Description" name="description" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Email</h1>
                      <input type="email" value={form.email} placeholder="Masukan Email" className="recruiter__inputForm" name="email" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Instagram</h1>
                      <input type="text" value={form.instagram} placeholder="Masukan Username IG" className="recruiter__inputForm" name="instagram" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Nomor Telepon</h1>
                      <input type="text" value={form.noTelp} placeholder="Masukan Nomor Telepon" className="recruiter__inputForm" name="noTelp" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Linkedin</h1>
                      <input type="text" value={form.linkedIn} placeholder="Masukan Nama Linkedin" className="recruiter__inputForm" name="linkedIn" onChange={handleChangeForm} />
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
