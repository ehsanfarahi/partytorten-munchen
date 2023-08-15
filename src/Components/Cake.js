import { useState } from "react";

import cake1 from "../images/cake1.jpg";
import cake2 from "../images/cake2.jpeg";
import cake3 from "../images/cake3.jpeg";
import cake4 from "../images/cake4.jpeg";
import cake5 from "../images/cake5.jpeg";

import fruitCake1 from "../images/fruit-cake1.jpeg";
import fruitCake2 from "../images/fruit-cake2.jpg";
import fruitCake3 from "../images/fruit-cake3.jpeg";
import fruitCake4 from "../images/fruit-cake4.jpg";
import fruitCake5 from "../images/fruit-cake5.jpg";

import chocoCake1 from "../images/choco-cake1.jpeg";
import chocoCake2 from "../images/choco-cake2.jpeg";
import chocoCake3 from "../images/choco-cake3.jpeg";
import chocoCake4 from "../images/choco-cake4.jpeg";
import chocoCake5 from "../images/choco-cake5.jpeg";

import casualCake1 from "../images/casual-cake1.jpeg";
import casualCake2 from "../images/casual-cake2.jpeg";
import casualCake3 from "../images/casual-cake3.jpeg";
import casualCake4 from "../images/casual-cake4.jpeg";
import casualCake5 from "../images/casual-cake5.jpeg";

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
                  <label>Birthday Cakes</label>
                  <input
                    type="checkbox"
                    defaultChecked={birthCakesChecked}
                    onChange={() => {
                      handleBirthCakesCheck(birthCakesChecked);
                    }}
                  />
                </div>
                <div className="filter-form-control">
                  <label>Chocolate Cakes</label>
                  <input
                    type="checkbox"
                    defaultChecked={chocoCakesChecked}
                    onChange={() => {
                      handleChocoCakesCheck(chocoCakesChecked);
                    }}
                  />
                </div>
                <div className="filter-form-control">
                  <label>Fruits Cakes</label>
                  <input
                    type="checkbox"
                    defaultChecked={fruitsCakesChecked}
                    onChange={() => {
                      handleFruitsCakesCheck(fruitsCakesChecked);
                    }}
                  />
                </div>
                <div className="filter-form-control">
                  <label>Casual Cakes</label>
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
                  <p>Result: 20 cakes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          {birthCakesChecked ? (
            <div className="birthday-cakes">
              <h2>Birthday Cakes</h2>
              <div className="cakes-list">
                <img src={cake1} alt="birthday cake" width="150" height="150" />
                <img src={cake2} alt="birthday cake" width="150" height="150" />
                <img src={cake3} alt="birthday cake" width="150" height="150" />
                <img src={cake4} alt="birthday cake" width="150" height="150" />
                <img src={cake5} alt="birthday cake" width="150" height="150" />
              </div>
            </div>
          ) : (
            false
          )}
          {chocoCakesChecked ? (
            <div className="chocolate-cakes">
              <h2>Chocolate Cakes</h2>
              <div className="cakes-list">
                <img
                  src={chocoCake1}
                  alt="birthday cake"
                  width="150"
                  height="150"
                />
                <img
                  src={chocoCake2}
                  alt="birthday cake"
                  width="150"
                  height="150"
                />
                <img
                  src={chocoCake3}
                  alt="birthday cake"
                  width="150"
                  height="150"
                />
                <img
                  src={chocoCake4}
                  alt="birthday cake"
                  width="150"
                  height="150"
                />
                <img
                  src={chocoCake5}
                  alt="birthday cake"
                  width="150"
                  height="150"
                />
              </div>
            </div>
          ) : (
            false
          )}
          {fruitsCakesChecked ? (
            <div className="strawberry-cakes">
              <h2>Fruits Cakes</h2>
              <div className="cakes-list">
                <img
                  src={fruitCake1}
                  alt="birthday cake"
                  width="150"
                  height="150"
                />
                <img
                  src={fruitCake2}
                  alt="birthday cake"
                  width="150"
                  height="150"
                />
                <img
                  src={fruitCake3}
                  alt="birthday cake"
                  width="150"
                  height="150"
                />
                <img
                  src={fruitCake4}
                  alt="birthday cake"
                  width="150"
                  height="150"
                />
                <img
                  src={fruitCake5}
                  alt="birthday cake"
                  width="150"
                  height="150"
                />
              </div>
            </div>
          ) : (
            false
          )}
          {casualCakesChecked ? (
            <div className="casual-cakes">
              <h2>Casual Cakes</h2>
              <div className="cakes-list">
                <img
                  src={casualCake1}
                  alt="birthday cake"
                  width="150"
                  height="150"
                />
                <img
                  src={casualCake2}
                  alt="birthday cake"
                  width="150"
                  height="150"
                />
                <img
                  src={casualCake3}
                  alt="birthday cake"
                  width="150"
                  height="150"
                />
                <img
                  src={casualCake4}
                  alt="birthday cake"
                  width="150"
                  height="150"
                />
                <img
                  src={casualCake5}
                  alt="birthday cake"
                  width="150"
                  height="150"
                />
              </div>
            </div>
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
}
