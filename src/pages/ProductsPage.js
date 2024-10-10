import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalState";
import FilterComponent from "../components/FilterComponent";
import TableComponent from "../components/TableComponent";
import Pagination from "../components/Pagination";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { pageSize, searchQuery, filterValue, setFilterValue } = useContext(GlobalContext);
  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Title', accessor: 'title' },
    { header: 'Price', accessor: 'price' },
    { header: 'Description', accessor: 'description' },
    { header: 'Category', accessor: 'category' },
    // Add other product-specific columns if needed
  ];
  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
        console.log("fetchProducts")
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`
      );
      setProducts(response.data.products);
      setTotalPages(Math.ceil(response.data.total / pageSize));
    };
    fetchProducts();
  }, [pageSize, currentPage]);

  // Filtering products based on searchQuery (title) or filterValue (brand, category)
  const filteredProducts = products.filter((product) => {
    const titleMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const brandMatch = product.brand.toLowerCase().includes(filterValue.toLowerCase());
    const categoryMatch = product.category.toLowerCase().includes(filterValue.toLowerCase());
    return titleMatch || brandMatch || categoryMatch;
  });

  return (
    <div>
      <h1>Products</h1>
      <FilterComponent 
        onFilterChange={(value) => setFilterValue(value)}
      />
      <TableComponent data={filteredProducts} columns={columns} />
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

export default ProductsPage;
