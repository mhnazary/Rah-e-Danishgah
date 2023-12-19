import { useState } from "react";
import { Link } from "react-router-dom";
import {CardData} from "./data";

function Course() {
  const [course, setCourse] = useState(CardData);

  return (
    <>
      <div className="mb-10 p-">
        <h1 className="ul text-3xl font-bold py-4 mb-10 mr-10">
          دوره های آموزشی
        </h1>
        <div className="cards  rounded-lg flex justify-center flex-wrap">
          {course.map((course) => (
            <Cards key={course.id} {...course} />
          ))}
        </div>
      </div>
    </>
  );
}

function Cards({ id, title, detail, image }) {
  return (
    <>
      <div className="w-72 flex flex-col shadow-lg my-3 mx-3 rounded-lg">
        <img
          className=" rounded-s-lg rounded-e-lg"
          src={image}
          alt="react-pic"
        />
        <h2 className="header text-xl px-4 mt-3">{title}</h2>
        <p className="ul text-justify p-4 mb-2">{detail} </p>
        <button className=" bg-blue-600 w-1/3 px-3 py-2 mb-6 mx-4 rounded-lg flex items-center justify-center">
          <Link to={`Course/${id}`} className="text-white">
            خرید دوره
          </Link>
        </button>
      </div>
    </>
  );
}

export default Course;
