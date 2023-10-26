import React from 'react';

import data from '../data';

const coresData = data.coresArray;

const Index = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  return (
    <form>
      {coresData &&
        coresData.map((cor) => (
          <label
            htmlFor={cor}
            key={cor}
            style={{ textTransform: 'capitalize' }}
          >
            <input
              type="checkbox"
              name={cor}
              id={cor}
              value={cor}
              checked={cores.includes(cor)}
              onChange={handleChange}
            />
            {cor}
          </label>
        ))}
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};

export default Index;
