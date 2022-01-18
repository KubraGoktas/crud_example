import React from "react";


const Home=React.lazy(()=>import("../pages/Home"))
const Profile=React.lazy(()=>import("../pages/Profile"))
const Post=React.lazy(()=>import("../pages/Post"))




export const routes = [
    {
         path: "post/:id",
         element:<Post/>
    },
    {
        path: "profile/:id",
        element:<Profile/>
   },
   {
    path: "/",
    element:<Home/>
}
    ];
