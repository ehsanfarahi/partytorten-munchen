import { useEffect, useState } from "react";

export default function Home() {
  const [cakes, setCakes] = useState([]);

  const [displayContent, setDisplayContent] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/products").then((response) => {
      response.json().then((result) => {
        setCakes(result);
        setDisplayContent(true);
      });
    });
  }, []);
  return (
    <div className="imgCollection-container">
      {displayContent ? (
        <div className="imgCollection">
          <div className="row small">
            <div className="imagegroup" style={{ animationDelay: "1s" }}>
              {cakes
                .filter((fCake) => fCake.category === "Sweets")
                .map((cake, i) => {
                  return (
                    <div key={cake._id}>
                      <img
                        src={require("../uploads/productsImages/" + cake.image)}
                        alt="sweets"
                        className="img-top"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="row large">
            <div className="imagegroup" style={{ border: "2px solid white" }}>
              {cakes
                .filter((fCake) => fCake.category === "Cakes")
                .map((cake, i) => {
                  return (
                    <div key={cake._id}>
                      <img
                        src={require("../uploads/productsImages/" + cake.image)}
                        alt="cake"
                        className="img-middle"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="row small">
            <div className="imagegroup" style={{ animationDelay: "1s" }}>
              {cakes
                .filter((fCake) => fCake.category === "Cookies")
                .map((cake, i) => {
                  return (
                    <div key={cake._id}>
                      <img
                        src={require("../uploads/productsImages/" + cake.image)}
                        alt="cookies"
                        className="img-bottom"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <div className="imgCollection">
          <div className="row small">
            <div className="imagegroup" style={{ animationDelay: "1s" }}>
              <img
                src={require("../images/sweets-icon.png")}
                alt="cake"
                className="img-top img-border"
              />
              <img
                src={require("../images/sweets-icon.png")}
                alt="cake"
                className="img-top img-border"
              />
              <img
                src={require("../images/sweets-icon.png")}
                alt="cake"
                className="img-top img-border"
              />
              <img
                src={require("../images/sweets-icon.png")}
                alt="cake"
                className="img-top img-border"
              />
              <img
                src={require("../images/sweets-icon.png")}
                alt="cake"
                className="img-top img-border"
              />
              <img
                src={require("../images/sweets-icon.png")}
                alt="cake"
                className="img-top img-border"
              />
              <img
                src={require("../images/sweets-icon.png")}
                alt="cake"
                className="img-top img-border"
              />
              <img
                src={require("../images/sweets-icon.png")}
                alt="cake"
                className="img-top img-border"
              />
              <img
                src={require("../images/sweets-icon.png")}
                alt="cake"
                className="img-top img-border"
              />
              <img
                src={require("../images/sweets-icon.png")}
                alt="cake"
                className="img-top img-border"
              />
            </div>
          </div>
          <div className="row large">
            <div className="imagegroup" style={{ border: "2px solid white" }}>
              <img
                src={require("../images/cake-icon.png")}
                alt="cake1"
                className="img-middle img-border"
              />
              <img
                src={require("../images/cake-icon.png")}
                alt="cake1"
                className="img-middle img-border"
              />
              <img
                src={require("../images/cake-icon.png")}
                alt="cake1"
                className="img-middle img-border"
              />
              <img
                src={require("../images/cake-icon.png")}
                alt="cake1"
                className="img-middle img-border"
              />
            </div>
          </div>
          <div className="row small">
            <div className="imagegroup" style={{ animationDelay: "1s" }}>
              <img
                src={require("../images/cookie-icon.png")}
                alt="cake1"
                className="img-bottom img-border"
              />
              <img
                src={require("../images/cookie-icon.png")}
                alt="cake1"
                className="img-bottom img-border"
              />
              <img
                src={require("../images/cookie-icon.png")}
                alt="cake1"
                className="img-bottom img-border"
              />
              <img
                src={require("../images/cookie-icon.png")}
                alt="cake1"
                className="img-bottom img-border"
              />
              <img
                src={require("../images/cookie-icon.png")}
                alt="cake1"
                className="img-bottom img-border"
              />
              <img
                src={require("../images/cookie-icon.png")}
                alt="cake1"
                className="img-bottom img-border"
              />
              <img
                src={require("../images/cookie-icon.png")}
                alt="cake1"
                className="img-bottom img-border"
              />
              <img
                src={require("../images/cookie-icon.png")}
                alt="cake1"
                className="img-bottom img-border"
              />
              <img
                src={require("../images/cookie-icon.png")}
                alt="cake1"
                className="img-bottom img-border"
              />
              <img
                src={require("../images/cookie-icon.png")}
                alt="cake1"
                className="img-bottom img-border"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/*
export default function Home() {
  return (
    <div className="imgCollection-container">
      <div className="imgCollection">
        <div className="row small">
          <div className="imagegroup" style={{ animationDelay: "1s" }}>
            <img
              src={require("../images/cake1.jpg")}
              alt="cake1"
              className="img-top"
            />
            <img
              src={require("../images/cake2.jpeg")}
              alt="cake1"
              className="img-top"
            />
            <img
              src={require("../images/cake3.jpeg")}
              alt="cake1"
              className="img-top"
            />
            <img
              src={require("../images/cake4.jpeg")}
              alt="cake1"
              className="img-top"
            />
            <img
              src={require("../images/cake5.jpeg")}
              alt="cake1"
              className="img-top"
            />
            <img
              src={require("../images/cake1.jpg")}
              alt="cake1"
              className="img-top"
            />
            <img
              src={require("../images/cake3.jpeg")}
              alt="cake1"
              className="img-top"
            />
            <img
              src={require("../images/cake4.jpeg")}
              alt="cake1"
              className="img-top"
            />
            <img
              src={require("../images/cake5.jpeg")}
              alt="cake1"
              className="img-top"
            />
            <img
              src={require("../images/cake1.jpg")}
              alt="cake1"
              className="img-top"
            />
          </div>
        </div>
        <div className="row large">
          <div className="imagegroup" style={{ border: "2px solid white" }}>
            <img
              src={require("../images/cake3.jpeg")}
              alt="cake1"
              className="img-middle"
            />
            <img
              src={require("../images/cake4.jpeg")}
              alt="cake1"
              className="img-middle"
            />
            <img
              src={require("../images/cake3.jpeg")}
              alt="cake1"
              className="img-middle"
            />
            <img
              src={require("../images/cake4.jpeg")}
              alt="cake1"
              className="img-middle"
            />
          </div>
        </div>
        <div className="row small">
          <div className="imagegroup" style={{ animationDelay: "1s" }}>
            <img
              src={require("../images/cake1.jpg")}
              alt="cake1"
              className="img-bottom"
            />
            <img
              src={require("../images/cake2.jpeg")}
              alt="cake1"
              className="img-bottom"
            />
            <img
              src={require("../images/cake3.jpeg")}
              alt="cake1"
              className="img-bottom"
            />
            <img
              src={require("../images/cake4.jpeg")}
              alt="cake1"
              className="img-bottom"
            />
            <img
              src={require("../images/cake5.jpeg")}
              alt="cake1"
              className="img-bottom"
            />
            <img
              src={require("../images/cake1.jpg")}
              alt="cake1"
              className="img-bottom"
            />
            <img
              src={require("../images/cake3.jpeg")}
              alt="cake1"
              className="img-bottom"
            />
            <img
              src={require("../images/cake4.jpeg")}
              alt="cake1"
              className="img-bottom"
            />
            <img
              src={require("../images/cake5.jpeg")}
              alt="cake1"
              className="img-bottom"
            />
            <img
              src={require("../images/cake1.jpg")}
              alt="cake1"
              className="img-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
*/
