import React, { useState } from "react";
import { BsFillBookmarkXFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateUser, getUserById } from "../../store/actions/profile";
import Image from "next/image";

export default function Editprofilephoto({ showImage, setShowImage, setShowAlert, id }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [uiImage, setUiImage] = useState(null);
  const getDataByUserId = async () => {
    try {
      await dispatch(getUserById(id));
    } catch (error) {
      console.log(error);
    }
  };
  const handleFormImage = (e) => {
    e.preventDefault();
    const { name, files } = event.target;
    setForm({ [name]: files[0] });
    setUiImage(URL.createObjectURL(files[0]));
  };
  const handleImage = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      for (const data in form) {
        formData.append(data, form[data]);
      }
      await dispatch(updateUser(id, formData));
      getDataByUserId();
      setShowImage(false);
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!showImage ? null : (
        <div className="edit__main">
          <div className="container">
            <div className="edit__card">
              <div className="row">
                <div className="col-10">
                  <h1 className="edit__tittle">Unggah Foto</h1>
                </div>
                <div className="col-2">
                  <button className="edit__close" onClick={() => setShowImage(false)}>
                    <BsFillBookmarkXFill size={50} />
                  </button>
                </div>
              </div>
              <p className="edit__des mb-4">Upload foto sebagai foto profil</p>
              <Image src={uiImage ? uiImage : "/photoProfile.jpg"} alt="uploded image" width={70} height={70} />
              <form>
                <h1 className="edit__label mt-4">Edit your photo profile</h1>
                <input type="file" className="edit__imageForm" name="image" onChange={handleFormImage} />
                <div className="edit__button">
                  <button className="edit__submitButton" onClick={handleImage}>
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
