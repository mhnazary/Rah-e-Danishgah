import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Article from "./pages/Articale/Articla";
import Panel from "./pages/Panel/Panel";
import Login from "./pages/Login/Login";
import CourseItems from "./components/CourseItems";

export let routing = [
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
  {
    path: "/Article",
    element: <Article />,
    children: [
      { path: "php", element: <h2>Php Contains</h2> },
      { path: "node", element: <h2>Node Contains</h2> },
      { path: "laravel", element: <h2>Laravel Contains</h2> },
    ],
  },
  { path: "/Panel", element: <Panel /> },
  { path: "/Login", element: <Login /> },
  { path: "/course/:id", element: <CourseItems /> },
];
