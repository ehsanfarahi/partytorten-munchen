import Footer from "./Footer";

export default function Home() {
  return (
    <div className="imgCollection-container">
      <div className="imgCollection">
        <div className="row small">
          <div className="imagegroup" style={{ animationDelay: "1s" }}>
            <img src={require("../images/cake1.jpg")} alt="cake1" width="180" />
            <img
              src={require("../images/cake2.jpeg")}
              alt="cake1"
              width="180"
            />
            <img
              src={require("../images/cake3.jpeg")}
              alt="cake1"
              width="342"
              height="180"
            />
            <img
              src={require("../images/cake4.jpeg")}
              alt="cake1"
              width="342"
              height="180"
            />
            <img
              src={require("../images/cake5.jpeg")}
              alt="cake1"
              width="342"
              height="180"
            />
            <img src={require("../images/cake1.jpg")} alt="cake1" width="180" />
            <img
              src={require("../images/cake3.jpeg")}
              alt="cake1"
              width="342"
              height="180"
            />
            <img
              src={require("../images/cake4.jpeg")}
              alt="cake1"
              width="342"
              height="180"
            />
            <img
              src={require("../images/cake5.jpeg")}
              alt="cake1"
              width="342"
              height="180"
            />
            <img src={require("../images/cake1.jpg")} alt="cake1" width="180" />
          </div>
        </div>
        <div className="row large">
          <div className="imagegroup" style={{ border: "2px solid white" }}>
            <img
              src={require("../images/cake3.jpeg")}
              alt="cake1"
              width="1024"
              height="480"
            />
            <img
              src={require("../images/cake4.jpeg")}
              alt="cake1"
              width="1024"
              height="480"
            />
            <img
              src={require("../images/cake3.jpeg")}
              alt="cake1"
              width="1024"
              height="480"
            />
            <img
              src={require("../images/cake4.jpeg")}
              alt="cake1"
              width="1024"
              height="480"
            />
          </div>
        </div>
        <div className="row small">
          <div className="imagegroup" style={{ animationDelay: "1s" }}>
            <img src={require("../images/cake1.jpg")} alt="cake1" width="180" />
            <img
              src={require("../images/cake2.jpeg")}
              alt="cake1"
              width="180"
            />
            <img
              src={require("../images/cake3.jpeg")}
              alt="cake1"
              width="342"
              height="180"
            />
            <img
              src={require("../images/cake4.jpeg")}
              alt="cake1"
              width="342"
              height="180"
            />
            <img
              src={require("../images/cake5.jpeg")}
              alt="cake1"
              width="342"
              height="180"
            />
            <img src={require("../images/cake1.jpg")} alt="cake1" width="180" />
            <img
              src={require("../images/cake3.jpeg")}
              alt="cake1"
              width="342"
              height="180"
            />
            <img
              src={require("../images/cake4.jpeg")}
              alt="cake1"
              width="342"
              height="180"
            />
            <img
              src={require("../images/cake5.jpeg")}
              alt="cake1"
              width="342"
              height="180"
            />
            <img src={require("../images/cake1.jpg")} alt="cake1" width="180" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
