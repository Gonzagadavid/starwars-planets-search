import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const Table = () => {
  const { data } = useContext(StarWarsContext);
  if (!data.length) return <p>Loading</p>;

  const heads = Object.keys(data[0]).filter((key) => key !== 'residents');

  return (
    <table>
      <thead>
        <tr>
          {heads.map((head) => <th key={ head }>{head}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((infoList) => (
          <tr key={ infoList.name }>
            {heads.map((head) => (
              <td
                key={ infoList[head] }
                data-testid={ head === 'name' ? 'planet-name' : '' }
              >
                {infoList[head]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
