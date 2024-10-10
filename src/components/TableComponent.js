import React from 'react';

const TableComponent = ({ data, columns, currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: '20px' }}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} style={{ padding: '10px', border: '1px solid #ccc', backgroundColor: '#c0e3e5' }}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} style={{ padding: '10px', border: '1px solid #ccc' }}>{item[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index} 
            onClick={() => onPageChange(index + 1)} 
            style={{
              padding: '10px',
              margin: '0 5px',
              backgroundColor: currentPage === index + 1 ? '#fdc936' : '#ebebeb',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px'
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TableComponent;
