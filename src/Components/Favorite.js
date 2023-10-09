import { useEffect, useState } from "react";

const Favorite = () => {
  const fav = localStorage.getItem("ptFav");

  const [favData, setFavData] = useState([]);
  console.log(favData);

  const [displayBtn, setDisplayBtn] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/products").then((response) => {
      response.json().then((result) => {
        setFavData(result);
      });
    });
  }, []);

  function handleFav() {
    setDisplayBtn(false);
  }

  function handleFavLeave(e) {
    setDisplayBtn(true);
  }

  function handleRemove() {
    localStorage.removeItem("ptFav");
  }

  return (
    <div className="favorite-container">
      <div className="main-container">
        <div className="main-container-header">
          <p>
            Favorites{" "}
            <span>({favData.filter((fFav) => fFav._id === fav).length})</span>
          </p>
          <div className="display"></div>
        </div>
        {fav ? (
          <div className="main-container-body">
            {favData
              .filter((fFav) => fFav._id === fav)
              .map((fav, i) => {
                return (
                  <div className="display-item" key={fav._id}>
                    <div className="item-img">
                      <img
                        src={require("../uploads/productsImages/" + fav.image)}
                        alt={fav.type}
                      />
                    </div>
                    <div className="item-detail">
                      <div className="item-detail-heading">
                        <p>
                          <span>{fav.type}</span> - <span>{fav.title}</span>
                        </p>
                      </div>
                      <div className="item-detail-weight">
                        <p>Weight:</p>
                        <p>{fav.weight} kg</p>
                      </div>
                      <div className="item-detail-price">
                        <p>Price:</p>
                        <p>${fav.price}</p>
                      </div>
                    </div>
                    <div className="item-action">
                      {displayBtn ? (
                        <>
                          <button onMouseEnter={handleFav} className="fav-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 512 512"
                            >
                              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                            </svg>{" "}
                            Favorite
                          </button>
                        </>
                      ) : (
                        <>
                          {" "}
                          <button
                            onMouseLeave={handleFavLeave}
                            onClick={handleRemove}
                            className="remove-btn"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 384 512"
                            >
                              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>{" "}
                            Remove
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="main-container-body">
            <h3>No favorite items available!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
