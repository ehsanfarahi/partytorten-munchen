import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Navigation from "./Navigation";

export default function ProductDetails() {
  // Get User IP Address
  const [ip, setIp] = useState("");

  const getUserIP = async () => {
    const ipAddress = await axios.get("https://api.ipify.org/?format=json");
    setIp(ipAddress.data.ip);
  };

  useEffect(() => {
    //passing getUserIP method to the lifecycle method
    getUserIP();
  }, []);

  const { id } = useParams();

  const [productData, setProductData] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/products?id=${id}`).then((response) =>
      response.json().then((result) => {
        setProductData(result);
      })
    );
  });

  const [extrasOne, setExtrasOne] = useState("");
  const [extrasTwo, setExtrasTwo] = useState("");
  const [extrasThree, setExtrasThree] = useState("");
  const [extrasFour, setExtrasFour] = useState("");
  const [note, setNote] = useState("");

  const auth = localStorage.getItem("ptUserLoginData");

  async function handlePlaceOrder(e) {
    e.preventDefault();

    const userId = JSON.parse(localStorage.getItem("ptUserLoginData"))._id;

    let placeOrderData = await fetch("http://127.0.0.1:3001/place-order", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        productId: id,
        extrasOne,
        extrasTwo,
        extrasThree,
        extrasFour,
        note,
      }),
    });

    placeOrderData = await placeOrderData.json();
    if (placeOrderData) {
      alert("Order made!");
    }
  }

  const [favProductId, setFavProductId] = useState("");

  function handleFavorite(id) {
    localStorage.setItem("ptFav", productData._id);
    <Navigation favID={id} />;
  }

  return (
    <div className="product-details-container">
      <div className="details-container">
        <div className="container-left">
          <div className="main-img">
            {productData && (
              <img
                src={require("../uploads/productsImages/" + productData.image)}
                alt={productData.type}
              />
            )}
          </div>
          <div className="img-slider">
            <img src={require("../images/cake2.jpeg")} alt="cake" />
            <img src={require("../images/cake3.jpeg")} alt="cake" />
            <img src={require("../images/cake4.jpeg")} alt="cake" />
          </div>
        </div>
        <div className="container-right">
          <h2>
            {productData.type} - {productData.title}
          </h2>
          <div className="product-info">
            <div className="product-info-border">
              <p className="info-text">{productData.description}</p>
            </div>
          </div>
          <p className="product-price">Price: ${productData.price}</p>
          <p className="product-weight">Weight: {productData.weight} kg</p>
          <div className="extra">
            <p>Extras</p>
            <div className="extra-form-control">
              <input
                onChange={(e) => setExtrasOne(e.target.value)}
                type="checkbox"
                value="Inscription"
              />
              <label htmlFor="inscription">Inscription ($3.99)</label>
            </div>
            <div className="extra-form-control">
              <input
                onChange={(e) => setExtrasTwo(e.target.value)}
                type="checkbox"
                value="Happy Birthday Glitter Cake Topper"
              />
              <label>Happy Birthday Glitter Cake Topper ($6.99)</label>
            </div>
            <div className="extra-form-control">
              <input
                onChange={(e) => setExtrasThree(e.target.value)}
                type="checkbox"
                value="12x Metallic Candles"
              />
              <label>12x Metallic Candles ($2.50)</label>
            </div>
            <div className="extra-form-control">
              <input
                onChange={(e) => setExtrasFour(e.target.value)}
                type="checkbox"
                value="Ballons"
              />
              <label>Ballons ($1.99)</label>
            </div>
          </div>
          <div className="customer-note">
            <label>Write a note to us (optional)</label>
            <textarea onChange={(e) => setNote(e.target.value)} />
          </div>
          {auth ? (
            <div className="button">
              <button onClick={handlePlaceOrder}>Place order</button>{" "}
              <button onClick={handleFavorite}>Add to favorite</button>
            </div>
          ) : (
            <div className="button">
              <button>Sign in to place order</button>{" "}
              <button onClick={handleFavorite}>Add to favorite</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
