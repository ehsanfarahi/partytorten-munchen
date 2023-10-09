import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function Sweets() {
  const [tiramisuChecked, setTiramisuChecked] = useState(true);
  const [chocoStraberryChecked, setChocoStrawberryChecked] = useState(true);
  const [creamRollsChecked, setCreamRollsChecked] = useState(true);
  const [puddingChecked, setPuddingChecked] = useState(true);

  const handleTiramisuCheck = (e) => {
    setTiramisuChecked(!e);
  };

  const handleChocoStrawberryCheck = (e) => {
    setChocoStrawberryChecked(!e);
  };

  const handleCreamRollsCheck = (e) => {
    setCreamRollsChecked(!e);
  };

  const handlePuddingCheck = (e) => {
    setPuddingChecked(!e);
  };

  const [sweets, setSweets] = useState([]);

  const [displayContent, setDisplayContent] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:3001/products").then((response) => {
      response.json().then((result) => {
        setSweets(result);
        setDisplayContent(true);
      });
    });
  }, []);

  function prev(num) {
    document.getElementById(`slider-container-${num}`).scrollLeft -= 150;
  }

  function next(num) {
    document.getElementById(`slider-container-${num}`).scrollLeft += 150;
    console.log(num);
  }

  function handlSlide(id) {
    navigate("/product-details/" + id);
    // document.querySelector(".slide img").classList.toggle("zoomed");
    // document.querySelector(".overlay").classList.toggle("active");
  }

  useEffect(() => {
    document
      .querySelector(".left-side-list-mobile .filter-container")
      .classList.add("display-none");
  });

  function rotateFilterIcon() {
    document
      .querySelector(".filter-icon")
      .classList.toggle("filter-icon-rotation");

    document
      .querySelector(".left-side-list-mobile .filter-container")
      .classList.toggle("display-flex");
  }

  return (
    <div>
      <div className="sweets-container">
        <div className="left-side-list">
          <div className="search-bar">
            <input type="text" placeholder="Search more sweets" />
          </div>
          <p className="filter-heading">Filter Sweets</p>
          <div className="filter-container">
            <div className="filter-engine">
              <p>Sweets Type</p>
              <div className="filter-sweets-types">
                {/* <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>All types</label>
                </div> */}
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={tiramisuChecked}
                    onChange={() => {
                      handleTiramisuCheck(tiramisuChecked);
                    }}
                  />
                  <label>
                    Tiramisu: (
                    {
                      sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" &&
                          fSweet.type === "Tiramisu"
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={chocoStraberryChecked}
                    onChange={() => {
                      handleChocoStrawberryCheck(chocoStraberryChecked);
                    }}
                  />
                  <label>
                    Chocolate Strawberries: (
                    {
                      sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" &&
                          fSweet.type === "Chocolate Strawberries"
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={creamRollsChecked}
                    onChange={() => {
                      handleCreamRollsCheck(creamRollsChecked);
                    }}
                  />
                  <label>
                    Cream Rolls: (
                    {
                      sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" &&
                          fSweet.type === "Cream Rolls"
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={puddingChecked}
                    onChange={() => {
                      handlePuddingCheck(puddingChecked);
                    }}
                  />
                  <label>
                    Pudding: (
                    {
                      sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" &&
                          fSweet.type === "Pudding"
                      ).length
                    }
                    )
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-engine">
              <p>Sweets Price</p>
              <div className="filter-sweets-types">
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>All prices</label>
                </div>
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>
                    Below $ 40: (
                    {
                      sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" && fSweet.price < 40
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>
                    $ 40 - 50: (
                    {
                      sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" &&
                          fSweet.price >= 40 &&
                          fSweet.price <= 50
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>
                    $ 51 - 60: (
                    {
                      sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" &&
                          fSweet.price >= 51 &&
                          fSweet.price <= 60
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>
                    $ 61 - 70: (
                    {
                      sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" &&
                          fSweet.price >= 61 &&
                          fSweet.price <= 70
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>
                    Above 70: (
                    {
                      sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" && fSweet.price > 70
                      ).length
                    }
                    )
                  </label>
                </div>
                <div>
                  <p>
                    Result:{" "}
                    {
                      sweets.filter((fSweet) => fSweet.category === "Sweets")
                        .length
                    }{" "}
                    {sweets.filter((fSweet) => fSweet.category === "Sweets")
                      .length === 1
                      ? "sweet"
                      : "sweets"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-side-list-mobile">
          <div className="search-bar">
            <input type="text" placeholder="Search more sweets" />
          </div>
          <p className="filter-heading">
            Filter Sweets{" "}
            <MdKeyboardArrowUp
              className="filter-icon"
              onClick={rotateFilterIcon}
            />
          </p>
          <div className="filter-container">
            <div className="filter-engine">
              <p>Sweets Type</p>
              <div className="filter-cakes-types">
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={tiramisuChecked}
                    onChange={() => {
                      handleTiramisuCheck(tiramisuChecked);
                    }}
                  />
                  <label>Tiramisu</label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={chocoStraberryChecked}
                    onChange={() => {
                      handleChocoStrawberryCheck(chocoStraberryChecked);
                    }}
                  />
                  <label>Chocolate Strawberries</label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={creamRollsChecked}
                    onChange={() => {
                      handleCreamRollsCheck(creamRollsChecked);
                    }}
                  />
                  <label>Cream Rolls</label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={puddingChecked}
                    onChange={() => {
                      handlePuddingCheck(puddingChecked);
                    }}
                  />
                  <label>Pudding</label>
                </div>
              </div>
            </div>
            <div className="filter-engine">
              <p>Sweets Price</p>
              <div className="filter-cakes-types">
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>All prices</label>
                </div>
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>
                    Below $ 40: (
                    {
                      sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" && fSweet.price < 40
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>
                    $ 40 - 50: (
                    {
                      sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" &&
                          fSweet.price >= 40 &&
                          fSweet.price <= 50
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>
                    $ 51 - 60: (
                    {
                      sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" &&
                          fSweet.price >= 51 &&
                          fSweet.price <= 60
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>
                    $ 61 - 70: (
                    {
                      sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" &&
                          fSweet.price >= 61 &&
                          fSweet.price <= 70
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>
                    Above 70: (
                    {
                      sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" && fSweet.price > 70
                      ).length
                    }
                    )
                  </label>
                </div>
              </div>
              <div>
                <p>
                  Result:{" "}
                  {
                    sweets.filter((fSweet) => fSweet.category === "Sweets")
                      .length
                  }{" "}
                  {sweets.filter((fSweet) => fSweet.category === "Sweets")
                    .length === 1
                    ? "sweet"
                    : "sweets"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          {tiramisuChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="c-birthday-cakes">
                    <h2>Tiramisu</h2>
                    <div id="slider-container-one" className="slider">
                      {sweets
                        .filter(
                          (fSweet) =>
                            fSweet.category === "Sweets" &&
                            fSweet.type === "Tiramisu"
                        )
                        .map((sweet, i) => {
                          return (
                            <div
                              key={sweet._id}
                              className="slide"
                              onClick={() => handlSlide(sweet._id)}
                            >
                              <img
                                src={require(`../uploads/productsImages/${sweet.image}`)}
                                alt={sweet.type}
                              />
                              <div className="img-overlay">
                                <p>{sweet.type}</p>
                                <p>Weight: {sweet.weight} kg</p>
                                <p>Price: $ {sweet.price}</p>
                              </div>
                            </div>
                          );
                        })}
                      {sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" &&
                          fSweet.type === "Tiramisu"
                      ).length >= 5 ? (
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
                  <div className="shadow-placeholder">
                    <div className="shadow-placeholder-title"></div>
                    <div className="shadow-placeholder-slider">
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide-mini"></div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            false
          )}
          {chocoStraberryChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="birthday-cakes">
                    <h2>Chocolate Strawberries</h2>
                    <div id="slider-container-two" className="slider">
                      {sweets
                        .filter(
                          (fSweet) =>
                            fSweet.category === "Sweets" &&
                            fSweet.type === "Chocolate Strawberries"
                        )
                        .map((sweet, i) => {
                          return (
                            <div
                              key={sweet._id}
                              className="slide"
                              onClick={() => handlSlide(sweet._id)}
                            >
                              <img
                                src={require(`../../../server/uploads/productsImages/${sweet.image}`)}
                                alt={sweet.type}
                              />
                              <div className="img-overlay">
                                <p>{sweet.type}</p>
                                <p>Weight: {sweet.weight} kg</p>
                                <p>Price: $ {sweet.price}</p>
                              </div>
                            </div>
                          );
                        })}
                      {sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" &&
                          fSweet.type === "Chocolate Strawberries"
                      ).length >= 5 ? (
                        <>
                          <div
                            onClick={() => prev("two")}
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
                            onClick={() => next("two")}
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
                  <div className="shadow-placeholder">
                    <div className="shadow-placeholder-title"></div>
                    <div className="shadow-placeholder-slider">
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide-mini"></div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            false
          )}
          {creamRollsChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="birthday-cakes">
                    <h2>Cream Rolls</h2>
                    <div id="slider-container-three" className="slider">
                      {sweets
                        .filter(
                          (fSweet) =>
                            fSweet.category === "Sweets" &&
                            fSweet.type === "Cream Rolls"
                        )
                        .map((sweet, i) => {
                          return (
                            <div
                              key={sweet._id}
                              className="slide"
                              onClick={() => handlSlide(sweet._id)}
                            >
                              <img
                                src={require(`../uploads/productsImages/${sweet.image}`)}
                                alt={sweet.type}
                              />
                              <div className="img-overlay">
                                <p>{sweet.type}</p>
                                <p>Weight: {sweet.weight} kg</p>
                                <p>Price: $ {sweet.price}</p>
                              </div>
                            </div>
                          );
                        })}
                      {sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" &&
                          fSweet.type === "Cream Rolls"
                      ).length >= 5 ? (
                        <>
                          {" "}
                          <div
                            onClick={() => prev("three")}
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
                            onClick={() => next("three")}
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
                  <div className="shadow-placeholder">
                    <div className="shadow-placeholder-title"></div>
                    <div className="shadow-placeholder-slider">
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide-mini"></div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            false
          )}
          {puddingChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="birthday-cakes">
                    <h2>Pudding</h2>
                    <div id="slider-container-four" className="slider">
                      {sweets
                        .filter(
                          (fSweet) =>
                            fSweet.category === "Sweets" &&
                            fSweet.type === "Pudding"
                        )
                        .map((sweet, i) => {
                          return (
                            <div
                              key={sweet._id}
                              className="slide"
                              onClick={() => handlSlide(sweet._id)}
                            >
                              <img
                                src={require(`../uploads/productsImages/${sweet.image}`)}
                                alt={sweet.type}
                              />
                              <div className="img-overlay">
                                <p>{sweet.type}</p>
                                <p>Weight: {sweet.weight} kg</p>
                                <p>Price: $ {sweet.price}</p>
                              </div>
                            </div>
                          );
                        })}
                      {sweets.filter(
                        (fSweet) =>
                          fSweet.category === "Sweets" &&
                          fSweet.type === "Pudding"
                      ).length >= 5 ? (
                        <>
                          <div
                            onClick={() => prev("four")}
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
                            onClick={() => next("four")}
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
                  <div className="shadow-placeholder">
                    <div className="shadow-placeholder-title"></div>
                    <div className="shadow-placeholder-slider">
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide"></div>
                      <div className="shadow-placeholder-slide-mini"></div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            false
          )}
        </div>
        <div className="overlay" onClick={handlSlide}></div>
      </div>
    </div>
  );
}
