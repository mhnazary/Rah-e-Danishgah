import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

function Article() {
  return (
    <>
      <Navbar />
      <h1 className='ul text-title text-center py-3'>صفحه مقالات</h1>
      <hr />
      <div className='flex justify-center py-6'>
        <Link to="php" className='border-2 border-black rounded-xl px-6 py-2 '>PHP</Link>
        <Link to="node" className='border-2 border-black rounded-xl px-6 py-2 mx-8'>Node JS</Link>
        <Link to="laravel" className='border-2 border-black rounded-xl px-6 py-2'>Laravel</Link>
      </div>
      <hr />  <Routes>
        <Route path="php" element={<h2>Php Contains</h2>}/>
        <Route path="node" element={<h2>Node Contains</h2>}/>
        <Route path="Laravel" element={<h2>Laravel Contains</h2>}/>
      </Routes>
    </>
  );
}

export default Article;
