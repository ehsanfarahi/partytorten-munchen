import ProductOverlay from "./ProductOverlay";

export default function ProductCatDisplay({
  productChecked,
  displayContent,
  product,
  handlSlide,
  productHeading,
  category,
  belowForty,
  fortyFifty,
  fiftySixty,
  sixtySeventy,
  fromSeventy,
}) {
  function prev(num) {
    document.getElementById(`slider-container-${num}`).scrollLeft -= 150;
  }

  function next(num) {
    document.getElementById(`slider-container-${num}`).scrollLeft += 150;
  }
  return (
    <>
      {productChecked ? (
        <div>
          {displayContent ? (
            <>
              <div className="c-birthday-cakes">
                <h2>{productHeading}</h2>
                <div id="slider-container-one" className="slider">
                  {product.filter((pro) => pro.type === productHeading).length <
                  1 ? (
                    <div className="not-available">
                      <p>No {productHeading} available at the moment</p>
                    </div>
                  ) : (
                    <>
                      {product
                        .filter(
                          (pro) =>
                            pro.category === category &&
                            pro.type === productHeading &&
                            ((belowForty && pro.price < 40) ||
                              (fortyFifty &&
                                pro.price >= 40 &&
                                pro.price < 50) ||
                              (fiftySixty &&
                                pro.price >= 50 &&
                                pro.price < 60) ||
                              (sixtySeventy &&
                                pro.price >= 60 &&
                                pro.price < 70) ||
                              (fromSeventy && pro.price >= 70))
                        )
                        .map((product, i) => {
                          return (
                            <div
                              key={product._id}
                              className="slide"
                              onClick={() => handlSlide(product._id)}
                            >
                              <img
                                src={require(`../uploads/productsImages/${product.image}`)}
                                alt={product.type}
                              />
                              <div className="img-overlay">
                                <p>{product.title}</p>
                                <p>Weight: {product.weight} kg</p>
                                <p>Price: $ {product.price}</p>
                              </div>
                            </div>
                          );
                        })}
                    </>
                  )}

                  {product.filter((pro) => pro.category === productHeading)
                    .length >= 6 ? (
                    <>
                      <div
                        onClick={() => prev("one")}
                        className="control-prev-btn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 320 512"
                        >
                          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                        </svg>
                      </div>
                      <div
                        onClick={() => next("one")}
                        className="control-next-btn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 320 512"
                        >
                          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>{" "}
            </>
          ) : (
            <>
              <ProductOverlay />
            </>
          )}
        </div>
      ) : (
        false
      )}
    </>
  );
}
