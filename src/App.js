import "./App.css";
import AppRouter from "./router/index.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div style={{ position: "absolute", width: "100%" }}>
        <Navbar />
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <AppRouter />
      </div>
      <div style={{height:'20%'}}>
        <Footer />
      </div>
    </>
  );
}

export default App;
