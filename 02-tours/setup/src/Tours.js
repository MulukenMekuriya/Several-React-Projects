import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
	return (
		<main>
			<h2>Hello Tours component</h2>
			{tours.map((tour) => {
				return <Tour />;
			})}
		</main>
	);
};

export default Tours;
