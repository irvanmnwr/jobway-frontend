import React, { useEffect, useState } from "react";
// import Footer from "../../../components/Footer";
// import Menu from "../../../components/Menu";
import Image from "next/image";
import photo from "../../../public/photoProfile.jpg";
import upload from "../../../public/uploadJob.png";
import { useRouter } from "next/router";
// import Cookies from "js-cookie";
import { BsPencil } from "react-icons/bs";
import { BiMap, BiPhone } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
// import axios from "../../../utils/axios";
// import Edit from "../../../components/Edit";
// import { getUserById } from "../../../stores/actions/user";
// import Upload from "../../../components/upload";

export default function Recruiter() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form, setForm] = useState({});
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
      console.log(form);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profile__main">
      <div className="backgroundPart">
        <div className="container">
          <div className="row recruiter__main">
            <div className="col-3">
              <div className="recruiter__cardProfile">
                <div className="recruiter__photo">
                  <Image src={photo} alt="photoProfile" width={120} height={120} className="recruiter__photoBorder" />
                </div>
                <button className="recruiter__editButton">
                  <BsPencil /> Edit
                </button>
                <div className="recruiter__profileInfo">
                  <p className="recruiter__name">Louis Tomlinson</p>
                  <p className="recruiter__job">Web Developer</p>
                  <p className="recruiter__locationPhone">
                    <BiMap /> Purwokerto, Jawa Tengah
                  </p>
                  <p className="recruiter__locationPhone">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
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
                    <input type="text" placeholder="Masukan Nama Perusahaan" className="recruiter__inputForm" name="name" onChange={handleChangeForm} />
                  </div>
                  <div className="recruiter__setForm">
                    <h1 className="recruiter__labelForm">Bidang</h1>
                    <input type="text" placeholder="Masukan Bidang Perusahaan ex: finance" className="recruiter__inputForm" name="field" onChange={handleChangeForm} />
                  </div>
                  <div className="recruiter__setForm">
                    <h1 className="recruiter__labelForm">Domisili</h1>
                    <input type="text" placeholder="Masukan Domisili" className="recruiter__inputForm" name="domain" onChange={handleChangeForm} />
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
                    <input type="text" placeholder="Masukan Nama Linkedin" className="recruiter__inputForm" name="linkedin" onChange={handleChangeForm} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
