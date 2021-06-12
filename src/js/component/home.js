import React from "react";
import PropTypes from "prop-types";
import Button from "./button.js";

export function Home() {
	return (
		<div>
			<div className="mt-5 d-flex justify-content-center">
				<div
					className="card"
					style={{ width: "150px", backgroundColor: "black" }}>
					<div className="card-body">
						<Button color="bg-danger" />
						<Button color="bg-warning" />
						<Button color="bg-success" />
					</div>
				</div>
			</div>
		</div>
	);
}
