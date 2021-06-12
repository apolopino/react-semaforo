import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
	return (
		<div className="row justify-content-center pt-3 pb-3">
			<div
				className={props.color}
				style={{
					height: "70px",
					width: "70px",
					borderRadius: "50%",
					display: "block"
				}}></div>
		</div>
	);
}
Button.propTypes = {
	color: PropTypes.array
};
