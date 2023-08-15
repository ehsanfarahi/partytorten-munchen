import "../styles/ImageSlider.css";

export default function Sweets() {
  function prev() {
    document.getElementById("slider-container").scrollLeft -= 150;
  }

  function next() {
    document.getElementById("slider-container").scrollLeft += 150;
  }

  // $(".slide img").on("click", function () {
  //   $(".slide img").toggleClass("zoomed");
  //   $(".overlay").toggleClass("active");
  // });

  function handlSlide() {
    document.querySelector(".slide img").classList.toggle("zoomed");
    document.querySelector(".overlay").classList.toggle("active");
  }

  return (
    <div>
      <div className="sweets-container">
        <div className="left-side-list">
          <div className="search-bar">
            <input type="text" placeholder="Search more sweets" />
          </div>
          <div className="filter-container">
            <p className="filter-heading">Filter Sweets</p>
            <div className="filter-engine">
              <p>Sweets Type</p>
              <div className="filter-cakes-types">
                <div className="filter-form-control">
                  <label>Tiramisu</label>
                  <input type="checkbox" />
                </div>
                <div className="filter-form-control">
                  <label>Chocolate Strawberries</label>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
            <div className="filter-engine">
              <p>Sweets Price</p>
              <div className="filter-cakes-types">
                <div className="filter-form-control">
                  <label>$ 40 - 50</label>
                  <input type="checkbox" />
                </div>
                <div className="filter-form-control">
                  <label>$ 50 - 60</label>
                  <input type="checkbox" />
                </div>
                <div className="filter-form-control">
                  <label>$ 60 - 70</label>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="birthday-cakes">
            <h2>Tiramisu</h2>
            <div id="slider-container" className="slider">
              <div className="slide" onClick={handlSlide}>
                <img
                  src="https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=20"
                  alt="asdf"
                />
                <div className="img-overlay">
                  <p>Price: $ 50</p>
                  <p>Weight: 1.5 kg</p>
                </div>
              </div>
              <div className="slide">
                <img
                  src="https://images.unsplash.com/photo-1574451311232-cb647e9d71f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=20"
                  alt="asdf"
                />
              </div>
              <div className="slide">
                <img
                  src="https://images.unsplash.com/photo-1574449423472-4bc6a3d2473d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=20"
                  alt="sdf"
                />
              </div>
              <div className="slide">
                <img
                  src="https://images.unsplash.com/photo-1574459472673-09bbda49102a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=928&q=20"
                  alt="dsf"
                />
              </div>
              <div className="slide">
                <img
                  src="https://images.unsplash.com/photo-1479981280584-037818c1297d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=20"
                  alt="df"
                />
              </div>
              <div className="slide">
                <img
                  src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=20"
                  alt="df"
                />
              </div>
              <div className="slide">
                <img
                  src="https://images.unsplash.com/photo-1560259324-12a044e67c34?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=20"
                  alt="asd"
                />
              </div>
              <div className="slide">
                <img
                  src="images.unsplash.com/photo-1532787799187-93655e51d472?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=20"
                  alt="df"
                />
              </div>
              <div onClick={prev} className="control-prev-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
              </div>
              <div onClick={next} className="control-next-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay" onClick={handlSlide}></div>
      </div>
    </div>
  );
}
