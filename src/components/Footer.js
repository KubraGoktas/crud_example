import React from "react";
import comp from "../assets/img/2018.png";
import fc from "../assets/img/DEFAULT (2).png"
import tw from "../assets/img/ICON TWITTER.png"
import db from "../assets/img/DEFAULT (1).png"
import gt from "../assets/img/DEFAULT.png"




const Footer = () => {
  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between",alignItems:'center' }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: "2%",
          }}
        >
          <div className="thanks">Thank you for supporting us!</div>
          <div className="lets">
            {" "}
            Let's get in touch on any of these platforms.
          </div>
        </div>
        <div>
        
          <img width={40} src={fc} />
          <img width={40} src={db} />
          <img width={40} src={gt} />
        </div>
      </div>

      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <img src={comp} />
        </div>
        <div className="footer-posts">Posts</div>
      </div>
    </div>
  );
};

export default Footer;
