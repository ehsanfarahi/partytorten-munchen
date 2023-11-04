import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowUp } from "react-icons/md";

// React Icon
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarRightExpand,
} from "react-icons/tb";

export default function Cake() {
  const [birthCakesChecked, setBirthCakesChecked] = useState(true);
  const [chocoCakesChecked, setChocoCakesChecked] = useState(true);
  const [fruitsCakesChecked, setFruitsCakesChecked] = useState(true);
  const [casualCakesChecked, setCasualCakesChecked] = useState(true);

  const handleBirthCakesCheck = (e) => {
    setBirthCakesChecked(!e);
  };

  const handleChocoCakesCheck = (e) => {
    setChocoCakesChecked(!e);
  };

  const handleFruitsCakesCheck = (e) => {
    setFruitsCakesChecked(!e);
  };

  const handleCasualCakesCheck = (e) => {
    setCasualCakesChecked(!e);
  };

  // const handleFilter = () => {
  //   document.querySelector(".filter-engine").classList.toggle("display-none");
  //   document
  //     .querySelector(".filter-show-hide")
  //     .classList.toggle("filter-rotate-180");
  // };

  const [cakes, setCakes] = useState([]);

  const [displayContent, setDisplayContent] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:3001/products").then((response) => {
      response.json().then((result) => {
        setCakes(result);
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

  const [displayFilterIcon, setDisplayFilterIcon] = useState(false);

  useEffect(() => {
    document
      .querySelector(".left-side-list")
      .classList.add("show-hide-ipad-size-filter");
  }, []);

  function handleFilterIcon() {
    document
      .querySelector(".left-side-list")
      .classList.toggle("show-hide-ipad-size-filter");

    setDisplayFilterIcon((e) => !e);
  }

  return (
    <div>
      <div className="cake-container">
        <div className="left-side-list">
          <div className="search-bar">
            <input type="text" placeholder="Search more cakes" />
          </div>
          <p className="filter-heading">Filter Cakes</p>
          <div className="filter-container">
            <div className="filter-engine">
              <p>Cakes Type</p>
              <div className="filter-cakes-types">
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={birthCakesChecked}
                    onChange={() => {
                      handleBirthCakesCheck(birthCakesChecked);
                    }}
                  />
                  <label>
                    Birthday Cakes: (
                    {
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" &&
                          fCake.type === "Birthday Cakes"
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={chocoCakesChecked}
                    onChange={() => {
                      handleChocoCakesCheck(chocoCakesChecked);
                    }}
                  />
                  <label>
                    Chocolate Cakes: (
                    {
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" &&
                          fCake.type === "Chocolate Cakes"
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={fruitsCakesChecked}
                    onChange={() => {
                      handleFruitsCakesCheck(fruitsCakesChecked);
                    }}
                  />
                  <label>
                    Fruits Cakes: (
                    {
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" &&
                          fCake.type === "Fruits Cakes"
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={casualCakesChecked}
                    onChange={() => {
                      handleCasualCakesCheck(casualCakesChecked);
                    }}
                  />
                  <label>
                    Casual Cakes: (
                    {
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" &&
                          fCake.type === "Casual Cakes"
                      ).length
                    }
                    )
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-engine">
              <p>Cakes Price</p>
              <div className="filter-cakes-types">
                <div className="filter-form-control">
                  <input defaultChecked type="checkbox" />
                  <label>All prices</label>
                </div>
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>
                    Below $ 40: (
                    {
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" && fCake.price < 40
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
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" &&
                          fCake.price >= 40 &&
                          fCake.price <= 50
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
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" &&
                          fCake.price >= 51 &&
                          fCake.price <= 60
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
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" &&
                          fCake.price >= 61 &&
                          fCake.price <= 70
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>
                    Above $ 70: (
                    {
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" && fCake.price > 70
                      ).length
                    }
                    )
                  </label>
                </div>
                <div>
                  <p>
                    Result:{" "}
                    {cakes.filter((fCake) => fCake.category === "Cakes").length}{" "}
                    {cakes.filter((fCake) => fCake.category === "Cakes")
                      .length === 1
                      ? "cake"
                      : "cakes"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-side-list-mobile">
          <div className="search-bar">
            <input type="text" placeholder="Search more cakes" />
          </div>
          <p className="filter-heading">
            Filter Cakes{" "}
            <MdKeyboardArrowUp
              className="filter-icon"
              onClick={rotateFilterIcon}
            />
          </p>
          <div className="filter-container">
            <div className="filter-engine">
              <p>Cakes Type</p>
              <div className="filter-cakes-types">
                {/* <div className="filter-form-control">
                  <label>All types</label>
                  <input type="checkbox" defaultChecked />
                </div> */}
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={birthCakesChecked}
                    onChange={() => {
                      handleBirthCakesCheck(birthCakesChecked);
                    }}
                  />
                  <label>
                    Birthday Cakes: (
                    {
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" &&
                          fCake.type === "Birthday Cakes"
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={chocoCakesChecked}
                    onChange={() => {
                      handleChocoCakesCheck(chocoCakesChecked);
                    }}
                  />
                  <label>
                    Chocolate Cakes: (
                    {
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" &&
                          fCake.type === "Chocolate Cakes"
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={fruitsCakesChecked}
                    onChange={() => {
                      handleFruitsCakesCheck(fruitsCakesChecked);
                    }}
                  />
                  <label>
                    Fruits Cakes: (
                    {
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" &&
                          fCake.type === "Fruits Cakes"
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={casualCakesChecked}
                    onChange={() => {
                      handleCasualCakesCheck(casualCakesChecked);
                    }}
                  />
                  <label>
                    Casual Cakes: (
                    {
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" &&
                          fCake.type === "Casual Cakes"
                      ).length
                    }
                    )
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-engine">
              <p>Cakes Price</p>
              <div className="filter-cakes-types">
                <div className="filter-form-control">
                  <input defaultChecked type="checkbox" />
                  <label>All prices</label>
                </div>
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>
                    Below $ 40: (
                    {
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" && fCake.price < 40
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
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" &&
                          fCake.price >= 40 &&
                          fCake.price <= 50
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
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" &&
                          fCake.price >= 51 &&
                          fCake.price <= 60
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
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" &&
                          fCake.price >= 61 &&
                          fCake.price <= 70
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>
                    Above $ 70: (
                    {
                      cakes.filter(
                        (fCake) =>
                          fCake.category === "Cakes" && fCake.price > 70
                      ).length
                    }
                    )
                  </label>
                </div>
              </div>
              <div>
                <p>
                  Result:{" "}
                  {cakes.filter((fCake) => fCake.category === "Cakes").length}{" "}
                  {cakes.filter((fCake) => fCake.category === "Cakes")
                    .length === 1
                    ? "cake"
                    : "cakes"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div
            onClick={handleFilterIcon}
            className="show-hide-ipad-size-filter-icon"
          >
            {displayFilterIcon ? (
              <TbLayoutSidebarRightExpand />
            ) : (
              <TbLayoutSidebarLeftExpand />
            )}
          </div>

          {birthCakesChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="c-birthday-cakes">
                    <h2>Birthday Cakes</h2>
                    <div id="slider-container-one" className="slider">
                      {cakes
                        .filter(
                          (fCake) =>
                            fCake.category === "Cakes" &&
                            fCake.type === "Birthday Cakes"
                        )
                        .map((cake, i) => {
                          return (
                            <div
                              key={cake._id}
                              className="slide"
                              onClick={() => handlSlide(cake._id)}
                            >
                              <img
                                src={require(`../uploads/productsImages/${cake.image}`)}
                                alt={cake.type}
                              />
                              <div className="img-overlay">
                                <p>{cake.title}</p>
                                <p>Weight: {cake.weight} kg</p>
                                <p>Price: $ {cake.price}</p>
                              </div>
                            </div>
                          );
                        })}
                      {cakes.filter(
                        (fCake) => fCake.category === "Birthday Cakes"
                      ).length >= 6 ? (
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
          {chocoCakesChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="birthday-cakes">
                    <h2>Chocolate Cakes</h2>
                    <div id="slider-container-two" className="slider">
                      {cakes
                        .filter(
                          (fCake) =>
                            fCake.category === "Cakes" &&
                            fCake.type === "Chocolate Cakes"
                        )
                        .map((cake, i) => {
                          return (
                            <div
                              key={cake._id}
                              className="slide"
                              onClick={() => handlSlide(cake._id)}
                            >
                              <img
                                src={require(`../uploads/productsImages/${cake.image}`)}
                                alt={cake.type}
                              />
                              <div className="img-overlay">
                                <p>{cake.type}</p>
                                <p>Weight: {cake.weight} kg</p>
                                <p>Price: $ {cake.price}</p>
                              </div>
                            </div>
                          );
                        })}
                      {cakes.filter(
                        (fCake) => fCake.category === "Chocolate Cakes"
                      ).length >= 6 ? (
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
          {fruitsCakesChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="birthday-cakes">
                    <h2>Fruits Cakes</h2>
                    <div id="slider-container-three" className="slider">
                      {cakes
                        .filter(
                          (fCake) =>
                            fCake.category === "Cakes" &&
                            fCake.type === "Fruits Cakes"
                        )
                        .map((cake, i) => {
                          return (
                            <div
                              key={cake._id}
                              className="slide"
                              onClick={() => handlSlide(cake._id)}
                            >
                              <img
                                src={require(`../uploads/productsImages/${cake.image}`)}
                                alt={cake.type}
                              />
                              <div className="img-overlay">
                                <p>{cake.type}</p>
                                <p>Weight: {cake.weight} kg</p>
                                <p>Price: $ {cake.price}</p>
                              </div>
                            </div>
                          );
                        })}
                      {cakes.filter(
                        (fCake) => fCake.category === "Fruits Cakes"
                      ).length >= 6 ? (
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
          {casualCakesChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="birthday-cakes">
                    <h2>Casual Cakes</h2>
                    <div id="slider-container-four" className="slider">
                      {cakes
                        .filter(
                          (fCake) =>
                            fCake.category === "Cakes" &&
                            fCake.type === "Casual Cakes"
                        )
                        .map((cake, i) => {
                          return (
                            <div
                              key={cake._id}
                              className="slide"
                              onClick={() => handlSlide(cake._id)}
                            >
                              <img
                                src={require(`../uploads/productsImages/${cake.image}`)}
                                alt={cake.type}
                              />
                              <div className="img-overlay">
                                <p>{cake.type}</p>
                                <p>Weight: {cake.weight} kg</p>
                                <p>Price: $ {cake.price}</p>
                              </div>
                            </div>
                          );
                        })}
                      {cakes.filter(
                        (fCake) => fCake.category === "Casual Cakes"
                      ).length >= 6 ? (
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

/*
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function Cake() {
  const [birthCakesChecked, setBirthCakesChecked] = useState(true);
  const [chocoCakesChecked, setChocoCakesChecked] = useState(true);
  const [fruitsCakesChecked, setFruitsCakesChecked] = useState(true);
  const [casualCakesChecked, setCasualCakesChecked] = useState(true);

  const handleBirthCakesCheck = (e) => {
    setBirthCakesChecked(!e);
  };

  const handleChocoCakesCheck = (e) => {
    setChocoCakesChecked(!e);
  };

  const handleFruitsCakesCheck = (e) => {
    setFruitsCakesChecked(!e);
  };

  const handleCasualCakesCheck = (e) => {
    setCasualCakesChecked(!e);
  };

  const handleFilter = () => {
    document.querySelector(".filter-engine").classList.toggle("display-none");
    document
      .querySelector(".filter-show-hide")
      .classList.toggle("filter-rotate-180");
  };

  const navigate = useNavigate();

  const [cakes, setCakes] = useState([]);

  const [displayContent, setDisplayContent] = useState(true);

  function prev() {
    document.getElementById("slider-container").scrollLeft -= 150;
  }

  function next() {
    document.getElementById("slider-container").scrollLeft += 150;
  }

  function handlSlide() {
    navigate("/product-details");
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
      <div className="cake-container">
        <div className="left-side-list">
          <div className="search-bar">
            <input type="text" placeholder="Search more cakes" />
          </div>
          <div className="filter-container">
            <p className="filter-heading">Filter Cakes</p>{" "}
            <FontAwesomeIcon
              onClick={handleFilter}
              className="filter-show-hide"
              icon={faAngleDown}
            />
            <div className="filter-engine">
              <div className="filter-cakes-types">
                <p>Cakes Type</p>
                <div className="filter-form-control">
                  <label>All types</label>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="filter-form-control">
                  <label>
                    Birthday Cakes:{" "}
                    {
                      cakes.filter(
                        (fCake) => fCake.category === "Birthday Cakes"
                      ).length
                    }
                  </label>
                  <input
                    type="checkbox"
                    defaultChecked={birthCakesChecked}
                    onChange={() => {
                      handleBirthCakesCheck(birthCakesChecked);
                    }}
                  />
                </div>
                <div className="filter-form-control">
                  <label>
                    Chocolate Cakes:{" "}
                    {
                      cakes.filter(
                        (fCake) => fCake.category === "Chocolate Cakes"
                      ).length
                    }
                  </label>
                  <input
                    type="checkbox"
                    defaultChecked={chocoCakesChecked}
                    onChange={() => {
                      handleChocoCakesCheck(chocoCakesChecked);
                    }}
                  />
                </div>
                <div className="filter-form-control">
                  <label>
                    Fruits Cakes:{" "}
                    {
                      cakes.filter((fCake) => fCake.category === "Fruits Cakes")
                        .length
                    }
                  </label>
                  <input
                    type="checkbox"
                    defaultChecked={fruitsCakesChecked}
                    onChange={() => {
                      handleFruitsCakesCheck(fruitsCakesChecked);
                    }}
                  />
                </div>
                <div className="filter-form-control">
                  <label>
                    Casual Cakes:{" "}
                    {
                      cakes.filter((fCake) => fCake.category === "Casual Cakes")
                        .length
                    }
                  </label>
                  <input
                    type="checkbox"
                    defaultChecked={casualCakesChecked}
                    onChange={() => {
                      handleCasualCakesCheck(casualCakesChecked);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="filter-engine">
              <div className="filter-cakes-types">
                <p>Cakes Price</p>
                <div className="filter-form-control">
                  <label>All prices</label>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="filter-form-control">
                  <label>Below $ 40</label>
                  <input type="checkbox" />
                </div>
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
                <div className="filter-form-control">
                  <label>Above $ 70</label>
                  <input type="checkbox" />
                </div>
                <div>
                  <p>Result: {cakes.length} cakes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-side-list-mobile">
          <div className="search-bar">
            <input type="text" placeholder="Search more cakes" />
          </div>
          <p className="filter-heading">
            Filter Cakes{" "}
            <MdKeyboardArrowUp
              className="filter-icon"
              onClick={rotateFilterIcon}
            />
          </p>
          <div className="filter-container">
            <FontAwesomeIcon
              onClick={handleFilter}
              className="filter-show-hide"
              icon={faAngleDown}
            />
            <div className="filter-engine">
              <p>Cakes Type</p>
              <div className="filter-cakes-types">
                <div className="filter-form-control">
                  <label>All types</label>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="filter-form-control">
                  <label>
                    Birthday Cakes:{" "}
                    {
                      cakes.filter(
                        (fCake) => fCake.category === "Birthday Cakes"
                      ).length
                    }
                  </label>
                  <input
                    type="checkbox"
                    defaultChecked={birthCakesChecked}
                    onChange={() => {
                      handleBirthCakesCheck(birthCakesChecked);
                    }}
                  />
                </div>
                <div className="filter-form-control">
                  <label>
                    Chocolate Cakes:{" "}
                    {
                      cakes.filter(
                        (fCake) => fCake.category === "Chocolate Cakes"
                      ).length
                    }
                  </label>
                  <input
                    type="checkbox"
                    defaultChecked={chocoCakesChecked}
                    onChange={() => {
                      handleChocoCakesCheck(chocoCakesChecked);
                    }}
                  />
                </div>
                <div className="filter-form-control">
                  <label>
                    Fruits Cakes:{" "}
                    {
                      cakes.filter((fCake) => fCake.category === "Fruits Cakes")
                        .length
                    }
                  </label>
                  <input
                    type="checkbox"
                    defaultChecked={fruitsCakesChecked}
                    onChange={() => {
                      handleFruitsCakesCheck(fruitsCakesChecked);
                    }}
                  />
                </div>
                <div className="filter-form-control">
                  <label>
                    Casual Cakes:{" "}
                    {
                      cakes.filter((fCake) => fCake.category === "Casual Cakes")
                        .length
                    }
                  </label>
                  <input
                    type="checkbox"
                    defaultChecked={casualCakesChecked}
                    onChange={() => {
                      handleCasualCakesCheck(casualCakesChecked);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="filter-engine">
              <p>Cakes Price</p>
              <div className="filter-cakes-types">
                <div className="filter-form-control">
                  <label>All prices</label>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="filter-form-control">
                  <label>Below $ 40</label>
                  <input type="checkbox" />
                </div>
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
                <div className="filter-form-control">
                  <label>Above $ 70</label>
                  <input type="checkbox" />
                </div>
                <div>
                  <p>Result: {cakes.length} cakes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          {birthCakesChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="birthday-cakes">
                    <h2>Birthday Cakes</h2>
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
                      <div className="slide" onClick={handlSlide}>
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
          {chocoCakesChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="birthday-cakes">
                    <h2>Chocolate Cakes</h2>
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
          {fruitsCakesChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="birthday-cakes">
                    <h2>Fruits Cakes</h2>
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
          {casualCakesChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="birthday-cakes">
                    <h2>Casual Cakes</h2>
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

*/
