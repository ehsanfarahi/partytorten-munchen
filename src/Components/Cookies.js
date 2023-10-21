import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function Cookies() {
  const [chocolateCookiesChecked, setChocolateCookiesChecked] = useState(true);
  const [honeyCookiesChecked, setHoneyCookiesChecked] = useState(true);
  const [saltyCookiesChecked, setSaltyCookiesChecked] = useState(true);
  const [homeMadeCookiesChecked, setHomeMadeCookiesChecked] = useState(true);

  const handleChocolateCookiesCheck = (e) => {
    setChocolateCookiesChecked(!e);
  };

  const handleHoneyCookiesCheck = (e) => {
    setHoneyCookiesChecked(!e);
  };

  const handleSaltyCookiesCheck = (e) => {
    setSaltyCookiesChecked(!e);
  };

  const handleHomeMadeCookiesCheck = (e) => {
    setHomeMadeCookiesChecked(!e);
  };

  const [cookies, setCookies] = useState([]);

  const [displayContent, setDisplayContent] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:3001/products").then((response) => {
      response.json().then((result) => {
        setCookies(result);
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
      <div className="cookies-container">
        <div className="left-side-list">
          <div className="search-bar">
            <input type="text" placeholder="Search more cookies" />
          </div>
          <p className="filter-heading">Filter Cookies</p>
          <div className="filter-container">
            <div className="filter-engine">
              <p>Cookies Type</p>
              <div className="filter-cookies-types">
                {/* <div className="filter-form-control">
                  <label>All types</label>
                  <input type="checkbox" defaultChecked />
                </div> */}
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={chocolateCookiesChecked}
                    onChange={() => {
                      handleChocolateCookiesCheck(chocolateCookiesChecked);
                    }}
                  />
                  <label>
                    Chocolate Cookies: (
                    {
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.type === "Chocolate Cookies"
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={honeyCookiesChecked}
                    onChange={() => {
                      handleHoneyCookiesCheck(honeyCookiesChecked);
                    }}
                  />
                  <label>
                    Honey Cookies: (
                    {
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.type === "Honey Cookies"
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={saltyCookiesChecked}
                    onChange={() => {
                      handleSaltyCookiesCheck(saltyCookiesChecked);
                    }}
                  />
                  <label>
                    Salty Cookies: (
                    {
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.type === "Salty Cookies"
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={homeMadeCookiesChecked}
                    onChange={() => {
                      handleHomeMadeCookiesCheck(homeMadeCookiesChecked);
                    }}
                  />
                  <label>
                    Home Made Cookies: (
                    {
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.type === "Home Made Cookies"
                      ).length
                    }
                    )
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-engine">
              <p>Cookies Price</p>
              <div className="filter-cookies-types">
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>All prices</label>
                </div>
                <div className="filter-form-control">
                  <input type="checkbox" defaultChecked />
                  <label>
                    Below $ 40: (
                    {
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" && fCookie.price < 40
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
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.price >= 40 &&
                          fCookie.price <= 50
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
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.price >= 51 &&
                          fCookie.price <= 60
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
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.price >= 61 &&
                          fCookie.price <= 70
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
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" && fCookie.price > 70
                      ).length
                    }
                    )
                  </label>
                </div>
                <div>
                  <p>
                    Result:{" "}
                    {
                      cookies.filter(
                        (fCookie) => fCookie.category === "Cookies"
                      ).length
                    }{" "}
                    {cookies.filter((fCookie) => fCookie.category === "Cookies")
                      .length === 1
                      ? "cookie"
                      : "cookies"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-side-list-mobile">
          <div className="search-bar">
            <input type="text" placeholder="Search more cookies" />
          </div>
          <p className="filter-heading">
            Filter Cookies{" "}
            <MdKeyboardArrowUp
              className="filter-icon"
              onClick={rotateFilterIcon}
            />
          </p>
          <div className="filter-container">
            <div className="filter-engine">
              <p>Cookies Type</p>
              <div className="filter-cakes-types">
                {/* <div className="filter-form-control">
                  <label>All types</label>
                  <input type="checkbox" defaultChecked />
                </div> */}
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={chocolateCookiesChecked}
                    onChange={() => {
                      handleChocolateCookiesCheck(chocolateCookiesChecked);
                    }}
                  />
                  <label>
                    Chocolate Cookies: (
                    {
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.type === "Chocolate Cookies"
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={honeyCookiesChecked}
                    onChange={() => {
                      handleHoneyCookiesCheck(honeyCookiesChecked);
                    }}
                  />
                  <label>
                    Honey Cookies: (
                    {
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.type === "Honey Cookies"
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={saltyCookiesChecked}
                    onChange={() => {
                      handleSaltyCookiesCheck(saltyCookiesChecked);
                    }}
                  />
                  <label>
                    Salty Cookies: (
                    {
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.type === "Salty Cookies"
                      ).length
                    }
                    )
                  </label>
                </div>
                <div className="filter-form-control">
                  <input
                    type="checkbox"
                    defaultChecked={homeMadeCookiesChecked}
                    onChange={() => {
                      handleHomeMadeCookiesCheck(homeMadeCookiesChecked);
                    }}
                  />
                  <label>
                    Home Made Cookies: (
                    {
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.type === "Home Made Cookies"
                      ).length
                    }
                    )
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-engine">
              <p>Cookies Price</p>
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
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" && fCookie.price < 40
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
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.price >= 40 &&
                          fCookie.price <= 50
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
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.price >= 51 &&
                          fCookie.price <= 60
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
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.price >= 61 &&
                          fCookie.price <= 70
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
                      cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" && fCookie.price > 70
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
                    cookies.filter((fCookie) => fCookie.category === "Cookies")
                      .length
                  }{" "}
                  {cookies.filter((fCookie) => fCookie.category === "Cookies")
                    .length === 1
                    ? "cookie"
                    : "cookies"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          {chocolateCookiesChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="c-birthday-cakes">
                    <h2>Chocolate Cookies</h2>
                    <div id="slider-container-one" className="slider">
                      {cookies
                        .filter(
                          (fCookie) =>
                            fCookie.category === "Cookies" &&
                            fCookie.type === "Chocolate Cookies"
                        )
                        .map((cookie, i) => {
                          return (
                            <div
                              key={cookie._id}
                              className="slide"
                              onClick={() => handlSlide(cookie._id)}
                            >
                              <img
                                src={require(`../uploads/productsImages/${cookie.image}`)}
                                alt={cookie.type}
                              />
                              <div className="img-overlay">
                                <p>{cookie.type}</p>
                                <p>Weight: {cookie.weight} kg</p>
                                <p>Price: $ {cookie.price}</p>
                              </div>
                            </div>
                          );
                        })}
                      {cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.type === "Chocolate Cookies"
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
          {honeyCookiesChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="birthday-cakes">
                    <h2>Honey Cookies</h2>
                    <div id="slider-container-two" className="slider">
                      {cookies
                        .filter(
                          (fCookie) =>
                            fCookie.category === "Cookies" &&
                            fCookie.type === "Honey Cookies"
                        )
                        .map((cookie, i) => {
                          return (
                            <div
                              key={cookie._id}
                              className="slide"
                              onClick={() => handlSlide(cookie._id)}
                            >
                              <img
                                src={require(`../uploads/productsImages/${cookie.image}`)}
                                alt={cookie.type}
                              />
                              <div className="img-overlay">
                                <p>{cookie.type}</p>
                                <p>Weight: {cookie.weight} kg</p>
                                <p>Price: $ {cookie.price}</p>
                              </div>
                            </div>
                          );
                        })}
                      {cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.type === "Honey Cookies"
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
          {saltyCookiesChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="birthday-cakes">
                    <h2>Salty Cookies</h2>
                    <div id="slider-container-three" className="slider">
                      {cookies
                        .filter(
                          (fCookie) =>
                            fCookie.category === "Cookies" &&
                            fCookie.type === "Salty Cookies"
                        )
                        .map((cookie, i) => {
                          return (
                            <div
                              key={cookie._id}
                              className="slide"
                              onClick={() => handlSlide(cookie._id)}
                            >
                              <img
                                src={require(`../uploads/productsImages/${cookie.image}`)}
                                alt={cookie.type}
                              />
                              <div className="img-overlay">
                                <p>{cookie.type}</p>
                                <p>Weight: {cookie.weight} kg</p>
                                <p>Price: $ {cookie.price}</p>
                              </div>
                            </div>
                          );
                        })}
                      {cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.type === "Salty Cookies"
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
          {homeMadeCookiesChecked ? (
            <div>
              {displayContent ? (
                <>
                  <div className="birthday-cakes">
                    <h2>Home Made Cookies</h2>
                    <div id="slider-container-four" className="slider">
                      {cookies
                        .filter(
                          (fCookie) =>
                            fCookie.category === "Cookies" &&
                            fCookie.type === "Home Made Cookies"
                        )
                        .map((cookie, i) => {
                          return (
                            <div
                              key={cookie._id}
                              className="slide"
                              onClick={() => handlSlide(cookie._id)}
                            >
                              <img
                                src={require(`../uploads/productsImages/${cookie.image}`)}
                                alt={cookie.type}
                              />
                              <div className="img-overlay">
                                <p>{cookie.type}</p>
                                <p>Weight: {cookie.weight} kg</p>
                                <p>Price: $ {cookie.price}</p>
                              </div>
                            </div>
                          );
                        })}
                      {cookies.filter(
                        (fCookie) =>
                          fCookie.category === "Cookies" &&
                          fCookie.type === "Home Made Cookies"
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
