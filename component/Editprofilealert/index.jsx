import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

function Editprofilealert({ showAlert, setShowAlert }) {
  return (
    <>
      {!showAlert ? null : (
        <div className="profileAlert__main">
          <div className="container">
            <div className="profileAlert__card">
              <h1 className="profileAlert__tittle">SUKSES MERUBAH DATA</h1>
              <div className="profileAlert__icon">
                <FiCheckCircle size={70} />
              </div>
              <button className="profileAlert__button" onClick={() => setShowAlert(false)}>
                Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Editprofilealert;
