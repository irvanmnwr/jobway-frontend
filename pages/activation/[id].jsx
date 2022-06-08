import React, { useEffect, useState } from "react";
import Router from "next/router";
import axios from "utils/axios";

export async function getServerSideProps(context) {
  console.log(context.query);
  return {
    props: {
      id: context.query.id,
    },
  };
}

export default function index(props) {
  const [textMsg, setTextMsg] = useState("");
  const activated = async () => {
    try {
      const result = await axios.post(`/auth/activateAccount/${props.id}`);
      setTextMsg("Activation Success!");
      console.log(result);
    } catch (error) {
      setTextMsg(error.response.data.msg);
      console.log(error);
    }
  };
  useEffect(() => {
    activated();
  }, []);

  return (
    <div
      className=" d-flex align-items-center justify-content-center"
      style={{ height: "800px" }}
    >
      <div className=" text-center">
        <h1>Success Activation!</h1>
        <span
          onClick={() => Router.push("/login")}
          style={{ color: "purple", cursor: "pointer" }}
        >
          {" "}
          Please Login Again
        </span>
      </div>
    </div>
  );
}
