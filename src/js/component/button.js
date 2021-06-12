import React, { useState } from "react";
import PropTypes from "prop-types";

const stylesA = {
	height: "70px",
	width: "70px",
	borderRadius: "50%",
	display: "block",
	boxShadow: "none"
};

const stylesB = {
	height: "70px",
	width: "70px",
	borderRadius: "50%",
	display: "block",
	boxShadow: `0px 0px 17px 36px #FFC545`
};

export default function Button(props) {
	return (
		<div className="row justify-content-center pt-3 pb-3">
			<button
				className={props.color}
				style={props.active === true ? stylesB : stylesA}></button>
		</div>
	);
}
Button.propTypes = {
	color: PropTypes.array,
	active: PropTypes.bool
};
