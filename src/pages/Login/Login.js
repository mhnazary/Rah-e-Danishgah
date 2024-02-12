import { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../../components/Navbar";
import { Navigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  let submitHandler = () => {
    if (username === "admin" && password === "12345") {
      <Navigate to='/Panel' />
    } else {
      Swal.fire({
        title: "Error!",
        text: "لاگین به نشد",
        icon: "error",
        confirmButtonText: "بستن",
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="h-60 w-60 mx-auto my-32 flex flex-col justify-evenly items-center">
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="text-end h-14 px-4 bg-slate-200 w-full"
          type="text"
          name="Text"
          placeholder="type user name"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="text-end h-14 px-4 bg-slate-200 w-full"
          type="password"
          name="Text"
          placeholder="type user password"
        />
        <button
          onClick={submitHandler}
          className="bg-green-500 px-8 py-3 rounded-lg"
          type="button"
          name="Text"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Login;
