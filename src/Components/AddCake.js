import { useState } from "react";

const AddCake = () => {
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");

  async function addCake(e) {
    console.log(image, type, category, weight, price);

    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("type", type);
    formdata.append("category", category);
    formdata.append("weight", weight);
    formdata.append("price", price);

    let result = await fetch("http://127.0.0.1:3001/add-cake", {
      method: "post",
      body: formdata,
    });

    result = await result.json();
    console.log(result);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto mt-4">
            <div className="card shadow">
              <div className="card-header bg-primary">
                <h3 className="text-light">Add New Cake</h3>
              </div>
              <div className="card-body p-4">
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image
                  </label>
                  <input
                    onChange={(e) => setImage(e.target.files[0])}
                    accept="image/*"
                    type="file"
                    name="image"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="type">Type</label>
                  <input
                    onChange={(e) => setType(e.target.value)}
                    type="text"
                    name="type"
                    className="form-control form-control-lg"
                    placeholder="Enter cake's type"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category">Category</label>

                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    type="text"
                    name="category"
                    className="form-control form-control-lg"
                    placeholder="Enter cake's category"
                    required
                  >
                    <option value="">Choose Cakes Category</option>
                    <option value="Birthday Cakes">Birthday Cakes</option>
                    <option value="Chocolate Cakes">Chocolate Cakes</option>
                    <option value="Fruits Cakes">Fruits Cakes</option>
                    <option value="Casual Cakes">Casual Cakes</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="weight">Weight</label>
                  <input
                    onChange={(e) => setWeight(e.target.value)}
                    type="text"
                    name="weight"
                    className="form-control form-control-lg"
                    placeholder="Enter cake's weight"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price">Price</label>
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                    name="price"
                    className="form-control form-control-lg"
                    placeholder="Enter cake's price"
                    required
                  />
                </div>

                <div className="mb-3 d-grid">
                  <input
                    onClick={addCake}
                    type="submit"
                    name="submit"
                    value="Add Cake"
                    className="btn btn-primary btn-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCake;
