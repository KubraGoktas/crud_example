import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import img from "../assets/img/bg.png";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar" style={{ height: "100%", width: "100%" }}>
      <div
        className="container mt-4"
        style={{ position: "relative", width: "100%", display: "flex",zIndex:10,paddingLeft:'120px',paddingRight:'120px' }}
      >
        <div>
          <img width={"50%"} src={logo} />
          <a href={'/'} style={{fontSize:'10px',marginLeft:'40px',color:'white',textDecoration:'none'}}>Posts</a>
        </div>
        <div>
            <Button style={{backgroundColor:'white',border:'none',color:'#5E72E4',fontSize:'14px'}}>Login</Button>
        </div>
      </div>
      <div style={{ position: "absolute", width: "100%" }}>
        <img width={"100%"} height={"100%"} src={img} />
      </div>
    </div>
  );
};

export default Navbar;
