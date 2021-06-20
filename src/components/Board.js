import React from 'react';
import { Square } from './Square.js'

export const Board = ({ squares, onClick }) => (
	<div style={style}>
		{squares.map((square, i) => (
			<Square key={i} value={square} onClick={() => onClick(i)} />
		))}
	</div>
);

const style = {
	border: ".2rem solid #fe8019",
	borderRadius: 8,
	width: "25rem",
	height: "25rem",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};
