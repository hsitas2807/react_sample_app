import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const FilterComponent = ({ onFilterChange }) => {
  const { pageSize, setPageSize, searchQuery, setSearchQuery } = useContext(GlobalContext);

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
        />
      </div>
      <div>
        <label>Page Size: </label>
        <select value={pageSize} onChange={(e) => setPageSize(parseInt(e.target.value))}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default FilterComponent;
