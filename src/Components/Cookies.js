import cake1 from "../images/cake1.jpg";
import cake2 from "../images/cake2.jpeg";
import cake3 from "../images/cake3.jpeg";
import cake4 from "../images/cake4.jpeg";
import cake5 from "../images/cake5.jpeg";

export default function Cookies() {
  return (
    <div>
      <div className="cookies-container">
        <div className="left-side-list">
          <div className="search-bar">
            <input type="text" placeholder="Search more cookies" />
          </div>
          <div className="filter-container">
            <p className="filter-heading">Filter Cookies</p>
            <div className="filter-engine">
              <p>Cookies Type</p>
              <div className="filter-cakes-types">
                <div className="filter-form-control">
                  <label>Birthday Cakes</label>
                  <input type="checkbox" />
                </div>
                <div className="filter-form-control">
                  <label>Chocolate Cakes</label>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
            <div className="filter-engine">
              <p>Cakes Price</p>
              <div className="filter-cakes-types">
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
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="birthday-cakes">
            <h2>Chocolate Cookies</h2>
            <div className="cakes-list">
              <img src={cake1} alt="birthday cake" width="150" height="150" />
              <img src={cake2} alt="birthday cake" width="150" height="150" />
              <img src={cake3} alt="birthday cake" width="150" height="150" />
              <img src={cake4} alt="birthday cake" width="150" height="150" />
              <img src={cake5} alt="birthday cake" width="150" height="150" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
