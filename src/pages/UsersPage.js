import React,{ useEffect, useState, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalState";
import FilterComponent from "../components/FilterComponent";
import TableComponent from "../components/TableComponent";
import Pagination from "../components/Pagination";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { pageSize, searchQuery } = useContext(GlobalContext);
  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'First Name', accessor: 'firstName' },
    { header: 'Last Name', accessor: 'lastName' },
    { header: 'Email', accessor: 'email' },
    { header: 'Gender', accessor: 'gender' },
    // Add other user-specific columns if needed
  ];
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`https://dummyjson.com/users?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`);
      setUsers(response.data.users);
      setTotalPages(Math.ceil(response.data.total / pageSize));
    };
    fetchUsers();
  }, [pageSize, currentPage]);

  const filteredUsers = users.filter(user => user.firstName.includes(searchQuery));

  return (
    <div>
      <h1>Users</h1>
      <FilterComponent />
      <TableComponent data={filteredUsers} columns={columns}/>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default UsersPage;
