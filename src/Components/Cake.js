import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// React Icons
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarRightExpand,
} from "react-icons/tb";
import { MdKeyboardArrowUp } from "react-icons/md";

// Components
import ProductCatDisplay from "./ProductCatDisplay";

export default function Cake() {
  const navigate = useNavigate();

  // States
  const [cakes, setCakes] = useState([]);
  const [displayContent, setDisplayContent] = useState(false);
  const [birthCakesChecked, setBirthCakesChecked] = useState(true);
  const [chocoCakesChecked, setChocoCakesChecked] = useState(true);
  const [fruitsCakesChecked, setFruitsCakesChecked] = useState(true);
  const [casualCakesChecked, setCasualCakesChecked] = useState(true);
  const [displayFilterIcon, setDisplayFilterIcon] = useState(false);
  const [belowForty, setBelowForty] = useState(true);
  const [fortyFifty, setFortyFifty] = useState(true);
  const [fiftySixty, setFiftySixty] = useState(true);
  const [sixtySeventy, setSixtySeventy] = useState(true);
  const [fromSeventy, setFromSeventy] = useState(true);

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

  // Hooks
  useEffect(() => {
    fetch("http://127.0.0.1:3001/products").then((response) => {
      response.json().then((result) => {
        setCakes(result);
        setDisplayContent(true);
      });
    });
  }, []);

  useEffect(() => {
    document
      .querySelector(".left-side-list-mobile .filter-container")
      .classList.add("display-none");
  });

  useEffect(() => {
    document
      .querySelector(".left-side-list")
      .classList.add("show-hide-ipad-size-filter");
  }, []);

  // functions
  function handlSlide(id) {
    navigate("/product-details/" + id);
    // document.querySelector(".slide img").classList.toggle("zoomed");
    // document.querySelector(".overlay").classList.toggle("active");
  }

  function rotateFilterIcon() {
    document
      .querySelector(".filter-icon")
      .classList.toggle("filter-icon-rotation");

    document
      .querySelector(".left-side-list-mobile .filter-container")
      .classList.toggle("display-flex");
  }

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
                <FilterFormControl
                  productChecked={birthCakesChecked}
                  handleProductCheck={handleBirthCakesCheck}
                  product={cakes}
                  productHeading="Birthday Cakes"
                  productCategory="Cakes"
                />
                <FilterFormControl
                  productChecked={chocoCakesChecked}
                  handleProductCheck={handleChocoCakesCheck}
                  product={cakes}
                  productHeading="Chocolate Cakes"
                  productCategory="Cakes"
                />
                <FilterFormControl
                  productChecked={fruitsCakesChecked}
                  handleProductCheck={handleFruitsCakesCheck}
                  product={cakes}
                  productHeading="Fruits Cakes"
                  productCategory="Cakes"
                />
                <FilterFormControl
                  productChecked={casualCakesChecked}
                  handleProductCheck={handleCasualCakesCheck}
                  product={cakes}
                  productHeading="Casual Cakes"
                  productCategory="Cakes"
                />
              </div>
            </div>
            <div className="filter-engine">
              <p>Cakes Price</p>
              <div className="filter-cakes-types">
                {/* <div className="filter-form-control">
                  <input defaultChecked type="checkbox" />
                  <label>All prices</label>
                </div> */}
                <FilterPriceFormControl
                  priceTag="Below $ 40"
                  product={cakes}
                  productCategory="Cakes"
                  min={0}
                  max={40}
                  priceChecked={belowForty}
                  handlePriceCheck={setBelowForty}
                />
                <FilterPriceFormControl
                  priceTag="$ 40 - 49"
                  product={cakes}
                  productCategory="Cakes"
                  min={40}
                  max={50}
                  priceChecked={fortyFifty}
                  handlePriceCheck={setFortyFifty}
                />
                <FilterPriceFormControl
                  priceTag="$ 50 - 59"
                  product={cakes}
                  productCategory="Cakes"
                  min={50}
                  max={60}
                  priceChecked={fiftySixty}
                  handlePriceCheck={setFiftySixty}
                />
                <FilterPriceFormControl
                  priceTag="$ 60 - 69"
                  product={cakes}
                  productCategory="Cakes"
                  min={60}
                  max={70}
                  priceChecked={sixtySeventy}
                  handlePriceCheck={setSixtySeventy}
                />
                <FilterPriceFormControl
                  priceTag="From $ 70"
                  product={cakes}
                  productCategory="Cakes"
                  min={70}
                  max={10000}
                  priceChecked={fromSeventy}
                  handlePriceCheck={setFromSeventy}
                />

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
                <FilterFormControl
                  productChecked={birthCakesChecked}
                  handleProductCheck={handleBirthCakesCheck}
                  product={cakes}
                  productHeading="Birthday Cakes"
                  productCategory="Cakes"
                />
                <FilterFormControl
                  productChecked={chocoCakesChecked}
                  handleProductCheck={handleChocoCakesCheck}
                  product={cakes}
                  productHeading="Chocolate Cakes"
                  productCategory="Cakes"
                />
                <FilterFormControl
                  productChecked={fruitsCakesChecked}
                  handleProductCheck={handleFruitsCakesCheck}
                  product={cakes}
                  productHeading="Fruits Cakes"
                  productCategory="Cakes"
                />
                <FilterFormControl
                  productChecked={casualCakesChecked}
                  handleProductCheck={handleCasualCakesCheck}
                  product={cakes}
                  productHeading="Casual Cakes"
                  productCategory="Cakes"
                />
              </div>
            </div>
            <div className="filter-engine">
              <p>Cakes Price</p>
              <div className="filter-cakes-types">
                <div className="filter-form-control">
                  <input defaultChecked type="checkbox" />
                  <label>All prices</label>
                </div>
                <FilterPriceFormControl
                  priceTag="Below $ 40"
                  product={cakes}
                  productCategory="Cakes"
                  min={0}
                  max={40}
                />
                <FilterPriceFormControl
                  priceTag="$ 40 - 49"
                  product={cakes}
                  productCategory="Cakes"
                  min={40}
                  max={50}
                />
                <FilterPriceFormControl
                  priceTag="$ 50 - 59"
                  product={cakes}
                  productCategory="Cakes"
                  min={50}
                  max={60}
                />
                <FilterPriceFormControl
                  priceTag="$ 60 - 69"
                  product={cakes}
                  productCategory="Cakes"
                  min={60}
                  max={70}
                />
                <FilterPriceFormControl
                  priceTag="From $ 70"
                  product={cakes}
                  productCategory="Cakes"
                  min={70}
                  max={10000}
                />
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

          <ProductCatDisplay
            productChecked={birthCakesChecked}
            displayContent={displayContent}
            product={cakes}
            handlSlide={handlSlide}
            productHeading="Birthday Cakes"
            category="Cakes"
            belowForty={belowForty}
            fortyFifty={fortyFifty}
            fiftySixty={fiftySixty}
            sixtySeventy={sixtySeventy}
            fromSeventy={fromSeventy}
          />

          <ProductCatDisplay
            productChecked={chocoCakesChecked}
            displayContent={displayContent}
            product={cakes}
            handlSlide={handlSlide}
            productHeading="Chocolate Cakes"
            category="Cakes"
            belowForty={belowForty}
            fortyFifty={fortyFifty}
            fiftySixty={fiftySixty}
            sixtySeventy={sixtySeventy}
            fromSeventy={fromSeventy}
          />

          <ProductCatDisplay
            productChecked={fruitsCakesChecked}
            displayContent={displayContent}
            product={cakes}
            handlSlide={handlSlide}
            productHeading="Fruits Cakes"
            category="Cakes"
            belowForty={belowForty}
            fortyFifty={fortyFifty}
            fiftySixty={fiftySixty}
            sixtySeventy={sixtySeventy}
            fromSeventy={fromSeventy}
          />

          <ProductCatDisplay
            productChecked={casualCakesChecked}
            displayContent={displayContent}
            product={cakes}
            handlSlide={handlSlide}
            productHeading="Casual Cakes"
            category="Cakes"
            belowForty={belowForty}
            fortyFifty={fortyFifty}
            fiftySixty={fiftySixty}
            sixtySeventy={sixtySeventy}
            fromSeventy={fromSeventy}
          />
        </div>
        <div className="overlay" onClick={handlSlide}></div>
      </div>
    </div>
  );
}

function FilterFormControl({
  productChecked,
  handleProductCheck,
  product,
  productHeading,
  productCategory,
}) {
  return (
    <div className="filter-form-control">
      <input
        type="checkbox"
        defaultChecked={productChecked}
        onChange={() => {
          handleProductCheck(productChecked);
        }}
      />
      <label>
        {productHeading} (
        {
          product.filter(
            (pro) =>
              pro.category === productCategory && pro.type === productHeading
          ).length
        }
        )
      </label>
    </div>
  );
}

function FilterPriceFormControl({
  priceTag,
  product,
  productCategory,
  min,
  max,
  priceChecked,
  handlePriceCheck,
}) {
  return (
    <div className="filter-form-control">
      <input
        type="checkbox"
        defaultChecked={priceChecked}
        onChange={() => handlePriceCheck((check) => !check)}
      />
      <label>
        {priceTag} (
        {
          product.filter(
            (pro) =>
              pro.category === productCategory &&
              pro.price >= min &&
              pro.price < max
          ).length
        }
        )
      </label>
    </div>
  );
}
