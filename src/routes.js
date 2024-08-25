import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Article from "./Pages/Article/Article";
import Login from "./Pages/login/Login";
import Panel from "./Pages/panel/Panel";
import Course from "./Pages/Course/Course";


const routes = [
    {path:"/" , element: <Home />},
    {path:"/about" , element: <About />},
    {path:"/article/*",
     element: <Article />,
     children:[
        {path: "php" , element: <h2>php article </h2> },
        {path: "js" , element:<h2>js article </h2>},
        {path: "react" , element:<h2>react article </h2>},
    ],
},
    {path:"/login" , element: <Login />},
    {path:"/panel" , element: <Panel />},
    {path:"/course/:courseId" , element: <Course />},
]

export default routes