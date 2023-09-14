/*
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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

  const [cakes, setCakes] = useState([]);

  const [displayContent, setDisplayContent] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/cakes").then((response) => {
      response.json().then((result) => {
        setCakes(result);
        setDisplayContent(true);
      });
    });
  }, []);

  function prev() {
    document.getElementById("slider-container").scrollLeft -= 150;
  }

  function next() {
    document.getElementById("slider-container").scrollLeft += 150;
  }

  function handlSlide() {
    document.querySelector(".slide img").classList.toggle("zoomed");
    document.querySelector(".overlay").classList.toggle("active");
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
        <div className="content">
          {birthCakesChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="birthday-cakes">
                    <h2>Birthday Cakes</h2>
                    <div id="slider-container" className="slider">
                      {cakes
                        .filter((fCake) => fCake.category === "Birthday Cakes")
                        .map((cake, i) => {
                          return (
                            <div
                              key={cake._id}
                              className="slide"
                              onClick={handlSlide}
                            >
                              <img
                                src={require(`../../../server/uploads/cakesImages/${cake.image}`)}
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
                      {cakes
                        .filter((fCake) => fCake.category === "Chocolate Cakes")
                        .map((cake, i) => {
                          return (
                            <div
                              key={cake._id}
                              className="slide"
                              onClick={handlSlide}
                            >
                              <img
                                src={require(`../../../server/uploads/cakesImages/${cake.image}`)}
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
                      {cakes
                        .filter((fCake) => fCake.category === "Fruits Cakes")
                        .map((cake, i) => {
                          return (
                            <div
                              key={cake._id}
                              className="slide"
                              onClick={handlSlide}
                            >
                              <img
                                src={require(`../../../server/uploads/cakesImages/${cake.image}`)}
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
                      {cakes
                        .filter((fCake) => fCake.category === "Casual Cakes")
                        .map((cake, i) => {
                          return (
                            <div
                              key={cake._id}
                              className="slide"
                              onClick={handlSlide}
                            >
                              <img
                                src={require(`../../../server/uploads/cakesImages/${cake.image}`)}
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

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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

  const [cakes, setCakes] = useState([]);

  const [displayContent, setDisplayContent] = useState(false);

  function prev() {
    document.getElementById("slider-container").scrollLeft -= 150;
  }

  function next() {
    document.getElementById("slider-container").scrollLeft += 150;
  }

  function handlSlide() {
    document.querySelector(".slide img").classList.toggle("zoomed");
    document.querySelector(".overlay").classList.toggle("active");
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
        <div className="content">
          {birthCakesChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="birthday-cakes">
                    <h2>Birthday Cakes</h2>
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
