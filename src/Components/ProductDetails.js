export default function ProductDetails() {
  return (
    <div className="product-details-container">
      <div className="details-container">
        <div className="container-left">
          <div className="main-img">
            <img src={require("../images/cake1.jpg")} />
          </div>
          <div className="img-slider">
            <img src={require("../images/cake2.jpeg")} />
            <img src={require("../images/cake3.jpeg")} />
            <img src={require("../images/cake4.jpeg")} />
          </div>
        </div>
        <div className="container-right">
          <h2>Chocolate Cake</h2>
          <div className="product-info">
            <p className="info-text">
              This cake is made of vanilla cream and black chocolate. This cake
              is made of vanilla cream and black chocolate. This cake is made of
              vanilla cream and black chocolate. This cake is made of vanilla
              cream and black chocolate. This cake is made of vanilla cream and
              black chocolate.
            </p>
          </div>
          <p className="product-price">$30.00</p>
          <p className="product-weight">Size: 1.5 kg</p>
          <div className="extra">
            <p>Extras</p>
            <div className="extra-form-control">
              <input type="checkbox" />
              <label>Inscription ($3.99)</label>
            </div>
            <div className="extra-form-control">
              <input type="checkbox" />
              <label>Happy Birthday Glitter Cake Topper ($6.99)</label>
            </div>
            <div className="extra-form-control">
              <input type="checkbox" />
              <label>12x Metallic Candles ($2.50)</label>
            </div>
            <div className="extra-form-control">
              <input type="checkbox" />
              <label>Ballons ($1.99)</label>
            </div>
          </div>
          <div className="customer-note">
            <label>Write a note to us (optional)</label>
            <textarea />
          </div>
          <button>Place order</button>
        </div>
      </div>
    </div>
  );
}
