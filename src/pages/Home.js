import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { getPosts } from "../services/PostService";

const Home = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    getPosts().then((res) => setposts(res.data));
  }, []);
  return (
    <div className="box p-1">
      {posts.slice(0, 6).map((item, key) => {
        return (
          <div
            style={{
              display: "flex",
              height: "16.67%",
              padding: "1%",
              width: "100%",
              borderBottom: key === 5 ? "none" : "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ flexBasis: "80%" }}>
              <p>
                <span style={{ fontWeight: "bold" }}>{key + 1}.</span>
                {item.title}
              </p>
            </div>
            <div
              className="act-button"
              style={{
                flexBasis: "20%",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Button color="primary">Detay</Button>
              <Button color="primary">Düzenle</Button>
              <Button color="primary">Sil</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
