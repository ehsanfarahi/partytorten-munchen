import { useEffect, useState } from "react";

// React Icons
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CakesList() {
  const [cakesList, setCakesList] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/products`).then((response) => {
      response.json().then((result) => {
        setCakesList(result);
        console.log(result);
      });
    });
  }, []);

  async function handleDelete(id) {
    let result = await fetch(`http://127.0.0.1:3001/delete-product/${id}`, {
      method: "delete",
    });

    result = await result.json();
    if (result) {
      alert("Product deleted!");
    }
  }
  return (
    <div className="product-list-container">
      <div className="main-container">
        {cakesList
          .filter((fCake) => fCake.category === "Cakes")
          .map((cake, i) => {
            return (
              <div className="tbl" key={cake._id}>
                <table>
                  <tr>
                    <td colSpan="2">
                      <img
                        src={require(`../uploads/productsImages/${cake.image}`)}
                        alt={cake.type}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">{cake.uploadDate}</td>
                  </tr>
                  <tr className="action">
                    <td>
                      <Link to={`edit-product:id=${cake._id}`}>
                        <MdOutlineEdit />
                      </Link>
                    </td>
                    <td>
                      <MdOutlineDeleteOutline
                        onClick={() => handleDelete(cake._id)}
                      />
                    </td>
                  </tr>
                </table>
              </div>
            );
          })}
      </div>
      <Message />
    </div>
  );
}

function Message() {
  return (
    <div className="delete-message-container">
      <p>Are you sure, you want to delete this item?</p>
      <div className="action">
        <button>Cancel</button>
        <button>Yes</button>
      </div>
    </div>
  );
}
