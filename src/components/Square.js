import React from 'react';

export const Square = ({ onClick, value }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

const style = {
	background: '#282828',
    color: '#ebdbb2',
	border: '.3rem solid #fe8019',
	fontSize: '4rem',
	fontWeight: '800',
	cursor: 'pointer',
	outline: 'none',
};
