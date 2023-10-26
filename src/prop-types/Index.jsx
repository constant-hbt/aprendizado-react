import React from 'react';
import PropTypes from 'prop-types';

const Index = (props) => {
  return (
    <button
      style={{
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
        margin: props.margin,
      }}
    >
      {props.children}
    </button>
  );
};

Index.defaultProps = {
  margin: '10px',
};

Index.propTypes = {
  width: PropTypes.number.isRequired,
  margin: PropTypes.string,
};

export default Index;
