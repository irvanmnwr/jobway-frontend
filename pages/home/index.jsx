import React, { useState } from "react";
import Image from "next/image";
import axiosServer from "../../utils/axiosServer";
import Pagination from "react-paginate";
import { useRouter } from "next/router";
import SearchIcon from "../../component/search-icon/index";

export async function getServerSideProps(context) {
  try {
    // const dataCookies = cookies(context);
    const params = context.query;
    const page = !params?.page ? 1 : params.page;
    const result = await axiosServer.get(
      `user?page=${page}&limit=5`
      // {
      //   headers: {
      //     Authorization: `Bearer ${dataCookies.token}`,
      //   },
      // }
    );
    return {
      props: {
        data: result.data.data,
        totalPage: result.data.pagination,
        page: page,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}

export default function index(props) {
  console.log(props);
  const router = useRouter();
  const [page, setPage] = useState(props.page);
  const handlePagination = async (data) => {
    // console.log(data.selected + 1);
    await setPage(data.selected + 1);

    router.push(`/home?page=${data.selected + 1}`);
  };

  const handleProfile = (id) => {
    router.push(`/profile/employer/${id}`);
  };
  return (
    <>
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
      <div className="bg-light home">
        <div className="container">
          <div className="card home__search" style={{ margin: "30px 0px" }}>
            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      aria-label="Search..."
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      <SearchIcon />
                    </span>
                  </div>
                </div>
                <div className="col-2">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue={""}>Kategori</option>
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
          {props.data.map((item) => (
            <div
              className="card"
              key={item.id}
              // onClick={() => handleTransfer(item.id)}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-md-2" style={{ padding: "0px 40px" }}>
                    <Image
                      src={
                        item.image
                          ? `${process.env.CLAUDINARY}/${item.image}`
                          : `${process.env.CLAUDINARY}profile/tv5niizaiamtynv9fxq2.png`
                      }
                      alt=""
                      width={100}
                      height={100}
                      className="img_profile"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5>{item.name}</h5>
                    <small>
                      {item.jobDesc}. {item.typeEmployee}
                    </small>
                    <div className="text__desktop">
                      <small>{item.domicilie}</small>
                      <br />
                    </div>
                    {!item.skill ? (
                      <div></div>
                    ) : (
                      item.skill
                        .split(",")
                        .map((itemSkill) => (
                          <div className="badge bg-warning text-wrap">
                            {itemSkill}
                          </div>
                        ))
                    )}
                    {/* {item.skill.split(",").map((itemSkill) => (
                      <div className="badge bg-warning text-wrap">
                        {itemSkill}
                      </div>
                    ))} */}
                    {/* <div>{item.skill.split(",")}</div> */}
                  </div>
                  <div className="col-md-2 profile__button">
                    <button
                      className="btn btn-primary"
                      style={{ margin: "27px 0px" }}
                      onClick={() => handleProfile(item.id)}
                    >
                      Lihat Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div
            className="col-md-12 home__pagination"
            style={{ margin: "50px 0px" }}
          >
            <Pagination
              previousLabel={"<<"}
              nextLabel={">>"}
              breakLabel={"..."}
              pageCount={props.totalPage.totalPage}
              onPageChange={handlePagination}
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
