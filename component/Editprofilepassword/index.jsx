import React, { useState } from "react";
import { BsFillBookmarkXFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { updatePasswordUser, getUserById } from "../../store/actions/profile";

export default function Editprofilepassword({ showChangePassword, setShowChangePassword, setShowAlert, id }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const handleFormEdit = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const getDataByUserId = async () => {
    try {
      await dispatch(getUserById(id));
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(updatePasswordUser(id, form));
      getDataByUserId();
      setShowChangePassword(false);
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!showChangePassword ? null : (
        <div className="edit__main">
          <div className="container">
            <div className="edit__card">
              <div className="row">
                <div className="col-10">
                  <h1 className="edit__tittle">Ubah Password</h1>
                </div>
                <div className="col-2">
                  <button className="edit__close" onClick={() => setShowChangePassword(false)}>
                    <BsFillBookmarkXFill size={50} />
                  </button>
                </div>
              </div>
              <p className="edit__des">Masukan Perubahan</p>
              <form>
                <h1 className="edit__label">Password Lama</h1>
                <input type="text" className="edit__input" name="currentPassword" placeholder="Masukan Password Lama" onChange={handleFormEdit} />
                <h1 className="edit__label">Password Baru</h1>
                <input type="text" className="edit__input" name="newPassword" placeholder="Masukan Password Baru" onChange={handleFormEdit} />
                <h1 className="edit__label">Konfirmasi Password Baru</h1>
                <input type="text" className="edit__input" name="confirmPassword" placeholder="Masukan Password Baru" onChange={handleFormEdit} />
                <div className="edit__button">
                  <button className="edit__submitButton" onClick={handleEdit}>
                    Ubah
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
