const AddCookies = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto mt-4">
            <div className="card shadow">
              <div className="card-header bg-primary">
                <h3 className="text-light">Add New Cookies</h3>
              </div>
              <div className="card-body p-4">
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image
                  </label>
                  <input
                    accept="image/*"
                    type="file"
                    name="image"
                    className="form-control form-control-lg"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="type">Type</label>
                  <input
                    type="text"
                    name="type"
                    className="form-control form-control-lg"
                    placeholder="Enter cookies type"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    name="category"
                    className="form-control form-control-lg"
                    placeholder="Enter cookies category"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="weight">Weight</label>
                  <input
                    type="text"
                    name="weight"
                    className="form-control form-control-lg"
                    placeholder="Enter cookies weight"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    name="price"
                    className="form-control form-control-lg"
                    placeholder="Enter cookies price"
                    required
                  />
                </div>

                <div className="mb-3 d-grid">
                  <input
                    type="submit"
                    name="submit"
                    value="Add Cookies"
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

export default AddCookies;
