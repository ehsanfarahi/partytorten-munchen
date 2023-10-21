import { useState } from "react";
import { Link } from "react-router-dom";

const AddSweets = () => {
  const [category, setCategory] = useState("Sweets");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function AddSweet(e) {
    const formdata = new FormData();
    formdata.append("category", category);
    formdata.append("file", image);
    formdata.append("title", title);
    formdata.append("type", type);
    formdata.append("weight", weight);
    formdata.append("price", price);
    formdata.append("description", description);

    let result = await fetch("http://127.0.0.1:3001/add-product", {
      method: "post",
      body: formdata,
    });
    result = await result.json();

    setDisplayXicon(true);
  }

  function resetForm() {
    setImage("");
    setTitle("");
    setType("");
    setWeight("");
    setPrice("");
    setDescription("");

    setDisplayXicon(false);
  }

  const [displayXicon, setDisplayXicon] = useState(false);

  function handleXicon() {
    setDisplayXicon(false);
  }

  return (
    <div className="add-product-container">
      <div className="main-container">
        <div className="heading">
          <h3>Add New Sweets</h3>
        </div>
        <div className="body">
          <div className="form-control">
            <label htmlFor="image">Image:</label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
              type="file"
              name="image"
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Type:</label>

            <select
              onChange={(e) => setType(e.target.value)}
              value={type}
              type="text"
              name="type"
              placeholder="Enter sweet's type"
              required
            >
              <option value="">Choose Sweet's Type</option>
              <option value="Tiramisu">Tiramisu</option>
              <option value="Chocolate Strawberries">
                Chocolate Strawberries
              </option>
              <option value="Cream Rolls">Cream Rolls</option>
              <option value="Pudding">Pudding</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="type">Title:</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              name="title"
              placeholder="Enter sweet's title"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Weight:</label>
            <input
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
              type="text"
              name="weight"
              placeholder="Enter sweet's weight in kg"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="price">Price:</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="text"
              name="price"
              placeholder="Enter sweet's price in Euro"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="type">Description:</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              name="description"
              placeholder="Enter sweet's description"
              required
            />
          </div>
        </div>
        <div className="bottom">
          <button onClick={AddSweet} type="submit">
            Add Sweets
          </button>
        </div>
      </div>
      {displayXicon && (
        <div className="add-product-message">
          <div className="message-container">
            <span className="x-icon" onClick={handleXicon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </span>
            <p>
              Sweets added! <span onClick={resetForm}>Add another</span>
              <Link to="/admin">Admin dashboard</Link>
            </p>
          </div>
          <div className="auto-underline"></div>
        </div>
      )}
    </div>
  );
};

export default AddSweets;
