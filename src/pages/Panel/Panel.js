import { Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Panel() {
  function isLogin(user) {
    if (user === "admn") {
      return true;
    } else return false;
  }
  return (
    <>
      {isLogin("admin") ? (
        <div>
          <Navbar /> <h1>Panel Page</h1>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default Panel;
