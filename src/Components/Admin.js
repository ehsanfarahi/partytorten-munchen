import { Button } from "@mui/material";

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
        <div className="left-side-list">
          <Button variant="outlined" onClick={() => setActionWord("add-cakes")}>
            Add Cakes
          </Button>
          <Button
            variant="outlined"
            onClick={() => setActionWord("add-cookies")}
          >
            Add Cookies
          </Button>
          <Button
            variant="outlined"
            onClick={() => setActionWord("add-sweets")}
          >
            Add Sweets
          </Button>
        </div>
        <div className="content">{addPastry(actionWord)}</div>
      </div>
    </div>
  );
}
