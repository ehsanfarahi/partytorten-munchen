import AddCake from "./AddCake";
import AddCookies from "./AddCookies";
import AddSweets from "./AddSweets";
import { useState } from "react";

export default function Admin() {
  const [actionWord, setActionWord] = useState("");

  function addPastry(action) {
    if (action === "add-cakes") {
      return <AddCake />;
    } else if (action === "add-cookies") {
      return <AddCookies />;
    } else if (action === "add-sweets") {
      return <AddSweets />;
    }
  }

  return (
    <div>
      <div className="cake-container">
        <div className="left-side-list d-grid gap-3">
          <button
            className="btn btn-primary btn-lg"
            onClick={() => setActionWord("add-cakes")}
          >
            Add Cakes
          </button>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => setActionWord("add-cookies")}
          >
            Add Cookies
          </button>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => setActionWord("add-sweets")}
          >
            Add Sweets
          </button>
        </div>
        <div className="content">{addPastry(actionWord)}</div>
      </div>
    </div>
  );
}
