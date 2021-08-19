import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const Table = () => {
  const { data } = useContext(StarWarsContext);
  if (!data.length) return <p>Loading...</p>;

  const tableKeys = Object.keys(data[0]).filter((key) => key !== 'residents');

  return (
    <table>
      <thead>
        <tr>
          {tableKeys.map((tableKey) => <th key={ tableKey }>{tableKey}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((infoList) => (
          <tr key={ infoList.name }>
            {tableKeys.map((tableKey) => (
              <td
                key={ infoList[tableKey] }
                data-testid={ tableKey === 'name' ? 'planet-name' : '' }
              >
                {infoList[tableKey]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
