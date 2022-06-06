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
// import axios from "../../../utils/axios";
import { updateUser } from "../../../store/actions/profile";

export default function Recruiter() {
  const dispatch = useDispatch();
  const router = useRouter();
  const dataUser = useSelector((state) => state.auth.data[0]);
  console.log(dataUser);
  const [form, setForm] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [showImage, setShowImage] = useState(false);
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
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Editprofilealert setShowAlert={setShowAlert} showAlert={showAlert} />
      <Editprofilephoto setShowImage={setShowImage} showImage={showImage} setShowAlert={setShowAlert} />
      <div className="profile__main">
        <div className="backgroundPart">
          <div className="container">
            <div className="row recruiter__main">
              <div className="col-3">
                <div className="recruiter__cardProfile">
                  <div className="recruiter__photo">
                    <Image src={photo} alt="photoProfile" width={120} height={120} className="recruiter__photoBorder" />
                  </div>
                  <button className="recruiter__editButton" onClick={() => setShowImage(true)}>
                    <BsPencil /> Edit
                  </button>
                  <div className="recruiter__profileInfo">
                    <p className="recruiter__name">{dataUser.name}</p>
                    <p className="recruiter__job">{dataUser.typeEmployee ? dataUser.typeEmployee : "Data bidang belum diisi"}</p>
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
                      <input type="text" placeholder="Masukan Nama Perusahaan" className="recruiter__inputForm" name="company" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Bidang</h1>
                      <input type="text" placeholder="Masukan Bidang Perusahaan ex: finance" className="recruiter__inputForm" name="companyType" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Domisili</h1>
                      <input type="text" placeholder="Masukan Domisili" className="recruiter__inputForm" name="domicilie" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Deskripsi Singkat</h1>
                      <input type="text" placeholder="Tuliskan Deskripsi Singkat Anda" className="recruiter__inputForm recruiter__Description" name="description" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Email</h1>
                      <input type="email" placeholder="Masukan Email" className="recruiter__inputForm" name="email" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Instagram</h1>
                      <input type="text" placeholder="Masukan Username IG" className="recruiter__inputForm" name="instagram" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Nomor Telepon</h1>
                      <input type="text" placeholder="Masukan Nomor Telepon" className="recruiter__inputForm" name="noTelp" onChange={handleChangeForm} />
                    </div>
                    <div className="recruiter__setForm">
                      <h1 className="recruiter__labelForm">Linkedin</h1>
                      <input type="text" placeholder="Masukan Nama Linkedin" className="recruiter__inputForm" name="linkedIn" onChange={handleChangeForm} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
