import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
	return (
		<main>
			{/* {tours.map((tour) => {
				return <Tour />;
			})} */}
			<Tour />
		</main>
	);
};

export default Tours;
