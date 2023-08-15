import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

const AllUsers = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const navigate = useNavigate();

  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3001/user-signup").then((response) => {
      response.json().then((result) => {
        setAllUsers(result);
      });
    });
  }, []);

  const userDelete = (id) => {
    fetch(`http://127.0.0.1:3001/user-signup/` + id, {
      method: "delete",
    }).then((response) => {
      response.json().then((result) => {
        alert("User deleted!");
        navigate("/all-users");
      });
    });
  };

  const [searchData, setSearchData] = useState(null);
  const [noData, setNoData] = useState(false);

  const searchUser = (key) => {
    console.log(key);
    fetch("http://127.0.0.1:3001/user-signup?q=" + key).then((response) => {
      response.json().then((result) => {
        if (result.length > 0) {
          setSearchData(result);
        } else {
          setNoData(true);
          searchData(null);
        }
      });
    });
  };

  return (
    <div className="all-users-container">
      <div className="all-users-search">
        <input
          onChange={(e) => searchUser(e.target.value)}
          type="text"
          placeholder="Search users"
        />
      </div>

      {searchData ? (
        <div>
          <table>
            <tr>
              {searchData.map((data, i) => (
                <td>{data.firstName}</td>
              ))}
            </tr>
          </table>
        </div>
      ) : (
        <div className="all-users-content">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={{ minWidth: 170 }}>
                      #
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: 170 }}>
                      First Name
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: 170 }}>
                      Last Name
                    </TableCell>

                    <TableCell align="center" style={{ minWidth: 170 }}>
                      Email
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: 170 }}>
                      Password
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: 170 }}>
                      Phone #
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: 170 }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allUsers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((data, i) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={data._id}
                        >
                          <TableCell align="center">{i + 1}</TableCell>
                          <TableCell align="center">{data.firstName}</TableCell>
                          <TableCell align="center">{data.lastName}</TableCell>
                          <TableCell align="center">{data.email}</TableCell>
                          <TableCell align="center">{data.password}</TableCell>
                          <TableCell align="center">
                            {data.phoneNumber}
                          </TableCell>
                          <TableCell align="center">
                            <Button variant="contained">
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                                to={"/user-update/" + data._id}
                              >
                                Edit
                              </Link>
                            </Button>
                            <Button
                              onClick={() => {
                                userDelete(data._id);
                              }}
                              variant="outlined"
                              color="error"
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={allUsers.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      )}

      <div>{noData ? <h3>No data found</h3> : null}</div>
    </div>
  );
};

export default AllUsers;
