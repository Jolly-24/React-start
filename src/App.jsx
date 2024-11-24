import "@fortawesome/fontawesome-free/css/all.min.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import About from "./Pages/About/About"
import Contactus from "./Pages/Contact/Contactus"
import Home from "./Pages/Home/Home"
import Portfolio from "./Pages/Portfolio/Portfolio"

export default function App() {

  const routes = createBrowserRouter([
    {path:"/", element: <Layout/> , children:[
      {index:true , element: <Home/>},
      {path:"/portfolio" , element: <Portfolio/>},
      {path:"/about" , element: <About/>},
      {path:"/contact" , element:<Contactus/>},
      {path:"*" , element: <h2 className="pt-28 pl-60">Not found</h2>},
    ]}
  ])
  

  return (
    <>
   <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

