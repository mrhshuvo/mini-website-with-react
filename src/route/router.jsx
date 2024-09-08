import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Team from "../pages/Team/Team";
import Contract from "../pages/Contract/Contract";
import Blog from "../pages/Blog/Blog"
import Layouts from "../layouts/Layouts";
import SingleBlog from "../pages/Blog/SingleBlog";

const router = createBrowserRouter([
    {
        element : <Layouts/>,
        children: [
            {
                path : "/",
                element: <Home/>
            },
            {
                path : "/team",
                element : <Team/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/blog",
                element : <Blog/>
            },
            {
                path : "contract",
                element : <Contract/>
            },
            {
                path : "/blog/:postId",
                element : <SingleBlog/>
            }
        ]
    }
]);


export default router;