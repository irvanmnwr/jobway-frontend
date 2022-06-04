import React from "react";
import Image from "next/image";
import Pagination from "react-paginate";
import SearchIcon from "../../component/search-icon/index";

export default function index() {
  return (
    <>
      <div className="bg-light home">
        <nav className="navbar navbar-expand-lg home__navbar">
          <div className="container">
            <p
              className="navbar-brand fw-bold"
              href="#"
              style={{ color: "white", margin: "0px" }}
            >
              TOP JOBS
            </p>
          </div>
        </nav>
        <div className="container">
          <div class="card" style={{ margin: "30px 0px" }}>
            <div class="card-body">
              <div className="row">
                <div className="col-8">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search..."
                      aria-label="Search..."
                      aria-describedby="basic-addon2"
                    />
                    <span class="input-group-text" id="basic-addon2">
                      <SearchIcon />
                    </span>
                  </div>
                </div>
                <div className="col-2">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Kategori</option>
                    <option value="1">Sortir berdasarkan Skill</option>
                    <option value="2">Sortir berdasarkan Freelance</option>
                    <option value="3">Sortir berdasarkan Fulltime</option>
                  </select>
                </div>
                <div className="col-2">
                  <button className="btn btn-primary col-12">Search</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div className="row">
                <div className="col-md-2" style={{ padding: "0px 40px" }}>
                  <Image
                    src={"/vercel.svg"}
                    alt=""
                    width={100}
                    height={100}
                    className="img_profile"
                  />
                </div>
                <div className="col-md-8">
                  <h5>NAMA EMPLOYEE</h5>
                  <small>Pekerjaan. jenis pekerjaan</small>
                  <br />
                  <small>Alamat</small>
                  <br />
                  <div className="badge bg-warning text-wrap">keahlian</div>
                  <div className="badge bg-warning text-wrap">keahlian</div>
                  <div className="badge bg-warning text-wrap">keahlian</div>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-primary"
                    style={{ margin: "27px 0px" }}
                  >
                    Lihat Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div className="row">
                <div className="col-md-2" style={{ padding: "0px 40px" }}>
                  <Image
                    src={"/vercel.svg"}
                    alt=""
                    width={100}
                    height={100}
                    className="img_profile"
                  />
                </div>
                <div className="col-md-8">
                  <h5>NAMA EMPLOYEE</h5>
                  <small>Pekerjaan. jenis pekerjaan</small>
                  <br />
                  <small>Alamat</small>
                  <br />
                  <div className="badge bg-warning text-wrap">keahlian</div>
                  <div className="badge bg-warning text-wrap">keahlian</div>
                  <div className="badge bg-warning text-wrap">keahlian</div>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-primary"
                    style={{ margin: "27px 0px" }}
                  >
                    Lihat Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div className="row">
                <div className="col-md-2" style={{ padding: "0px 40px" }}>
                  <Image
                    src={"/vercel.svg"}
                    alt=""
                    width={100}
                    height={100}
                    className="img_profile"
                  />
                </div>
                <div className="col-md-8">
                  <h5>NAMA EMPLOYEE</h5>
                  <small>Pekerjaan. jenis pekerjaan</small>
                  <br />
                  <small>Alamat</small>
                  <br />
                  <div className="badge bg-warning text-wrap">keahlian</div>
                  <div className="badge bg-warning text-wrap">keahlian</div>
                  <div className="badge bg-warning text-wrap">keahlian</div>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-primary"
                    style={{ margin: "27px 0px" }}
                  >
                    Lihat Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div className="row">
                <div className="col-md-2" style={{ padding: "0px 40px" }}>
                  <Image
                    src={"/vercel.svg"}
                    alt=""
                    width={100}
                    height={100}
                    className="img_profile"
                  />
                </div>
                <div className="col-md-8">
                  <h5>NAMA EMPLOYEE</h5>
                  <small>Pekerjaan. jenis pekerjaan</small>
                  <br />
                  <small>Alamat</small>
                  <br />
                  <div className="badge bg-warning text-wrap">keahlian</div>
                  <div className="badge bg-warning text-wrap">keahlian</div>
                  <div className="badge bg-warning text-wrap">keahlian</div>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-primary"
                    style={{ margin: "27px 0px" }}
                  >
                    Lihat Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12" style={{ margin: "50px 0px" }}>
            <Pagination
              previousLabel={"<<"}
              nextLabel={">>"}
              breakLabel={"..."}
              pageCount={"6"}
              // onPageChange={handlePagination}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
