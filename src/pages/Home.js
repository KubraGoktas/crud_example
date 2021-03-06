import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input, Label } from "reactstrap";
import Swal from "sweetalert2";
import CustomModal from "../components/CustomModal";
import { getPosts } from "../services/PostService";

const Home = () => {
  const [posts, setposts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({title:'',body:''});

  useEffect(() => {
    getPosts().then((res) => setposts(res.data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      icon: 'question',
      title: 'Kaydı silmek istediğinize emin misiniz?',
      showCancelButton: true,
      cancelButtonText: 'Vazgeç',
      confirmButtonText: 'Evet',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Kayıt Başarıyla Silindi!', '', 'success')
      }
    })
  }

  return (
    <div className="box p-1">
      {posts.slice(0, 6).map((item, key) => {
        return (
          <div
            key={key}
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
              <Link className="btn" to={`/post/${item.id}`}>
                Detay
              </Link>
              <Button color="primary" onClick={() => { setOpen(true);setSelected(item) }}>
                Düzenle
              </Button>
              <Button color="primary" onClick={() => handleDelete(item.id)}>Sil</Button>
            </div>
          </div>
        );
      })}
      <CustomModal open={open} setOpen={setOpen}>
        <Form>
          <Label>Title</Label>
          <Input defaultValue={selected.title}/>
          <Label>Body</Label>
          <Input defaultValue={selected.body} name="text" type="textarea" />
        </Form>
      </CustomModal>
    </div>
  );
};

export default Home;
